import {
  RouterLink
} from "./chunk-CZMGGFVX.js";
import {
  PhoneMockupComponent,
  StoreBadgeComponent
} from "./chunk-VAE3UO5D.js";
import {
  RevealDirective
} from "./chunk-P5JX75SE.js";
import {
  CommonModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NZFAXOOV.js";
import "./chunk-Y5RQAIA6.js";

// src/app/shared/components/feature-card/feature-card.component.ts
var _c0 = [[["", "icon", ""]]];
var _c1 = ["[icon]"];
function FeatureCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.badge);
  }
}
var FeatureCardComponent = class _FeatureCardComponent {
  title;
  description;
  badge = "";
  static \u0275fac = function FeatureCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeatureCardComponent, selectors: [["app-feature-card"]], inputs: { title: "title", description: "description", badge: "badge" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c1, decls: 9, vars: 3, consts: [[1, "feature-card"], [1, "feature-card__top"], [1, "feature-card__icon"], [1, "feature-card__badge"], [1, "feature-card__title"], [1, "feature-card__desc"]], template: function FeatureCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275elementStart(0, "article", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, FeatureCardComponent_Conditional_4_Template, 2, 1, "span", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.badge ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.description);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.feature-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  color: var(--text);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-xl);\n  padding: clamp(1.25rem, 1rem + 1.5vw, 2rem);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  transition:\n    transform var(--dur-base) var(--ease-standard),\n    box-shadow var(--dur-base) var(--ease-standard),\n    var(--theme-transition);\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translate(-3px, -3px);\n  box-shadow: 5px 5px 0 var(--hard-color), var(--shadow-glow-soft);\n}\n.feature-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--space-3);\n  margin-bottom: var(--space-5);\n}\n.feature-card__icon[_ngcontent-%COMP%] {\n  width: 3.25rem;\n  height: 3.25rem;\n  border-radius: var(--radius-md);\n  background: var(--ice-200);\n  color: var(--navy-950);\n  border: var(--stroke-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.feature-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.625rem;\n  height: 1.625rem;\n}\n.feature-card__badge[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--fs-200);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background: var(--navy-950);\n  color: var(--ice-400);\n  border-radius: var(--radius-pill);\n  padding: 0.3rem 0.7rem;\n  white-space: nowrap;\n}\n.feature-card__title[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  margin-bottom: var(--space-3);\n  letter-spacing: -0.01em;\n}\n.feature-card__desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: var(--fs-400);\n  line-height: var(--lh-normal);\n}\n@media (prefers-reduced-motion: reduce) {\n  .feature-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=feature-card.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeatureCardComponent, { className: "FeatureCardComponent", filePath: "src/app/shared/components/feature-card/feature-card.component.ts", lineNumber: 11 });
})();

