import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter
} from "./chunk-ENIMN6E2.js";
import {
  APP_INITIALIZER,
  CommonModule,
  ElementRef,
  I18nService,
  TranslatePipe,
  bootstrapApplication,
  filter,
  provideZoneChangeDetection,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-UA3FDTCO.js";
import "./chunk-Y5RQAIA6.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-OBST3DSO.js").then((m) => m.HomeComponent),
    title: "Eranitor \u2014 Estudar nunca foi t\xE3o organizado"
  },
  {
    path: "sobre-nos",
    loadComponent: () => import("./chunk-4JIG7PTG.js").then((m) => m.SobreComponent),
    title: "Sobre n\xF3s \u2014 Eranitor"
  },
  {
    path: "contato",
    loadComponent: () => import("./chunk-6E2665U2.js").then((m) => m.ContatoComponent),
    title: "Contato \u2014 Eranitor"
  },
  {
    path: "baixar",
    loadComponent: () => import("./chunk-SU37DH56.js").then((m) => m.DownloadComponent),
    title: "Baixar o Eranitor"
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/theme.service.ts
var STORAGE_KEY = "eranitor-theme";
var ThemeService = class _ThemeService {
  theme = signal("dark");
  init() {
    const stored = this.readStored();
    if (stored === "dark" || stored === "light") {
      this.apply(stored);
      return;
    }
    const prefersLight = typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: light)").matches;
    this.apply(prefersLight ? "light" : "dark");
  }
  toggle() {
    this.apply(this.theme() === "dark" ? "light" : "dark");
  }
  set(next) {
    this.apply(next);
  }
  apply(next) {
    this.theme.set(next);
    document.documentElement.setAttribute("data-theme", next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", next === "light" ? "#FFF5E8" : "#060A10");
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      return;
    }
  }
  readStored() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ThemeService, I18nService],
      useFactory: (theme, i18n) => () => {
        theme.init();
        return i18n.init(window.location.pathname);
      }
    }
  ]
};

// src/app/shared/components/logo/logo.component.ts
function LogoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 3);
    \u0275\u0275listener("error", function LogoComponent_Conditional_1_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImageError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.src, \u0275\u0275sanitizeUrl);
  }
}
function LogoComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "ERANITOR");
    \u0275\u0275elementEnd();
  }
}
var LogoComponent = class _LogoComponent {
  /** 'light' = marca clara para uso sobre fundo navy (padrão). 'dark' = marca escura para uso sobre fundo claro. */
  variant = "light";
  /** Se falso, mostra apenas o símbolo (uso em espaços reduzidos, ex. favicon-like). */
  showWordmark = true;
  /** Coloque a marca oficial em public/assets/images/logo.png. */
  src = "assets/images/logo.png";
  imageAvailable = true;
  onImageError() {
    this.imageAvailable = false;
  }
  static \u0275fac = function LogoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LogoComponent, selectors: [["app-logo"]], inputs: { variant: "variant", showWordmark: "showWordmark", src: "src" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [["routerLink", "/", "aria-label", "Eranitor \u2014 p\xE1gina inicial", 1, "logo"], ["alt", "Eranitor", 1, "logo__image", 3, "src"], ["aria-hidden", "true", 1, "logo__fallback"], ["alt", "Eranitor", 1, "logo__image", 3, "error", "src"]], template: function LogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275template(1, LogoComponent_Conditional_1_Template, 1, 1, "img", 1)(2, LogoComponent_Conditional_2_Template, 2, 0, "span", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("logo--dark", ctx.variant === "dark");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.imageAvailable ? 1 : 2);
    }
  }, dependencies: [CommonModule, RouterLink], styles: ["\n\n.logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 2.25rem;\n}\n.logo__image[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  height: 2rem;\n  max-width: min(11rem, 35vw);\n  object-fit: contain;\n  object-position: left center;\n}\n.logo__fallback[_ngcontent-%COMP%] {\n  color: var(--on-navy-100);\n  font-family: var(--font-display);\n  font-size: 1.25rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n}\n.logo--dark[_ngcontent-%COMP%]   .logo__fallback[_ngcontent-%COMP%] {\n  color: var(--navy-950);\n}\n.footer[_nghost-%COMP%]   .logo__image[_ngcontent-%COMP%], .footer   [_nghost-%COMP%]   .logo__image[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  max-width: 12.5rem;\n}\n@media (max-width: 480px) {\n  .logo__image[_ngcontent-%COMP%] {\n    height: 1.75rem;\n  }\n}\n/*# sourceMappingURL=logo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LogoComponent, { className: "LogoComponent", filePath: "src/app/shared/components/logo/logo.component.ts", lineNumber: 17 });
})();

