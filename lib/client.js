/**
 * 潜伏 QIANFU — browser half.
 *
 * A palette-only theme for the DeepSeek Harness web GUI. Instead of replacing
 * the built-in light/dark themes, it stacks one alias-token layer through the
 * official `ctx.theme.overrideTokens()` seam. The user keeps the normal
 * Appearance setting (light / dark / follow system); every token carries a
 * value for both palettes, so switching appearance switches the theme between
 * 「旧纸档案」 and 「暗夜电台」.
 *
 * Uninstall or disable the plugin and the layer is disposed with it — no CSS
 * leftovers, no profile patch to clean up.
 *
 * Fan-made theme inspired by the 2009 TV drama 《潜伏》. Not affiliated with or
 * endorsed by the rights holders; no artwork or logos are included.
 */
window.__ModuleLoader__.load({
	id: "dsh-theme-qianfu",
	factory: () => {
		var module = { exports: {} };
		var exports = module.exports;

		/** One token value per colour scheme. */
		const pair = (light, dark) => Object.freeze({ light, dark });

		/**
		 * 「旧纸档案」 (light) / 「暗夜电台」 (dark).
		 *
		 * Light: aged telegram paper, iron-gall ink, ink-green suits, brass
		 * fittings and a seal-red warning. Dark: a radio room at 3 a.m. — near
		 * black green, smoked teal surfaces, brass dials and a muted crimson.
		 */
		const LAYER = Object.freeze({
			// ── base surfaces ────────────────────────────────────────────────
			"--dsw-alias-bg-base": pair("#efe6d2", "#0d1414"),
			"--dsw-alias-bg-document-preview": pair("#f7f1e3", "#131d1c"),
			"--dsw-alias-bg-document-selection": pair("rgba(63, 90, 74, 0.20)", "rgba(127, 160, 140, 0.26)"),
			"--dsw-alias-label-document-preview": pair("#5b5344", "#b3a78c"),
			"--dsw-alias-bg-layer-1": pair("#f7f1e3", "#131d1c"),
			"--dsw-alias-bg-layer-2": pair("#e9dec6", "#1a2624"),
			"--dsw-alias-bg-layer-3": pair("#dfd1b4", "#223230"),
			"--dsw-alias-bg-overlay": pair("#e5d8bd", "#1a2624"),
			"--dsw-alias-bg-module-platform": pair("#ece1ca", "#131d1c"),
			"--dsw-alias-bg-multi-select": pair("#e5d8bd", "#223230"),
			"--dsw-alias-bg-skeleton": pair("rgba(34, 30, 24, 0.08)", "rgba(232, 221, 198, 0.08)"),

			// ── masks ────────────────────────────────────────────────────────
			"--dsw-alias-bg-mask-1": pair("rgba(34, 30, 24, 0.26)", "rgba(0, 0, 0, 0.34)"),
			"--dsw-alias-bg-mask-2": pair("rgba(34, 30, 24, 0.12)", "rgba(0, 0, 0, 0.16)"),
			"--dsw-alias-bg-mask-3": pair("rgba(34, 30, 24, 0.46)", "rgba(0, 0, 0, 0.56)"),
			"--dsw-alias-bg-mask-drop": pair("rgba(34, 30, 24, 0.18)", "rgba(0, 0, 0, 0.22)"),
			"--dsw-alias-bg-mask-photo": pair("rgba(34, 30, 24, 0.40)", "rgba(0, 0, 0, 0.46)"),

			// ── hairlines ────────────────────────────────────────────────────
			"--dsw-alias-border-l1": pair("rgba(34, 30, 24, 0.07)", "rgba(232, 221, 198, 0.06)"),
			"--dsw-alias-border-l2": pair("rgba(34, 30, 24, 0.13)", "rgba(232, 221, 198, 0.11)"),
			"--dsw-alias-border-l2-darkmode-thin": pair("rgba(34, 30, 24, 0.13)", "rgba(232, 221, 198, 0.11)"),
			"--dsw-alias-border-l3": pair("rgba(34, 30, 24, 0.19)", "rgba(232, 221, 198, 0.17)"),
			"--dsw-alias-border-l4": pair("rgba(34, 30, 24, 0.26)", "rgba(232, 221, 198, 0.25)"),
			"--dsw-alias-border-inverted": pair("rgba(34, 30, 24, 0.08)", "rgba(232, 221, 198, 0.10)"),
			"--dsw-alias-border-inverted2": pair("rgba(34, 30, 24, 0.08)", "rgba(232, 221, 198, 0.10)"),

			// ── brand & buttons ──────────────────────────────────────────────
			"--dsw-alias-brand-primary": pair("#3f5a4a", "#7fa08c"),
			"--dsw-alias-brand-primary-invert": pair("#221e18", "#e8ddc6"),
			"--dsw-alias-brand-text": pair("#f7f1e3", "#0d1414"),
			"--dsw-alias-button-primary-fill": pair("#3f5a4a", "#7fa08c"),
			"--dsw-alias-button-primary-hover": pair("#4c6b58", "#93b3a0"),
			"--dsw-alias-button-primary-dimmed": pair("rgba(63, 90, 74, 0.14)", "rgba(127, 160, 140, 0.14)"),
			"--dsw-alias-button-info-fill": pair("#3f5a4a", "#7fa08c"),
			"--dsw-alias-button-info-hover": pair("#4c6b58", "#93b3a0"),
			"--dsw-alias-button-contrast-fill": pair("#221e18", "#e8ddc6"),
			"--dsw-alias-button-elevated-fill": pair("#f7f1e3", "#1a2624"),
			"--dsw-alias-button-floating-fill": pair("#f7f1e3", "#1a2624"),
			"--dsw-alias-button-floating-hover": pair("#e9dec6", "#223230"),
			"--dsw-alias-button-ghost-active-fill": pair("#e9dec6", "#223230"),
			"--dsw-alias-button-ghost-active-hover": pair("#dfd1b4", "#2a3a37"),
			"--dsw-alias-button-ghost-active-border": pair("#7a6f5b", "#6f8a7a"),
			"--dsw-alias-button-tool-bar-fill": pair("rgba(34, 30, 24, 0.18)", "rgba(232, 221, 198, 0.18)"),
			"--dsw-alias-button-tool-bar-fill-invisible": pair("rgba(34, 30, 24, 0.10)", "rgba(232, 221, 198, 0.10)"),
			"--dsw-alias-button-tool-bar-hover": pair("rgba(34, 30, 24, 0.28)", "rgba(232, 221, 198, 0.28)"),

			// ── labels ───────────────────────────────────────────────────────
			"--dsw-alias-label-primary": pair("#221e18", "#e8ddc6"),
			"--dsw-alias-label-primary-bluish": pair("#26322c", "#dce6dd"),
			"--dsw-alias-label-secondary": pair("#5b5344", "#b3a78c"),
			"--dsw-alias-label-tertiary": pair("#6b604d", "#948972"),
			"--dsw-alias-label-caption": pair("#6b604d", "#948972"),
			"--dsw-alias-label-dimmed": pair("rgba(34, 30, 24, 0.45)", "rgba(232, 221, 198, 0.45)"),
			"--dsw-alias-label-primary-dimmed": pair("#3a3329", "#cbbfa5"),
			"--dsw-alias-label-primary-foreground": pair("#f7f1e3", "#14100a"),
			"--dsw-alias-label-primary-inverted": pair("#f7f1e3", "#14100a"),
			"--dsw-alias-label-shimmer": pair("rgba(34, 30, 24, 0.30)", "rgba(232, 221, 198, 0.45)"),
			"--dsw-alias-label-deep-diving": pair("#2f6b57", "#c2a15a"),
			"--dsw-alias-label-deep-diving-shimmer": pair("rgba(47, 107, 87, 0.45)", "rgba(194, 161, 90, 0.45)"),
			"--dsw-alias-link": pair("#2f6b57", "#9cc0aa"),

			// ── interaction ──────────────────────────────────────────────────
			"--dsw-alias-interactive-bg-hover": pair("rgba(34, 30, 24, 0.06)", "rgba(232, 221, 198, 0.07)"),
			"--dsw-alias-interactive-bg-active": pair("rgba(34, 30, 24, 0.11)", "rgba(232, 221, 198, 0.13)"),
			"--dsw-alias-interactive-bg-hover-accent": pair("rgba(63, 90, 74, 0.12)", "rgba(127, 160, 140, 0.14)"),
			"--dsw-alias-interactive-bg-hover-danger": pair("rgba(158, 59, 50, 0.08)", "rgba(194, 106, 94, 0.10)"),
			"--dsw-alias-interactive-bg-hover-solid": pair("#e9dec6", "#223230"),

			// ── markdown & code ──────────────────────────────────────────────
			"--dsw-alias-markdown-code-block": pair("#e8dcc4", "#101918"),
			"--dsw-alias-markdown-code-block-banner": pair("#ded0b3", "#17211f"),
			"--dsw-alias-markdown-inline-code": pair("#e8dcc4", "#101918"),
			"--dsw-alias-markdown-code-segment-selected": pair("#ded0b3", "#17211f"),
			"--dsw-alias-markdown-code-segment-unselected": pair("#e8dcc4", "#101918"),
			"--dsw-alias-markdown-citation": pair("#e5d8bd", "#1a2624"),
			"--dsw-alias-markdown-placeholder": pair("#e5d8bd", "#1a2624"),
			"--dsw-alias-markdown-tag": pair("#dfd1b4", "#223230"),

			// ── states ───────────────────────────────────────────────────────
			"--dsw-alias-state-business-primary": pair("#7c5a22", "#c2a15a"),
			"--dsw-alias-state-business-tertiary": pair("rgba(124, 90, 34, 0.14)", "rgba(194, 161, 90, 0.14)"),
			"--dsw-alias-state-error-primary": pair("#9e3b32", "#c26a5e"),
			"--dsw-alias-state-error-secondary": pair("rgba(158, 59, 50, 0.75)", "rgba(194, 106, 94, 0.75)"),
			"--dsw-alias-state-success-primary": pair("#4f6b45", "#86a37c"),
			"--dsw-alias-state-success-secondary": pair("#4f6b45", "#86a37c"),
			"--dsw-alias-state-success-tertiary": pair("rgba(79, 107, 69, 0.14)", "rgba(134, 163, 124, 0.14)"),
			"--dsw-alias-state-warn-primary": pair("#7d5316", "#d1a35a"),
			"--dsw-alias-state-warn-secondary": pair("#7d5316", "#d1a35a"),
			"--dsw-alias-state-warn-tertiary": pair("rgba(125, 83, 22, 0.16)", "rgba(209, 163, 90, 0.16)"),
			"--dsw-alias-state-warn-label": pair("#7a5318", "#e0b46b"),
			"--dsw-alias-state-idle-primary": pair("#6b604d", "#948972"),

			// ── scrollbars ───────────────────────────────────────────────────
			"--dsw-alias-scrollbar-bg-l1": pair("rgba(34, 30, 24, 0.14)", "rgba(232, 221, 198, 0.14)"),
			"--dsw-alias-scrollbar-bg-l2": pair("rgba(34, 30, 24, 0.14)", "rgba(232, 221, 198, 0.14)"),
			"--dsw-alias-scrollbar-hover-l1": pair("rgba(34, 30, 24, 0.26)", "rgba(232, 221, 198, 0.26)"),
			"--dsw-alias-scrollbar-hover-l2": pair("rgba(34, 30, 24, 0.26)", "rgba(232, 221, 198, 0.26)"),

			// ── toast, tooltip, menus ────────────────────────────────────────
			"--dsw-alias-toast-bg": pair("#2a2520", "#3a332a"),
			"--dsw-alias-toast-label": pair("#f7f1e3", "#f2e8d2"),
			"--dsw-alias-tooltip-bg": pair("#2a2520", "#3a332a"),
			"--dsw-alias-tooltip-key-bg": pair("rgba(247, 241, 227, 0.16)", "rgba(20, 16, 10, 0.18)"),
			"--dsw-alias-turn-trigger-bg": pair("#e9dec6", "#1a2624"),
			"--dsw-alias-turn-trigger-bg-hover": pair("#dfd1b4", "#223230"),
			"--dsw-alias-switch-thumb": pair("#f7f1e3", "#cfc3a8"),
			"--dsw-alias-menu-icon": pair("#5b5344", "#cfc3a8"),
			"--dsw-alias-menu-group-header-fill": pair("rgba(247, 241, 227, 0.94)", "rgba(26, 38, 36, 0.94)"),
			"--dsw-alias-settings-card-fill": pair("#f7f1e3", "#131d1c"),
			"--dsw-alias-settings-card-stroke": pair("rgba(34, 30, 24, 0.10)", "rgba(232, 221, 198, 0.10)"),

			// ── feature surfaces ─────────────────────────────────────────────
			"--dsw-specific-bubble": pair("#e3d6bc", "#16211f"),
			"--dsw-specific-bubble-highlight": pair("rgba(63, 90, 74, 0.12)", "rgba(127, 160, 140, 0.14)"),
			"--dsw-specific-input-major": pair("#f7f1e3", "#131d1c"),
			"--dsw-specific-login-input": pair("#e9dec6", "#1a2624"),
			"--dsw-specific-menu": pair("#f7f1e3", "#1a2624"),
			"--dsw-specific-selector": pair("#e9dec6", "#223230"),
			"--dsw-specific-sidebar-fill": pair("#ece1ca", "#101819"),
			"--dsw-specific-sidebar-nav-item-active": pair("rgba(34, 30, 24, 0.06)", "rgba(232, 221, 198, 0.06)"),
			"--dsw-specific-sidebar-nav-item-active-accent": pair("rgba(63, 90, 74, 0.14)", "rgba(127, 160, 140, 0.16)"),
			"--dsw-specific-sidebar-nav-item-hover": pair("rgba(34, 30, 24, 0.04)", "rgba(232, 221, 198, 0.04)"),
			"--dsw-specific-tip": pair("#e9dec6", "#223230"),

			// ── diffs ────────────────────────────────────────────────────────
			"--dsw-alias-code-diff-added": pair("rgba(79, 107, 69, 0.16)", "rgba(134, 163, 124, 0.16)"),
			"--dsw-alias-code-diff-deleted": pair("rgba(158, 59, 50, 0.14)", "rgba(194, 106, 94, 0.14)"),
			"--dsw-alias-file-diff-added-bg": pair("rgba(79, 107, 69, 0.10)", "rgba(134, 163, 124, 0.10)"),
			"--dsw-alias-file-diff-added-gutter": pair("rgba(79, 107, 69, 0.22)", "rgba(134, 163, 124, 0.22)"),
			"--dsw-alias-file-diff-added-marker": pair("#4f6b45", "#86a37c"),
			"--dsw-alias-file-diff-deleted-bg": pair("rgba(158, 59, 50, 0.09)", "rgba(194, 106, 94, 0.10)"),
			"--dsw-alias-file-diff-deleted-gutter": pair("rgba(158, 59, 50, 0.20)", "rgba(194, 106, 94, 0.20)"),
			"--dsw-alias-file-diff-deleted-marker": pair("#9e3b32", "#c26a5e"),

			// ── gradients ────────────────────────────────────────────────────
			"--dsw-linear-gradient-think": pair(
				"linear-gradient(180deg, rgb(239, 230, 210) 20.19%, rgba(239, 230, 210, 0) 100%)",
				"linear-gradient(180deg, rgb(13, 20, 20) 20.19%, rgba(13, 20, 20, 0) 100%)"
			),
			"--dsw-linear-think-select": pair(
				"linear-gradient(180deg, rgb(233, 222, 198) 20.19%, rgba(233, 222, 198, 0) 100%)",
				"linear-gradient(180deg, rgb(26, 38, 36) 20.19%, rgba(26, 38, 36, 0) 100%)"
			),

			// ── onboarding ───────────────────────────────────────────────────
			"--dsw-alias-onboarding-accent": pair("#3f5a4a", "#c2a15a"),
			"--dsw-alias-onboarding-card-fill": pair("#f7f1e3", "#131d1c"),
			"--dsw-alias-onboarding-checkbox-border": pair("#7a6f5b", "#6f8a7a"),
			"--dsw-alias-onboarding-secondary-fill": pair("#e9dec6", "#1a2624"),

			// ── syntax highlighting ──────────────────────────────────────────
			"--shiki-token-constant": pair("#7a4a1f", "#d1a35a"),
			"--shiki-token-string": pair("#4f6b45", "#96b08a"),
			"--shiki-token-comment": pair("#8a7d67", "#7d7460"),
			"--shiki-token-keyword": pair("#8c3b32", "#d08a7e"),
			"--shiki-token-parameter": pair("#9a6b25", "#e0b46b"),
			"--shiki-token-function": pair("#2f6b57", "#9cc0aa"),
			"--shiki-token-string-expression": pair("#3f6b48", "#a3c096"),
			"--shiki-token-punctuation": pair("#5b5344", "#b3a78c"),
			"--shiki-token-link": pair("#2f6b57", "#9cc0aa")
		});

		/**
		 * Sidebar mascot: an original cartoon whale spy (fedora, trench collar,
		 * telegram and a seal-red tie). Embedded so the skin has no extra HTTP
		 * request and the package stays a single client module.
		 */
		const SIDEBAR_ART = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 230" width="260" height="230" role="img" aria-label="A cartoon whale spy in a fedora, holding a telegram">
  <!-- moon and radio waves -->
  <g opacity=".55">
    <path d="M196 34a18 18 0 1 0 0 30 22 22 0 0 1 0-30Z" fill="#a67c3d"/>
    <path d="M34 52c8-10 18-10 26 0M28 42c12-14 28-14 40 0" fill="none" stroke="#a67c3d" stroke-width="2" stroke-linecap="round"/>
    <path d="M206 92c10 8 10 20 0 28M216 84c16 12 16 32 0 44" fill="none" stroke="#a67c3d" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- shadow -->
  <ellipse cx="128" cy="198" rx="76" ry="12" fill="#241f18" opacity=".14"/>

  <!-- tail -->
  <path d="M66 150c-18-8-30-2-38 10 12-2 18 2 22 10 6-12 12-16 20-12Z" fill="#3f5a4a"/>

  <!-- body -->
  <path d="M74 140c0-34 22-58 56-58s58 24 58 58c0 28-22 44-56 44s-58-16-58-44Z" fill="#4f6f5f"/>
  <path d="M96 166c10 10 22 14 34 14s26-4 36-14c-10 6-22 8-36 8s-24-2-34-8Z" fill="#d8cbb1" opacity=".9"/>

  <!-- trench collar -->
  <path d="M92 126c8 12 18 18 36 18s28-6 36-18l-10-14-26 10-26-10Z" fill="#2a3a31"/>

  <!-- trench collar and tie -->
  <path d="M110 140l16 12-16 10Z" fill="#2a3a31"/>
  <path d="M146 140l-16 12 16 10Z" fill="#2a3a31"/>
  <path d="M125 146h6l3 7-6 18-6-18Z" fill="#9e3b32"/>

  <!-- fedora -->
  <path d="M84 104c0-6 10-10 42-10s42 4 42 10-14 10-42 10-42-4-42-10Z" fill="#241f18"/>
  <path d="M100 104V76c0-8 8-14 26-14s26 6 26 14v28Z" fill="#241f18"/>
  <path d="M102 90h50v10h-50Z" fill="#a67c3d"/>

  <!-- eyes -->
  <ellipse cx="108" cy="124" rx="7" ry="8" fill="#f7f1e3"/>
  <ellipse cx="146" cy="124" rx="7" ry="8" fill="#f7f1e3"/>
  <circle cx="110" cy="125" r="3" fill="#241f18"/>
  <circle cx="148" cy="125" r="3" fill="#241f18"/>
  <path d="M98 112c6-4 12-4 18 0" fill="none" stroke="#241f18" stroke-width="2.5" stroke-linecap="round"/>

  <!-- blowhole -->
  <path d="M128 86c0-8 4-12 8-14M132 84c4-6 10-8 14-6" fill="none" stroke="#d8cbb1" stroke-width="2" stroke-linecap="round" opacity=".7"/>

  <!-- telegram -->
  <g transform="rotate(-8 190 166)">
    <rect x="160" y="148" width="58" height="44" rx="3" fill="#f7f1e3" stroke="#a67c3d" stroke-width="1.5"/>
    <path d="M168 160h34M168 168h42M168 176h28" stroke="#8a7d67" stroke-width="2" stroke-linecap="round"/>
    <rect x="198" y="178" width="14" height="10" rx="1" fill="#9e3b32" opacity=".85"/>
  </g>

  <!-- flipper holding the telegram -->
  <path d="M166 158c8 2 14 8 16 16l-9 4c-2-6-7-10-13-11Z" fill="#3f5a4a"/>

  <!-- seal -->
  <g transform="rotate(7 214 206)">
    <rect x="198" y="190" width="30" height="30" rx="3" fill="none" stroke="#9e3b32" stroke-width="2"/>
    <text x="213" y="212" text-anchor="middle" font-family="Songti SC, STSong, serif" font-size="18" fill="#9e3b32">潜</text>
  </g>
</svg>`;
		const SIDEBAR_ART_URL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(SIDEBAR_ART)}`;

		/**
		 * macOS paints the native sidebar transparent (window vibrancy), which is
		 * what makes the default paper sidebar sit next to a grey window. Paint
		 * that one surface with the theme's paper colour and hang the mascot at
		 * the bottom. The selector is structural (root div with window-drag
		 * children) because the sidebar class names are CSS-module hashes.
		 */
		const SKIN_CSS = `
@supports selector(:has(*)) {
	div[class*="_root"]:has(> [data-window-drag]):has(> [class*="_logoRow"]) {
		background-image: url("${SIDEBAR_ART_URL}"), linear-gradient(180deg, rgba(255, 255, 255, 0.10), transparent 42%);
		background-repeat: no-repeat, no-repeat;
		background-position: center bottom 44px, 0 0;
		background-size: 176px auto, 100% 100%;
		background-size: min(176px, 74%) auto, 100% 100%;
	}
	html[data-platform="darwin"] div[class*="_root"]:has(> [data-window-drag]):has(> [class*="_logoRow"]) {
		background-color: var(--dsw-alias-bg-module-platform) !important;
		box-shadow: inset -1px 0 0 var(--dsw-alias-border-l2);
	}
}
`;

		const inject = ["theme"];

		/** Add the skin stylesheet; unload removes it with the plugin. */
		function injectSkin() {
			if (typeof document === "undefined") return () => {};
			const style = document.createElement("style");
			style.dataset.plugin = "dsh-theme-qianfu";
			style.dataset.pluginCss = "dsh-theme-qianfu/skin.css";
			style.textContent = SKIN_CSS;
			document.head.appendChild(style);
			return () => style.remove();
		}

		function apply(ctx) {
			const theme = ctx.theme;
			if (theme === undefined || typeof theme.overrideTokens !== "function") return;
			ctx.effect(() => {
				const removeTokens = theme.overrideTokens("dsh-theme-qianfu", LAYER);
				const removeSkin = injectSkin();
				return () => {
					removeTokens();
					removeSkin();
				};
			}, "dsh-theme-qianfu: palette layer");
		}

		exports.apply = apply;
		exports.inject = inject;
		exports.isPlugin = true;
		return module.exports;
	}
});
