/**
 * Contract + contrast test for dsh-theme-qianfu.
 *
 * Runs the browser half in a tiny VM with a fake module loader and a fake
 * `ctx.theme`, then checks the layer shape, colour syntax and the WCAG
 * contrast of the text pairs that matter most.
 *
 * Run: npm test
 */
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../lib/client.js", import.meta.url), "utf8");

let loaded;
const sandbox = {
	window: {
		__ModuleLoader__: {
			load(definition) {
				loaded = definition;
			}
		}
	},
	console
};
vm.createContext(sandbox);
vm.runInContext(source, sandbox);

if (!loaded) throw new Error("client.js did not call window.__ModuleLoader__.load");
if (loaded.id !== "dsh-theme-qianfu") throw new Error(`unexpected plugin id: ${loaded.id}`);

const mod = loaded.factory(() => {
	throw new Error("the theme must not require any browser module");
});

if (!Array.isArray(mod.inject) || !mod.inject.includes("theme")) {
	throw new Error("exports.inject must include the `theme` service");
}
if (mod.isPlugin !== true) throw new Error("exports.isPlugin must be true");
if (typeof mod.apply !== "function") throw new Error("exports.apply must be a function");

let registered;
let disposed = 0;
let effectLabel;
let effectDisposer;
const ctx = {
	theme: {
		overrideTokens(source, tokens) {
			registered = { source, tokens };
			return () => {
				disposed += 1;
			};
		}
	},
	effect(fn, label) {
		effectLabel = label;
		const dispose = fn();
		if (typeof dispose === "function") effectDisposer = dispose;
		return dispose;
	}
};

mod.apply(ctx);

if (!registered) throw new Error("apply() did not call ctx.theme.overrideTokens");
if (registered.source !== "dsh-theme-qianfu") throw new Error("override source must be the package id");
if (typeof effectLabel !== "string" || effectLabel.length === 0) throw new Error("effect label missing");
if (typeof registered.tokens !== "object" || registered.tokens === null) throw new Error("tokens missing");

const tokens = registered.tokens;
const names = Object.keys(tokens);
if (names.length < 120) throw new Error(`expected a full palette, got ${names.length} tokens`);

const isColour = (value) =>
	/^#[0-9a-f]{3,8}$/i.test(value) ||
	/^rgba?\([^)]*\)$/i.test(value) ||
	/^linear-gradient\([\s\S]*\)$/i.test(value);
for (const [name, value] of Object.entries(tokens)) {
	if (!name.startsWith("--")) throw new Error(`invalid token name: ${name}`);
	if (value === null || typeof value !== "object") throw new Error(`${name} must be a { light, dark } pair`);
	for (const mode of ["light", "dark"]) {
		if (typeof value[mode] !== "string" || value[mode].trim() === "") {
			throw new Error(`${name}.${mode} must be a non-empty string`);
		}
		if (!isColour(value[mode].trim())) {
			throw new Error(`${name}.${mode} is not a recognised CSS value: ${value[mode]}`);
		}
	}
}

/* ---------- WCAG contrast on the pairs users read text through ---------- */

const rgb = (hex) => {
	let h = hex.replace("#", "");
	if (h.length === 3) h = h.split("").map((c) => c + c).join("");
	return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
};
const luminance = ([r, g, b]) => {
	const channel = (v) => {
		v /= 255;
		return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
	};
	return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};
const contrast = (a, b) => {
	const l1 = luminance(rgb(a));
	const l2 = luminance(rgb(b));
	return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

const pairs = [
	["label-primary / bg-base", "--dsw-alias-label-primary", "--dsw-alias-bg-base"],
	["label-secondary / bg-base", "--dsw-alias-label-secondary", "--dsw-alias-bg-base"],
	["label-tertiary / bg-base", "--dsw-alias-label-tertiary", "--dsw-alias-bg-base"],
	["label-tertiary / bg-layer-1", "--dsw-alias-label-tertiary", "--dsw-alias-bg-layer-1"],
	["label-primary / bubble", "--dsw-alias-label-primary", "--dsw-specific-bubble"],
	["brand-text / brand-primary", "--dsw-alias-brand-text", "--dsw-alias-brand-primary"],
	["button text / primary fill", "--dsw-alias-label-primary-foreground", "--dsw-alias-button-primary-fill"],
	["toast label / toast bg", "--dsw-alias-toast-label", "--dsw-alias-toast-bg"],
	["error / bg-base", "--dsw-alias-state-error-primary", "--dsw-alias-bg-base"],
	["success / bg-base", "--dsw-alias-state-success-primary", "--dsw-alias-bg-base"],
	["warn / bg-base", "--dsw-alias-state-warn-primary", "--dsw-alias-bg-base"],
	["warn-label / bg-base", "--dsw-alias-state-warn-label", "--dsw-alias-bg-base"],
	["link / bg-base", "--dsw-alias-link", "--dsw-alias-bg-base"],
	["business / bg-base", "--dsw-alias-state-business-primary", "--dsw-alias-bg-base"]
];

const failures = [];
for (const [label, fg, bg] of pairs) {
	for (const mode of ["light", "dark"]) {
		const ratio = contrast(tokens[fg][mode], tokens[bg][mode]);
		const minimum = 4.5;
		console.log(`${mode.padEnd(5)} ${label.padEnd(34)} ${ratio.toFixed(2)}:1`);
		if (ratio < minimum) failures.push(`${label} (${mode}) is ${ratio.toFixed(2)}:1, needs >= ${minimum}:1`);
	}
}

/* ---------- disposer ---------- */

if (typeof effectDisposer !== "function") {
	throw new Error("apply() did not keep the override disposer in a ctx.effect scope");
}
effectDisposer();
if (disposed !== 1) throw new Error("the override layer was not disposed exactly once");

if (failures.length > 0) {
	console.error("\nContrast failures:\n" + failures.map((line) => `  - ${line}`).join("\n"));
	process.exit(1);
}

console.log(`\nOK — ${names.length} tokens, all pairs >= 4.5:1`);