// src/app/layout/settings-menu/settings-menu.component.ts
var _c0 = ["trigger"];
var _c1 = ["panel"];
var _forTrack0 = ($index, $item) => $item.code;
function SettingsMenuComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function SettingsMenuComponent_For_37_Template_button_click_0_listener() {
      const l_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.chooseLang(l_r3.code));
    })("keydown", function SettingsMenuComponent_For_37_Template_button_keydown_0_listener($event) {
      const \u0275$index_57_r5 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onLangKeydown($event, \u0275$index_57_r5));
    });
    \u0275\u0275elementStart(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 27);
    \u0275\u0275element(6, "path", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("settings__lang--active", ctx_r3.i18n.lang() === l_r3.code);
    \u0275\u0275attribute("aria-checked", ctx_r3.i18n.lang() === l_r3.code)("lang", l_r3.htmlLang)("tabindex", ctx_r3.i18n.lang() === l_r3.code ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r3.short);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r3.nameKey);
  }
}
var SettingsMenuComponent = class _SettingsMenuComponent {
  theme;
  i18n;
  host;
  router;
  open = false;
  langs = [
    { code: "pt-BR", nameKey: "Portugu\xEAs (BR)", short: "PT", htmlLang: "pt-BR" },
    { code: "en", nameKey: "English", short: "EN", htmlLang: "en" },
    { code: "es", nameKey: "Espa\xF1ol", short: "ES", htmlLang: "es" }
  ];
  trigger;
  panel;
  constructor(theme, i18n, host, router) {
    this.theme = theme;
    this.i18n = i18n;
    this.host = host;
    this.router = router;
    this.router.events.pipe(filter((e) => e instanceof NavigationStart)).subscribe(() => this.close(false));
  }
  toggle() {
    if (this.open) {
      this.close(true);
    } else {
      this.open = true;
    }
  }
  close(returnFocus) {
    if (!this.open)
      return;
    this.open = false;
    if (returnFocus)
      this.trigger?.nativeElement.focus();
  }
  chooseLang(code) {
    void this.i18n.setLang(code);
  }
  onLangKeydown(event, index) {
    const last = this.langs.length - 1;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      const next = index === last ? 0 : index + 1;
      this.chooseLang(this.langs[next].code);
      this.focusLang(next);
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      const prev = index === 0 ? last : index - 1;
      this.chooseLang(this.langs[prev].code);
      this.focusLang(prev);
    }
  }
  focusLang(index) {
    const items = this.host.nativeElement.querySelectorAll(".settings__lang");
    items[index]?.focus();
  }
  onOutside(event) {
    if (this.open && !this.host.nativeElement.contains(event.target)) {
      this.close(false);
    }
  }
  onEscape() {
    this.close(true);
  }
  static \u0275fac = function SettingsMenuComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsMenuComponent)(\u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsMenuComponent, selectors: [["app-settings-menu"]], viewQuery: function SettingsMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trigger = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
    }
  }, hostBindings: function SettingsMenuComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("pointerdown", function SettingsMenuComponent_pointerdown_HostBindingHandler($event) {
        return ctx.onOutside($event);
      }, false, \u0275\u0275resolveDocument)("keydown.escape", function SettingsMenuComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, false, \u0275\u0275resolveDocument);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 30, consts: [["trigger", ""], ["panel", ""], [1, "settings"], ["type", "button", "aria-controls", "settings-panel", 1, "settings__gear", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "3.2"], ["d", "M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.89a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.11A1.7 1.7 0 0 0 10.11 3V3a2 2 0 1 1 4 0v.09c0 .68.4 1.3 1 1.55.61.26 1.32.11 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.11c.26.61.88 1 1.55 1H21a2 2 0 1 1 0 4h-.09c-.68 0-1.3.4-1.51 1Z"], ["id", "settings-panel", 1, "settings__panel"], [1, "settings__inner"], [1, "settings__title"], [1, "settings__row"], ["id", "settings-theme-label", 1, "settings__label"], ["type", "button", "role", "switch", "aria-labelledby", "settings-theme-label settings-theme-state", 1, "settings__switch", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "aria-hidden", "true", 1, "settings__switch-icon"], ["cx", "12", "cy", "12", "r", "4"], ["d", "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"], ["aria-hidden", "true", 1, "settings__knob"], ["d", "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"], ["id", "settings-theme-state", 1, "sr-only"], [1, "settings__state"], [1, "settings__row", "settings__row--col"], ["id", "settings-lang-label", 1, "settings__label"], ["role", "radiogroup", "aria-labelledby", "settings-lang-label", 1, "settings__langs"], ["type", "button", "role", "radio", 1, "settings__lang", 3, "settings__lang--active"], ["type", "button", "role", "radio", 1, "settings__lang", 3, "click", "keydown"], [1, "settings__code"], [1, "settings__name"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "settings__check"], ["d", "M4 12.5 9.5 18 20 6.5"]], template: function SettingsMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "button", 3, 0);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275listener("click", function SettingsMenuComponent_Template_button_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggle());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 4);
      \u0275\u0275element(6, "circle", 5)(7, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "section", 7, 1)(10, "div", 8)(11, "h2", 9);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "span", 11);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275listener("click", function SettingsMenuComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.theme.toggle());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 13);
      \u0275\u0275element(20, "circle", 14)(21, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "span", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 4);
      \u0275\u0275element(24, "path", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(25, "span", 18);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "span", 19);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 20)(32, "span", 21);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 22);
      \u0275\u0275repeaterCreate(36, SettingsMenuComponent_For_37_Template, 7, 7, "button", 23, _forTrack0);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("settings__gear--open", ctx.open);
      \u0275\u0275attribute("aria-expanded", ctx.open)("aria-label", \u0275\u0275pipeBind1(3, 16, "settings.open") + " / " + \u0275\u0275pipeBind1(4, 18, "settings.title"));
      \u0275\u0275advance(7);
      \u0275\u0275classProp("settings__panel--open", ctx.open);
      \u0275\u0275attribute("aria-hidden", !ctx.open)("inert", !ctx.open ? true : null);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 20, "settings.title"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 22, "settings.theme"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("settings__switch--light", ctx.theme.theme() === "light");
      \u0275\u0275attribute("aria-checked", ctx.theme.theme() === "light");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 24, ctx.theme.theme() === "light" ? "settings.light" : "settings.dark"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 26, ctx.theme.theme() === "light" ? "settings.light" : "settings.dark"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 28, "settings.language"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.langs);
    }
  }, dependencies: [CommonModule, TranslatePipe], styles: ['\n\n.settings[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.settings__gear[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-width: 44px;\n  min-height: 44px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--surface);\n  color: var(--text);\n  border: var(--stroke-md);\n  border-color: var(--hard-color);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  transition:\n    transform var(--dur-base) var(--ease-spring),\n    box-shadow var(--dur-fast) var(--ease-standard),\n    background-color var(--dur-fast) var(--ease-standard),\n    color var(--dur-fast) var(--ease-standard);\n}\n.settings__gear[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.3rem;\n  height: 1.3rem;\n  transition: transform var(--dur-slow) var(--ease-spring);\n}\n.settings__gear[_ngcontent-%COMP%]:hover {\n  transform: translate(-1px, -1px);\n  box-shadow: 4px 4px 0 var(--hard-color);\n}\n.settings__gear--open[_ngcontent-%COMP%] {\n  background: var(--ice-400);\n  color: var(--navy-950);\n}\n.settings__gear--open[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n}\n.settings__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.85rem);\n  right: -0.25rem;\n  width: min(19rem, 100vw - 2rem);\n  background: var(--settings-bg);\n  color: var(--settings-ink);\n  border: var(--stroke-md);\n  border-color: var(--hard-color);\n  border-radius: var(--radius-lg);\n  box-shadow: 5px 5px 0 var(--hard-color);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n  z-index: var(--z-settings);\n  display: grid;\n  grid-template-rows: 0fr;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(-0.85rem) scale(0.94);\n  transform-origin: calc(100% - 1rem) top;\n  transition:\n    grid-template-rows var(--dur-base) var(--ease-standard),\n    opacity var(--dur-base) var(--ease-standard),\n    transform var(--dur-base) var(--ease-spring),\n    visibility 0s linear var(--dur-base);\n  pointer-events: none;\n}\n.settings__panel[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -0.55rem;\n  right: 1.4rem;\n  width: 1rem;\n  height: 1rem;\n  background: inherit;\n  border-left: var(--stroke-md);\n  border-left-color: var(--hard-color);\n  border-top: var(--stroke-md);\n  border-top-color: var(--hard-color);\n  transform: rotate(45deg);\n}\n.settings__panel--open[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0) scale(1);\n  pointer-events: auto;\n  animation: _ngcontent-%COMP%_settings-pop-in var(--dur-slow) var(--ease-spring) both;\n  transition:\n    grid-template-rows var(--dur-base) var(--ease-standard),\n    opacity var(--dur-base) var(--ease-standard),\n    transform var(--dur-base) var(--ease-spring),\n    visibility 0s;\n}\n@keyframes _ngcontent-%COMP%_settings-pop-in {\n  0% {\n    opacity: 0;\n    transform: translateY(-0.85rem) scale(0.94);\n  }\n  70% {\n    opacity: 1;\n    transform: translateY(0.12rem) scale(1.012);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.settings__inner[_ngcontent-%COMP%] {\n  overflow: hidden;\n  min-height: 0;\n  padding: var(--space-5);\n}\n.settings__title[_ngcontent-%COMP%] {\n  font-size: var(--fs-500);\n  letter-spacing: -0.01em;\n  margin-bottom: var(--space-4);\n  overflow: hidden;\n}\n.settings__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding-block: var(--space-3);\n  border-top: 1px solid var(--border-soft);\n  overflow: hidden;\n  min-height: 0;\n}\n.settings__row--col[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: stretch;\n}\n.settings__label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: var(--fs-300);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.settings__state[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: var(--fs-300);\n  font-weight: 600;\n  opacity: 0.85;\n}\n.settings__switch[_ngcontent-%COMP%] {\n  position: relative;\n  width: 4.5rem;\n  height: 2.5rem;\n  min-height: 44px;\n  border-radius: var(--radius-pill);\n  background: var(--navy-800);\n  border: var(--stroke-md);\n  border-color: var(--hard-color);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  display: flex;\n  align-items: center;\n  padding: 0.25rem;\n  transition: background-color var(--dur-fast) var(--ease-standard);\n}\n.settings__switch-icon[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--ice-400);\n  margin-left: 0.3rem;\n}\n.settings__knob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0.3rem;\n  translate: 0 -50%;\n  width: 1.9rem;\n  height: 1.9rem;\n  border-radius: 50%;\n  background: var(--ice-400);\n  color: var(--navy-950);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--navy-950);\n  transition: left var(--dur-base) var(--ease-spring), background-color var(--dur-fast) var(--ease-standard);\n}\n.settings__knob[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.settings__switch--light[_ngcontent-%COMP%] {\n  background: var(--ice-200);\n}\n.settings__switch--light[_ngcontent-%COMP%]   .settings__knob[_ngcontent-%COMP%] {\n  left: calc(100% - 2.2rem);\n  background: var(--navy-950);\n  color: var(--ice-400);\n  border-color: var(--navy-950);\n}\n.settings__langs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n}\n.settings__lang[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n  min-height: 44px;\n  padding: 0.6rem 0.8rem;\n  border-radius: var(--radius-md);\n  background: transparent;\n  color: inherit;\n  border: 2px solid var(--border-soft);\n  transition: border-color var(--dur-fast) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard);\n  text-align: left;\n  width: 100%;\n}\n.settings__lang[_ngcontent-%COMP%]:hover {\n  border-color: var(--ice-400);\n}\n.settings__lang--active[_ngcontent-%COMP%] {\n  border-color: var(--ice-400);\n  background: color-mix(in srgb, var(--ice-400) 14%, transparent);\n}\n.settings__code[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: var(--fs-200);\n  background: var(--navy-950);\n  color: var(--ice-400);\n  border-radius: var(--radius-sm);\n  padding: 0.25rem 0.45rem;\n}\n.settings__name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: var(--fs-400);\n}\n.settings__check[_ngcontent-%COMP%] {\n  width: 1.1rem;\n  height: 1.1rem;\n  margin-left: auto;\n  color: var(--ice-400);\n  opacity: 0;\n}\n.settings__lang--active[_ngcontent-%COMP%]   .settings__check[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (prefers-reduced-motion: reduce) {\n  .settings__gear[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n   .settings__panel[_ngcontent-%COMP%], \n   .settings__knob[_ngcontent-%COMP%] {\n    transition: opacity var(--dur-fast) var(--ease-standard);\n    transform: none;\n  }\n  .settings__gear--open[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .settings__panel[_ngcontent-%COMP%] {\n    transform: none;\n    animation: none;\n  }\n}\n/*# sourceMappingURL=settings-menu.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsMenuComponent, { className: "SettingsMenuComponent", filePath: "src/app/layout/settings-menu/settings-menu.component.ts", lineNumber: 16 });
})();

