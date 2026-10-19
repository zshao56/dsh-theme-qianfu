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
			"--dsw-specific-sidebar-fill": pair("#e8dcc4", "#0a1110"),
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

		const inject = ["theme"];

		function apply(ctx) {
			const theme = ctx.theme;
			if (theme === undefined || typeof theme.overrideTokens !== "function") return;
			ctx.effect(
				() => theme.overrideTokens("dsh-theme-qianfu", LAYER),
				"dsh-theme-qianfu: palette layer"
			);
		}

		exports.apply = apply;
		exports.inject = inject;
		exports.isPlugin = true;
		return module.exports;
	}
});