// src/app/pages/home/home.component.ts
function HomeComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function HomeComponent_For_67_Template_button_click_0_listener() {
      const \u0275$index_104_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(\u0275$index_104_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const key_r4 = ctx.$implicit;
    const \u0275$index_104_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hero__dot--active", \u0275$index_104_r2 === ctx_r2.activeSlide);
    \u0275\u0275attribute("aria-selected", \u0275$index_104_r2 === ctx_r2.activeSlide)("aria-label", \u0275\u0275pipeBind1(1, 4, "hero.slide." + key_r4 + ".tab"));
  }
}
function HomeComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 34);
    \u0275\u0275element(1, "path", 85);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 35);
    \u0275\u0275element(1, "path", 86);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45)(1, "span", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r5 * 70);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "cycle.step." + i_r5));
  }
}
function HomeComponent_For_130_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "path", 92)(2, "path", 93);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_130_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "path", 94)(2, "path", 95);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_130_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "rect", 96)(2, "path", 97);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_130_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "circle", 98)(2, "path", 99);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_130_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "circle", 98)(2, "circle", 100)(3, "circle", 101);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_130_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 91);
    \u0275\u0275element(1, "path", 102);
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "app-feature-card", 89);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementContainerStart(5, 90);
    \u0275\u0275template(6, HomeComponent_For_130_Case_6_Template, 3, 0, ":svg:svg", 91)(7, HomeComponent_For_130_Case_7_Template, 3, 0, ":svg:svg", 91)(8, HomeComponent_For_130_Case_8_Template, 3, 0, ":svg:svg", 91)(9, HomeComponent_For_130_Case_9_Template, 3, 0, ":svg:svg", 91)(10, HomeComponent_For_130_Case_10_Template, 4, 0, ":svg:svg", 91)(11, HomeComponent_For_130_Case_11_Template, 2, 0, ":svg:svg", 91);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const i_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("features__wide", i_r6 === 0 || i_r6 === 3);
    \u0275\u0275property("revealDelay", i_r6 % 3 * 90);
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 7, "features." + i_r6 + ".title"))("description", \u0275\u0275pipeBind1(3, 9, "features." + i_r6 + ".text"))("badge", i_r6 === 5 ? \u0275\u0275pipeBind1(4, 11, "common.soon") : "");
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_15_0 = ctx_r2.featureIcons[i_r6]) === "book" ? 6 : tmp_15_0 === "flag" ? 7 : tmp_15_0 === "calendar" ? 8 : tmp_15_0 === "clock" ? 9 : tmp_15_0 === "target" ? 10 : tmp_15_0 === "chart" ? 11 : -1);
  }
}
function HomeComponent_For_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 67)(1, "span", 103);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 104);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 51);
    \u0275\u0275element(14, "path", 105);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("audience-card audience-card--", i_r7, "");
    \u0275\u0275property("revealDelay", i_r7 * 90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "audiences." + i_r7 + ".tag"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "audiences." + i_r7 + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, "audiences." + i_r7 + ".text"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(11, 14, "audiences.more") + " " + \u0275\u0275pipeBind1(12, 16, "audiences." + i_r7 + ".tag"));
  }
}
var HomeComponent = class _HomeComponent {
  slideKeys = ["plan", "track", "review"];
  featureIcons = ["book", "flag", "calendar", "clock", "target", "chart"];
  featureIndexes = [0, 1, 2, 3, 4, 5];
  cycleIndexes = [0, 1, 2, 3, 4, 5];
  audienceIndexes = [0, 1, 2];
  activeSlide = 0;
  autoplay = true;
  timer = null;
  reducedMotion = false;
  finePointer = false;
  ngOnInit() {
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!this.reducedMotion) {
      this.startAutoplay();
    }
  }
  ngOnDestroy() {
    this.stopAutoplay();
  }
  get activeScreen() {
    return this.slideKeys[this.activeSlide];
  }
  goTo(index) {
    this.activeSlide = (index + this.slideKeys.length) % this.slideKeys.length;
  }
  next() {
    this.goTo(this.activeSlide + 1);
  }
  prev() {
    this.goTo(this.activeSlide - 1);
  }
  toggleAutoplay() {
    this.autoplay = !this.autoplay;
    if (this.autoplay && !this.reducedMotion) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }
  pause() {
    this.stopAutoplay();
  }
  resume() {
    if (this.autoplay && !this.reducedMotion && !this.timer) {
      this.startAutoplay();
    }
  }
  onHeroKeydown(event) {
    if (event.key === "ArrowRight") {
      this.next();
    } else if (event.key === "ArrowLeft") {
      this.prev();
    }
  }
  onVisualMouseMove(event) {
    if (!this.finePointer || this.reducedMotion)
      return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const dx = (event.clientX - rect.left) / rect.width - 0.5;
    const dy = (event.clientY - rect.top) / rect.height - 0.5;
    const phone = el.querySelector(".phone--float");
    phone?.style.setProperty("--px", `${(dx * 7).toFixed(2)}deg`);
    phone?.style.setProperty("--py", `${(-dy * 5).toFixed(2)}deg`);
  }
  onVisualMouseLeave(event) {
    const el = event.currentTarget;
    const phone = el.querySelector(".phone--float");
    phone?.style.removeProperty("--px");
    phone?.style.removeProperty("--py");
  }
  startAutoplay() {
    this.stopAutoplay();
    this.timer = setInterval(() => {
      if (this.autoplay && !document.hidden) {
        this.next();
      }
    }, 6e3);
  }
  stopAutoplay() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 187, vars: 140, consts: [["aria-roledescription", "carousel", 1, "hero", "section--navy", 3, "keydown", "mouseenter", "mouseleave", "focusin", "focusout"], ["aria-hidden", "true", 1, "hero__bg"], [1, "hero__aurora"], [1, "tech-grid"], [1, "hero__glow", "hero__glow--a"], [1, "hero__glow", "hero__glow--b"], [1, "container", "container--wide", "hero__grid"], [1, "hero__copy"], ["appReveal", "", 1, "hero__badge"], ["aria-hidden", "true", 1, "hero__pulse"], ["appReveal", "", 1, "hero__title", 3, "revealDelay"], [1, "hero__title-accent"], ["appReveal", "", 1, "hero__lead", 3, "revealDelay"], ["appReveal", "", 1, "hero__actions", 3, "revealDelay"], ["routerLink", "/baixar", 1, "cta", "cta--primary", "cta--lg"], ["routerLink", "/sobre-nos", 1, "cta", "cta--secondary", "cta--lg"], ["aria-live", "polite", "appReveal", "", 1, "hero__slide-text", 3, "revealDelay"], [1, "hero__slide-title"], [1, "hero__slide-desc"], ["appReveal", "", 1, "hero__social-proof", 3, "revealDelay"], ["aria-hidden", "true", 1, "hero__avatars"], [1, "hero__avatar"], [1, "hero__social-text"], ["appReveal", "scale", 1, "hero__visual", 3, "mousemove", "mouseleave", "revealDelay"], [1, "hero__phone-wrap"], ["variant", "float", 3, "screen"], ["aria-hidden", "true", 1, "hero__chip", "hero__chip--a", "glass-card"], [1, "hero__chip-dot"], ["aria-hidden", "true", 1, "hero__chip", "hero__chip--b", "glass-card"], ["aria-hidden", "true", 1, "hero__chip", "hero__chip--c", "glass-card"], [1, "hero__device-controls"], ["role", "tablist", 1, "hero__dots"], ["type", "button", "role", "tab", 1, "hero__dot", 3, "hero__dot--active"], ["type", "button", 1, "hero__autoplay", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "aria-hidden", "true"], ["viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["aria-hidden", "true", 1, "hero__scroll"], [1, "hero__scroll-line"], ["aria-labelledby", "cycle-title", 1, "section", "cycle"], [1, "container"], [1, "section-head", "section-head--center"], ["appReveal", "", 1, "eyebrow", "eyebrow--on-light"], ["id", "cycle-title", "appReveal", "", 1, "section-head__title", 3, "revealDelay"], ["appReveal", "", 1, "section-head__lead", 3, "revealDelay"], [1, "cycle__track"], ["appReveal", "", 1, "cycle__item", 3, "revealDelay"], [1, "section", "section--alt", "about"], [1, "container", "about__grid"], ["appReveal", "", 1, "section-head__title", 3, "revealDelay"], ["appReveal", "", 1, "about__lead", 3, "revealDelay"], ["routerLink", "/sobre-nos", "appReveal", "", 1, "cta", "cta--primary", "cta--md", "about__cta", 3, "revealDelay"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M5 12h14M13 6l6 6-6 6"], ["appReveal", "right", 1, "about__visual", 3, "revealDelay"], [1, "about__phone"], ["screen", "track"], ["aria-hidden", "true", 1, "about__card", "glass-card"], ["id", "recursos", "aria-labelledby", "features-title", 1, "section", "features"], [1, "container", "container--wide"], ["id", "features-title", "appReveal", "", 1, "section-head__title", 3, "revealDelay"], [1, "features-grid"], ["appReveal", "", 3, "revealDelay", "features__wide"], [1, "spotlight-wrap"], [1, "spotlight", "section--navy"], ["aria-hidden", "true", 1, "tech-grid"], [1, "spotlight__copy"], ["appReveal", "", 1, "eyebrow"], ["appReveal", "", 3, "revealDelay"], ["routerLink", "/baixar", "appReveal", "", 1, "cta", "cta--primary", "cta--lg", 3, "revealDelay"], ["appReveal", "right", 1, "spotlight__visual", 3, "revealDelay"], ["variant", "float", "screen", "review"], ["aria-labelledby", "audiences-title", 1, "section", "audiences"], [1, "section-head"], ["id", "audiences-title", "appReveal", "", 1, "section-head__title", 3, "revealDelay"], [1, "audiences__grid"], ["appReveal", "", 3, "class", "revealDelay"], [1, "download-cta-wrap"], [1, "download-cta", "section--navy"], [1, "download-cta__copy"], ["appReveal", "", 1, "download-cta__badges", 3, "revealDelay"], ["platform", "google-play", 3, "available"], ["platform", "app-store", 3, "available"], ["role", "note", "appReveal", "", 1, "download-cta__qr", 3, "revealDelay"], ["aria-hidden", "true", 1, "download-cta__qr-box"], ["type", "button", "role", "tab", 1, "hero__dot", 3, "click"], ["d", "M9 5v14M15 5v14"], ["d", "M8 5v14l11-7Z"], [1, "cycle__num"], [1, "cycle__name"], [3, "title", "description", "badge"], ["icon", ""], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"], ["d", "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z"], ["d", "M4 22V3"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["d", "M16 2v4M8 2v4M3 10h18"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 7v5l3 3"], ["cx", "12", "cy", "12", "r", "5"], ["cx", "12", "cy", "12", "r", "1", "fill", "currentColor"], ["d", "M4 20V10M10 20V4M16 20v-8M22 20H2"], [1, "audience-card__tag"], ["routerLink", "/sobre-nos", 1, "audience-card__arrow"], ["d", "M7 17 17 7M8 7h9v9"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275listener("keydown", function HomeComponent_Template_section_keydown_0_listener($event) {
        return ctx.onHeroKeydown($event);
      })("mouseenter", function HomeComponent_Template_section_mouseenter_0_listener() {
        return ctx.pause();
      })("mouseleave", function HomeComponent_Template_section_mouseleave_0_listener() {
        return ctx.resume();
      })("focusin", function HomeComponent_Template_section_focusin_0_listener() {
        return ctx.pause();
      })("focusout", function HomeComponent_Template_section_focusout_0_listener() {
        return ctx.resume();
      });
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "p", 8);
      \u0275\u0275element(10, "span", 9);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1", 10);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275element(16, "br");
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 12);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 13)(24, "a", 14);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 15);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 16)(31, "p", 17);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 18);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 19)(38, "div", 20)(39, "span", 21);
      \u0275\u0275text(40, "E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "span", 21);
      \u0275\u0275text(42, "R");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 21);
      \u0275\u0275text(44, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "p", 22);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 23);
      \u0275\u0275listener("mousemove", function HomeComponent_Template_div_mousemove_48_listener($event) {
        return ctx.onVisualMouseMove($event);
      })("mouseleave", function HomeComponent_Template_div_mouseleave_48_listener($event) {
        return ctx.onVisualMouseLeave($event);
      });
      \u0275\u0275elementStart(49, "div", 24);
      \u0275\u0275element(50, "app-phone-mockup", 25);
      \u0275\u0275elementStart(51, "div", 26);
      \u0275\u0275element(52, "span", 27);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 28);
      \u0275\u0275element(56, "span", 27);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 29);
      \u0275\u0275element(60, "span", 27);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 30)(64, "div", 31);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275repeaterCreate(66, HomeComponent_For_67_Template, 2, 6, "button", 32, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 33);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_68_listener() {
        return ctx.toggleAutoplay();
      });
      \u0275\u0275template(70, HomeComponent_Conditional_70_Template, 2, 0, ":svg:svg", 34)(71, HomeComponent_Conditional_71_Template, 2, 0, ":svg:svg", 35);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 36);
      \u0275\u0275element(73, "span", 37);
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "section", 38)(78, "div", 39)(79, "div", 40)(80, "span", 41);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "h2", 42);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p", 43);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "ol", 44);
      \u0275\u0275repeaterCreate(90, HomeComponent_For_91_Template, 6, 5, "li", 45, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "section", 46)(93, "div", 47)(94, "div")(95, "span", 41);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "h2", 48);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p", 49);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "a", 50);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(107, "svg", 51);
      \u0275\u0275element(108, "path", 52);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(109, "div", 53)(110, "div", 54);
      \u0275\u0275element(111, "app-phone-mockup", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 56)(113, "strong");
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "span");
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(119, "section", 57)(120, "div", 58)(121, "div", 40)(122, "span", 41);
      \u0275\u0275text(123);
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "h2", 59);
      \u0275\u0275text(126);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "div", 60);
      \u0275\u0275repeaterCreate(129, HomeComponent_For_130_Template, 12, 13, "div", 61, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "section", 62)(132, "div", 58)(133, "div", 63);
      \u0275\u0275element(134, "div", 64);
      \u0275\u0275elementStart(135, "div", 65)(136, "span", 66);
      \u0275\u0275text(137);
      \u0275\u0275pipe(138, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "h2", 67);
      \u0275\u0275text(140);
      \u0275\u0275pipe(141, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p", 67);
      \u0275\u0275text(143);
      \u0275\u0275pipe(144, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "a", 68);
      \u0275\u0275text(146);
      \u0275\u0275pipe(147, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 69);
      \u0275\u0275element(149, "app-phone-mockup", 70);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(150, "section", 71)(151, "div", 58)(152, "div", 72)(153, "span", 41);
      \u0275\u0275text(154);
      \u0275\u0275pipe(155, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "h2", 73);
      \u0275\u0275text(157);
      \u0275\u0275pipe(158, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(159, "div", 74);
      \u0275\u0275repeaterCreate(160, HomeComponent_For_161_Template, 15, 18, "article", 75, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "section", 76)(163, "div", 58)(164, "div", 77);
      \u0275\u0275element(165, "div", 64);
      \u0275\u0275elementStart(166, "div", 78)(167, "span", 66);
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "h2", 67);
      \u0275\u0275text(171);
      \u0275\u0275pipe(172, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p", 67);
      \u0275\u0275text(174);
      \u0275\u0275pipe(175, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 79);
      \u0275\u0275element(177, "app-store-badge", 80)(178, "app-store-badge", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 82)(180, "div", 83)(181, "span");
      \u0275\u0275text(182);
      \u0275\u0275pipe(183, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "p");
      \u0275\u0275text(185);
      \u0275\u0275pipe(186, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 64, "hero.carousel"));
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 66, "hero.badge"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 68, "hero.titleA"), "");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 70, "hero.titleB"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 150);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 72, "hero.lead"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 220);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 74, "hero.ctaPrimary"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 76, "hero.ctaSecondary"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 260);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 78, "hero.slide." + ctx.activeScreen + ".title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 80, "hero.slide." + ctx.activeScreen + ".text"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 340);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 82, "hero.social"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 180);
      \u0275\u0275advance(2);
      \u0275\u0275property("screen", ctx.activeScreen);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(54, 84, "hero.chip.goal"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(58, 86, "hero.chip.exam"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(62, 88, "hero.chip.time"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(65, 90, "hero.choose"));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.slideKeys);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(69, 92, ctx.autoplay ? "hero.pause" : "hero.play"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.autoplay ? 70 : 71);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 94, "hero.scroll"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 96, "cycle.eyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 98, "cycle.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 100, "cycle.lead"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.cycleIndexes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 102, "about.eyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 104, "about.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(103, 106, "about.lead"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 200);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(106, 108, "about.cta"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("revealDelay", 120);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 110, "about.cardTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(118, 112, "about.cardSub"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(124, 114, "features.eyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(127, 116, "features.title"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.featureIndexes);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(138, 118, "spotlight.eyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(141, 120, "spotlight.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(144, 122, "spotlight.text"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 200);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(147, 124, "spotlight.cta"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 120);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(155, 126, "audiences.eyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(158, 128, "audiences.title"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.audienceIndexes);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(169, 130, "dlcta.eyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(172, 132, "dlcta.title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(175, 134, "dlcta.text"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 200);
      \u0275\u0275advance();
      \u0275\u0275property("available", false);
      \u0275\u0275advance();
      \u0275\u0275property("available", false);
      \u0275\u0275advance();
      \u0275\u0275property("revealDelay", 260);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(183, 136, "dlcta.qrTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(186, 138, "dlcta.qrText"));
    }
  }, dependencies: [CommonModule, RouterLink, PhoneMockupComponent, FeatureCardComponent, StoreBadgeComponent, RevealDirective, TranslatePipe], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: clip;\n  background: var(--navy-950);\n  border-radius: 0 0 var(--radius-hero) var(--radius-hero);\n  padding-top: calc(var(--header-height) + clamp(2rem, 2rem + 3vw, 4rem));\n  padding-bottom: clamp(4rem, 4rem + 4vw, 7rem);\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.hero__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--grad-hero);\n}\n.hero__aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -15% -10% 0 -10%;\n  background:\n    radial-gradient(\n      34rem 20rem at 78% 22%,\n      var(--grad-mesh-a),\n      transparent 65%),\n    radial-gradient(\n      30rem 22rem at 18% 72%,\n      rgba(24, 35, 56, 0.85),\n      transparent 62%),\n    radial-gradient(\n      22rem 16rem at 48% 48%,\n      var(--grad-mesh-b),\n      transparent 65%);\n  animation: _ngcontent-%COMP%_hero-drift var(--dur-aurora) ease-in-out infinite alternate;\n}\n.hero__glow[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  opacity: 0.5;\n}\n.hero__glow--a[_ngcontent-%COMP%] {\n  width: 22rem;\n  height: 22rem;\n  right: 6%;\n  top: 12%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(149, 197, 235, 0.35),\n      transparent 70%);\n}\n.hero__glow--b[_ngcontent-%COMP%] {\n  width: 18rem;\n  height: 18rem;\n  left: -4%;\n  bottom: 8%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(121, 179, 224, 0.22),\n      transparent 70%);\n}\n.hero__grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: var(--z-content);\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: clamp(2rem, 2rem + 3vw, 4.5rem);\n  align-items: center;\n  width: 100%;\n}\n.hero__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-family: var(--font-display);\n  font-size: var(--fs-300);\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--ice-400);\n  border: var(--stroke-ice);\n  background: rgba(149, 197, 235, 0.1);\n  padding: 0.55rem 1rem;\n  border-radius: var(--radius-pill);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n}\n.hero__pulse[_ngcontent-%COMP%] {\n  width: 0.55rem;\n  height: 0.55rem;\n  border-radius: 50%;\n  background: var(--ice-400);\n  box-shadow: 0 0 0 0 rgba(149, 197, 235, 0.6);\n  animation: _ngcontent-%COMP%_hero-pulse 2.4s ease-out infinite;\n}\n.hero__title[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  font-size: var(--fs-display);\n  letter-spacing: -0.03em;\n  color: var(--white);\n  line-height: var(--lh-tight);\n}\n.hero__title-accent[_ngcontent-%COMP%] {\n  background: var(--grad-text-ice);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero__lead[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  font-size: var(--fs-500);\n  color: var(--on-navy-600);\n  max-width: 44ch;\n}\n.hero__actions[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-4);\n}\n.hero__slide-text[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n  border-left: 3px solid var(--ice-400);\n  padding-left: var(--space-4);\n  max-width: 32rem;\n}\n.hero__slide-title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  color: var(--white);\n  font-size: var(--fs-500);\n}\n.hero__slide-desc[_ngcontent-%COMP%] {\n  color: var(--on-navy-600);\n  font-size: var(--fs-400);\n  margin-top: 0.25rem;\n}\n.hero__device-controls[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-4);\n}\n.hero__dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n}\n.hero__dot[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 0.5rem;\n  min-height: 0.5rem;\n  border-radius: var(--radius-pill);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  background: rgba(255, 255, 255, 0.15);\n  padding: 0;\n  transition: background-color var(--dur-fast) var(--ease-standard), width var(--dur-fast) var(--ease-standard);\n}\n.hero__dot--active[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  background: var(--ice-400);\n  border-color: var(--ice-400);\n}\n.hero__autoplay[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-height: 44px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.22);\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--white);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.hero__autoplay[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.hero__social-proof[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  margin-top: var(--space-6);\n}\n.hero__avatars[_ngcontent-%COMP%] {\n  display: flex;\n}\n.hero__avatar[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--navy-800);\n  border: 2px solid rgba(255, 255, 255, 0.18);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: var(--ice-400);\n  margin-left: -0.7rem;\n}\n.hero__avatar[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.hero__social-text[_ngcontent-%COMP%] {\n  font-size: var(--fs-300);\n  color: var(--on-navy-600);\n}\n.hero__visual[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.hero__phone-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem 4.5rem 1rem;\n}\n.hero__chip[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: var(--fs-300);\n  font-weight: 600;\n  color: var(--white);\n  border-radius: var(--radius-pill);\n  padding: 0.65rem 1rem;\n  box-shadow: var(--shadow-soft-lg);\n  animation: _ngcontent-%COMP%_chip-float 6s ease-in-out infinite;\n  white-space: nowrap;\n}\n.hero__chip-dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  background: var(--ice-400);\n}\n.hero__chip--a[_ngcontent-%COMP%] {\n  top: 14%;\n  left: 0;\n}\n.hero__chip--b[_ngcontent-%COMP%] {\n  top: 44%;\n  right: 0;\n  animation-delay: -2s;\n}\n.hero__chip--c[_ngcontent-%COMP%] {\n  bottom: 22%;\n  left: 0.5rem;\n  animation-delay: -4s;\n}\n.hero__scroll[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: var(--z-content);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.6rem;\n  margin-top: 2.5rem;\n  color: var(--on-navy-600);\n  font-size: var(--fs-200);\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n.hero__scroll-line[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 2.5rem;\n  background:\n    linear-gradient(\n      180deg,\n      var(--ice-400),\n      transparent);\n  animation: _ngcontent-%COMP%_scroll-hint 2.2s ease-in-out infinite;\n}\n.cycle__track[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: var(--space-4);\n  position: relative;\n}\n.cycle__item[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-lg);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  padding: var(--space-5) var(--space-4);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--space-3);\n  transition: transform var(--dur-base) var(--ease-standard), var(--theme-transition);\n}\n.cycle__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.cycle__num[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--navy-950);\n  color: var(--ice-400);\n  font-family: var(--font-display);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cycle__name[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: var(--fs-400);\n}\n.about__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: clamp(2rem, 2rem + 4vw, 5rem);\n  align-items: center;\n}\n.about__lead[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  font-size: var(--fs-500);\n  color: var(--text-muted);\n  max-width: 46ch;\n}\n.about__cta[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n}\n.about__cta[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.about__visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  background: var(--grad-card-navy);\n  border-radius: var(--radius-xxl);\n  padding: clamp(2rem, 2rem + 2vw, 3.5rem) var(--space-5);\n  overflow: hidden;\n}\n.about__card[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.25rem;\n  right: 1.25rem;\n  border-radius: var(--radius-md);\n  padding: 0.85rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  color: var(--white);\n  font-size: var(--fs-300);\n}\n.about__card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n}\n.about__card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--on-navy-600);\n  font-size: var(--fs-200);\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap-fluid);\n}\n.spotlight-wrap[_ngcontent-%COMP%], \n.download-cta-wrap[_ngcontent-%COMP%] {\n  padding-block: var(--space-6);\n}\n.spotlight[_ngcontent-%COMP%], \n.download-cta[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: clip;\n  border-radius: var(--radius-xxl);\n  padding: clamp(2.5rem, 2rem + 4vw, 5rem);\n  background: var(--grad-card-navy);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.spotlight[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 0.9fr;\n  gap: clamp(2rem, 2rem + 3vw, 4rem);\n  align-items: center;\n  margin-inline: auto;\n}\n.spotlight__copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.download-cta__copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--fs-800);\n  color: var(--white);\n  letter-spacing: -0.02em;\n  margin-top: var(--space-4);\n}\n.spotlight__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.download-cta__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--on-navy-600);\n  margin-top: var(--space-4);\n  font-size: var(--fs-500);\n  max-width: 46ch;\n}\n.spotlight__copy[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n}\n.spotlight__visual[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  transform: perspective(1100px) rotateY(6deg);\n}\n.audiences__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap-fluid);\n}\n.audience-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-xxl);\n  padding: clamp(1.75rem, 1.5rem + 2vw, 2.75rem);\n  min-height: 19rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  overflow: hidden;\n  border: var(--stroke-md);\n  box-shadow: var(--shadow-hard-sm);\n  transition: transform var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);\n}\n.audience-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-hard-md), var(--shadow-glow-soft);\n}\n.audience-card--0[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      #d3e9f9 0%,\n      #95c5eb 55%,\n      #79b3e0 100%);\n  color: var(--navy-950);\n}\n.audience-card--1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      #16233a 0%,\n      #0b1220 70%);\n  color: var(--white);\n}\n.audience-card--2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      #fff5e8 0%,\n      #f3e4c8 60%,\n      #e8d3ac 100%);\n  color: var(--navy-950);\n}\n.audience-card__tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  left: 1.25rem;\n  font-family: var(--font-display);\n  font-size: var(--fs-200);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  background: rgba(6, 10, 16, 0.85);\n  color: var(--ice-400);\n  padding: 0.4rem 0.8rem;\n  border-radius: var(--radius-pill);\n}\n.audience-card--0[_ngcontent-%COMP%]   .audience-card__tag[_ngcontent-%COMP%], \n.audience-card--2[_ngcontent-%COMP%]   .audience-card__tag[_ngcontent-%COMP%] {\n  background: var(--navy-950);\n}\n.audience-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-700);\n  letter-spacing: -0.015em;\n}\n.audience-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--space-3);\n  font-size: var(--fs-400);\n  opacity: 0.85;\n  max-width: 32ch;\n}\n.audience-card__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1.25rem;\n  bottom: 1.25rem;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background: var(--navy-950);\n  color: var(--white);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid var(--navy-950);\n  transition: transform var(--dur-fast) var(--ease-standard);\n}\n.audience-card__arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.audience-card[_ngcontent-%COMP%]:hover   .audience-card__arrow[_ngcontent-%COMP%] {\n  transform: translate(3px, -3px);\n}\n.download-cta[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.download-cta__badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-4);\n  margin-top: var(--space-6);\n}\n.download-cta__qr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  margin-top: var(--space-6);\n  max-width: 30rem;\n}\n.download-cta__qr-box[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 5.5rem;\n  height: 5.5rem;\n  border-radius: var(--radius-md);\n  border: 2px dashed rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-200);\n  color: var(--on-navy-600);\n  text-align: center;\n  padding: 0.5rem;\n}\n.download-cta__qr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--fs-300);\n  margin-top: 0;\n}\n@keyframes _ngcontent-%COMP%_hero-drift {\n  from {\n    transform: translate3d(-2%, 0, 0) scale(1);\n  }\n  to {\n    transform: translate3d(2%, 3%, 0) scale(1.07);\n  }\n}\n@keyframes _ngcontent-%COMP%_hero-pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(149, 197, 235, 0.6);\n  }\n  70% {\n    box-shadow: 0 0 0 10px rgba(149, 197, 235, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(149, 197, 235, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_chip-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_scroll-hint {\n  0%, 100% {\n    opacity: 0.4;\n    transform: translateY(0);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(6px);\n  }\n}\n@media (max-width: 1024px) {\n  .cycle__track[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .audiences__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 960px) {\n  .hero__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero__visual[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .hero__phone-wrap[_ngcontent-%COMP%] {\n    padding: 0.5rem 3rem 1rem;\n  }\n  .about__grid[_ngcontent-%COMP%], \n   .spotlight[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .spotlight__visual[_ngcontent-%COMP%] {\n    transform: none;\n  }\n}\n@media (max-width: 640px) {\n  .hero[_ngcontent-%COMP%] {\n    min-height: 100svh;\n  }\n  .hero__actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .hero__actions[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .hero__chip[_ngcontent-%COMP%] {\n    position: static;\n    animation: none;\n    font-size: var(--fs-200);\n    padding: 0.5rem 0.8rem;\n  }\n  .hero__phone-wrap[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--space-3);\n  }\n  .hero__phone-wrap[_ngcontent-%COMP%]   app-phone-mockup[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .cycle__track[_ngcontent-%COMP%], \n   .features-grid[_ngcontent-%COMP%], \n   .audiences__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .spotlight[_ngcontent-%COMP%], \n   .download-cta[_ngcontent-%COMP%] {\n    padding: var(--space-6) var(--space-5);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero__aurora[_ngcontent-%COMP%], \n   .hero__chip[_ngcontent-%COMP%], \n   .hero__pulse[_ngcontent-%COMP%], \n   .hero__scroll-line[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 17 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-MIQQFYJT.js.map