// src/app/layout/header/header.component.ts
var _c02 = ["menuToggle"];
var _forTrack02 = ($index, $item) => $item.path;
var _c12 = (a0) => ({ exact: a0 });
function HeaderComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 12);
    \u0275\u0275listener("click", function HeaderComponent_For_7_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r4.path)("routerLinkActiveOptions", \u0275\u0275pureFunction1(5, _c12, link_r4.path === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, link_r4.labelKey), " ");
  }
}
var HeaderComponent = class _HeaderComponent {
  menuOpen = false;
  scrolled = false;
  navLinks = [
    { path: "/", labelKey: "nav.home" },
    { path: "/sobre-nos", labelKey: "nav.about" },
    { path: "/contato", labelKey: "nav.contact" }
  ];
  menuToggle;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  onEscape() {
    if (!this.menuOpen)
      return;
    this.closeMenu();
    this.menuToggle?.nativeElement.focus();
  }
  onScroll() {
    this.scrolled = window.scrollY > 24;
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menuToggle = _t.first);
    }
  }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function HeaderComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, false, \u0275\u0275resolveDocument)("scroll", function HeaderComponent_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, false, \u0275\u0275resolveWindow);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 19, consts: [["menuToggle", ""], [1, "header"], [1, "container", "container--wide", "header__float"], ["id", "primary-nav", 1, "header__nav"], [1, "header__pills"], ["routerLink", "/baixar", "routerLinkActive", "is-active", 1, "header__pill", "header__pill--cta", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M12 4v12M6 12l6 6 6-6M5 21h14"], [1, "header__controls"], ["type", "button", "aria-controls", "primary-nav", 1, "header__toggle", 3, "click"], [1, "sr-only"], ["aria-hidden", "true", 1, "header__toggle-bar"], ["routerLinkActive", "is-active", 1, "header__pill", 3, "click", "routerLink", "routerLinkActiveOptions"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "header", 1)(1, "div", 2);
      \u0275\u0275element(2, "app-logo");
      \u0275\u0275elementStart(3, "nav", 3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementStart(5, "ul", 4);
      \u0275\u0275repeaterCreate(6, HeaderComponent_For_7_Template, 4, 7, "li", null, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.closeMenu());
      });
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 6);
      \u0275\u0275element(12, "path", 7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275element(14, "app-settings-menu");
      \u0275\u0275elementStart(15, "button", 9, 0);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleMenu());
      });
      \u0275\u0275elementStart(18, "span", 10);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "span", 11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("header--scrolled", ctx.scrolled);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("header__nav--open", ctx.menuOpen);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 11, "nav.main"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.navLinks);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 13, "nav.download"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275attribute("aria-expanded", ctx.menuOpen)("aria-label", \u0275\u0275pipeBind1(17, 15, ctx.menuOpen ? "nav.close" : "nav.open"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, ctx.menuOpen ? "nav.close" : "nav.open"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-open", ctx.menuOpen);
    }
  }, dependencies: [CommonModule, RouterLink, RouterLinkActive, LogoComponent, SettingsMenuComponent, TranslatePipe], styles: ['\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0 0 auto 0;\n  z-index: var(--z-header);\n  padding-top: clamp(0.6rem, 0.5rem + 1vw, 1.1rem);\n  pointer-events: none;\n}\n.header__float[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  min-height: var(--header-height);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  border-radius: var(--radius-pill);\n  padding-block: 0.6rem;\n  padding-inline: clamp(1rem, 1rem + 1.5vw, 1.75rem);\n  border: 1px solid transparent;\n  transition:\n    background-color var(--dur-base) var(--ease-standard),\n    border-color var(--dur-base) var(--ease-standard),\n    box-shadow var(--dur-base) var(--ease-standard),\n    backdrop-filter var(--dur-base) var(--ease-standard);\n}\n.header--scrolled[_ngcontent-%COMP%]   .header__float[_ngcontent-%COMP%] {\n  background: var(--glass-strong);\n  border-color: var(--border-soft);\n  box-shadow: 0 12px 40px rgba(6, 10, 16, 0.35);\n  backdrop-filter: blur(var(--glass-blur));\n  -webkit-backdrop-filter: blur(var(--glass-blur));\n}\n.header--scrolled[_ngcontent-%COMP%]   .header__pill[_ngcontent-%COMP%] {\n  color: var(--text);\n  border-color: var(--border-soft);\n}\n.header--scrolled[_ngcontent-%COMP%]   .header__pill--cta[_ngcontent-%COMP%] {\n  color: var(--cta-ink);\n}\n.header__toggle[_ngcontent-%COMP%] {\n  display: none;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.16);\n  color: var(--white);\n  padding: 0.65rem;\n  border-radius: var(--radius-sm);\n  min-width: 44px;\n  min-height: 44px;\n  align-items: center;\n  justify-content: center;\n}\n.header--scrolled[_ngcontent-%COMP%]   .header__toggle[_ngcontent-%COMP%] {\n  color: var(--text);\n  border-color: var(--border-soft);\n  background: transparent;\n}\n.header--scrolled[_ngcontent-%COMP%]   .header__toggle-bar[_ngcontent-%COMP%], \n.header--scrolled[_ngcontent-%COMP%]   .header__toggle-bar[_ngcontent-%COMP%]::before, \n.header--scrolled[_ngcontent-%COMP%]   .header__toggle-bar[_ngcontent-%COMP%]::after {\n  background: var(--text);\n}\n.header__toggle-bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--white);\n}\n.header__toggle-bar[_ngcontent-%COMP%]::before, \n.header__toggle-bar[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 22px;\n  height: 2px;\n  background: var(--white);\n  transition: transform var(--dur-fast) var(--ease-standard);\n}\n.header__toggle-bar[_ngcontent-%COMP%]::before {\n  top: -7px;\n}\n.header__toggle-bar[_ngcontent-%COMP%]::after {\n  top: 7px;\n}\n.header__toggle-bar.is-open[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.header__toggle-bar.is-open[_ngcontent-%COMP%]::before {\n  transform: translateY(7px) rotate(45deg);\n}\n.header__toggle-bar.is-open[_ngcontent-%COMP%]::after {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.header__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n}\n.header__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-3);\n}\n.header__pills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n}\n.header__pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-2);\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: var(--fs-300);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  padding: 0.65rem 1.15rem;\n  min-height: 44px;\n  border-radius: var(--radius-pill);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: var(--on-navy-100);\n  transition:\n    border-color var(--dur-fast) var(--ease-standard),\n    background-color var(--dur-fast) var(--ease-standard),\n    transform var(--dur-fast) var(--ease-standard);\n}\n.header__pill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 0.875rem;\n  height: 0.875rem;\n}\n.header__pill[_ngcontent-%COMP%]:hover, \n.header__pill.is-active[_ngcontent-%COMP%] {\n  border-color: var(--ice-400);\n  background: rgba(149, 197, 235, 0.12);\n}\n.header__pill--cta[_ngcontent-%COMP%] {\n  background: var(--grad-cta);\n  color: var(--navy-950);\n  border: var(--stroke-md);\n  box-shadow: var(--shadow-hard-sm);\n}\n.header__pill--cta[_ngcontent-%COMP%]:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.85);\n  background: var(--grad-cta);\n}\n@media (max-width: 860px) {\n  .header__toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n  .header__nav[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: calc(var(--header-height) + 0.6rem) var(--gutter) auto var(--gutter);\n    flex-direction: column;\n    align-items: stretch;\n    gap: var(--space-4);\n    background: var(--glass-strong);\n    border: 1px solid var(--border-soft);\n    border-radius: var(--radius-lg);\n    padding: var(--space-5);\n    transform: translateY(-12px);\n    opacity: 0;\n    pointer-events: none;\n    transition: transform var(--dur-base) var(--ease-standard), opacity var(--dur-base) var(--ease-standard);\n    backdrop-filter: blur(var(--glass-blur));\n    -webkit-backdrop-filter: blur(var(--glass-blur));\n    box-shadow: var(--shadow-float);\n  }\n  .header__nav--open[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    pointer-events: auto;\n  }\n  .header__pills[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .header__pill[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n    color: var(--text);\n    border-color: var(--border-soft);\n  }\n  .header__pill--cta[_ngcontent-%COMP%] {\n    color: var(--cta-ink);\n  }\n}\n/*# sourceMappingURL=header.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/layout/header/header.component.ts", lineNumber: 15 });
})();

// src/app/layout/footer/footer.component.ts
var _forTrack03 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.path;
function FooterComponent_For_10_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "rect", 14)(2, "circle", 15)(3, "circle", 16);
    \u0275\u0275elementEnd();
  }
}
function FooterComponent_For_10_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 17);
    \u0275\u0275elementEnd();
  }
}
function FooterComponent_For_10_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 13);
    \u0275\u0275element(1, "path", 18);
    \u0275\u0275elementEnd();
  }
}
function FooterComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275template(4, FooterComponent_For_10_Case_4_Template, 4, 0, ":svg:svg", 13)(5, FooterComponent_For_10_Case_5_Template, 2, 0, ":svg:svg", 13)(6, FooterComponent_For_10_Case_6_Template, 2, 0, ":svg:svg", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", s_r1.name + " \u2014 " + \u0275\u0275pipeBind1(2, 3, "common.soon"))("title", \u0275\u0275pipeBind1(3, 5, "common.soon"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_12_0 = s_r1.icon) === "instagram" ? 4 : tmp_12_0 === "facebook" ? 5 : tmp_12_0 === "tiktok" ? 6 : -1);
  }
}
function FooterComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r2.path);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, link_r2.labelKey));
  }
}
var FooterComponent = class _FooterComponent {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  siteLinks = [
    { path: "/", labelKey: "nav.home" },
    { path: "/sobre-nos", labelKey: "nav.about" },
    { path: "/baixar", labelKey: "nav.download" },
    { path: "/contato", labelKey: "nav.contact" }
  ];
  contactEmail = "contato@eranitor.com.br";
  socialLinks = [
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "Facebook", url: "#", icon: "facebook" },
    { name: "TikTok", url: "#", icon: "tiktok" }
  ];
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 33, consts: [[1, "footer"], [1, "container", "container--wide", "footer__grid"], [1, "footer__brand"], [1, "footer__tagline"], [1, "footer__social"], [1, "footer__col"], [1, "footer__col-title"], [3, "href"], ["routerLink", "/contato"], [1, "footer__soon"], [1, "container", "container--wide", "footer__bottom"], [1, "footer__disclaimer"], ["role", "note", 1, "footer__social-link"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1", "fill", "currentColor", "stroke", "none"], ["d", "M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3Z"], ["d", "M15 3v10.5a3.5 3.5 0 1 1-3-3.46M15 3a5 5 0 0 0 5 5"], [3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "app-logo");
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ul", 4);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275repeaterCreate(9, FooterComponent_For_10_Template, 7, 7, "li", null, _forTrack03);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "nav", 5);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementStart(13, "h2", 6);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul");
      \u0275\u0275repeaterCreate(17, FooterComponent_For_18_Template, 4, 4, "li", null, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 5)(20, "h2", 6);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "ul")(24, "li")(25, "a", 7);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "li")(28, "a", 8);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "li")(32, "span", 9);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "li")(36, "span", 9);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "div", 10)(40, "p");
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 11);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 13, "footer.tagline"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 15, "footer.social"));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.socialLinks);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 17, "footer.nav"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "footer.nav"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.siteLinks);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "footer.support"));
      \u0275\u0275advance(4);
      \u0275\u0275property("href", "mailto:" + ctx.contactEmail, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.contactEmail);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 23, "footer.contact"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, "footer.privacy"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 27, "footer.terms"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("\xA9 ", ctx.year, " Eranitor. ", \u0275\u0275pipeBind1(42, 29, "footer.rights"), "");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 31, "footer.disclaimer"), " ");
    }
  }, dependencies: [CommonModule, RouterLink, LogoComponent, TranslatePipe], styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background: var(--navy-950);\n  color: var(--on-navy-600);\n  padding-block: var(--space-8) var(--space-6);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-hero) var(--radius-hero) 0 0;\n  margin-top: -1px;\n}\n.footer__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.4fr 1fr 1fr;\n  gap: var(--space-7);\n  padding-bottom: var(--space-7);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.footer__brand[_ngcontent-%COMP%] {\n  max-width: 22rem;\n}\n.footer__tagline[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  font-size: var(--fs-300);\n  line-height: var(--lh-normal);\n}\n.footer__social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  margin-top: var(--space-5);\n}\n.footer__social-link[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.75;\n}\n.footer__social-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.footer__col-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--fs-300);\n  color: var(--white);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  margin-bottom: var(--space-4);\n}\n.footer__col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n}\n.footer__col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: var(--fs-400);\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  transition: color var(--dur-fast) var(--ease-standard);\n  word-break: break-word;\n}\n.footer__col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--white);\n}\n.footer__soon[_ngcontent-%COMP%] {\n  font-size: var(--fs-300);\n  opacity: 0.7;\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  padding-top: var(--space-6);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: var(--space-3);\n  font-size: var(--fs-300);\n}\n@media (max-width: 720px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--space-6);\n  }\n  .footer__bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layout/footer/footer.component.ts", lineNumber: 14 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  i18n;
  router;
  constructor(i18n, router) {
    this.i18n = i18n;
    this.router = router;
  }
  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => this.i18n.updateSeo(e.urlAfterRedirects));
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [["href", "#main-content", 1, "skip-link"], ["id", "main-content"], ["role", "status", "aria-live", "polite", 1, "sr-only"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-header");
      \u0275\u0275elementStart(4, "main", 1);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-footer");
      \u0275\u0275elementStart(7, "div", 2);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "skip"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.i18n.announcement());
    }
  }, dependencies: [RouterOutlet, HeaderComponent, FooterComponent, TranslatePipe], styles: ["\n\n.skip-link[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -9999px;\n  top: 0;\n  z-index: 100;\n  background: var(--white);\n  color: var(--navy-900);\n  padding: var(--space-3) var(--space-5);\n  border-radius: 0 0 var(--radius-md) 0;\n  font-weight: 700;\n}\n.skip-link[_ngcontent-%COMP%]:focus {\n  left: 0;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
