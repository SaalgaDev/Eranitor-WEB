import {
  RevealDirective
} from "./chunk-P5JX75SE.js";
import {
  CommonModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NZFAXOOV.js";

// src/app/shared/components/page-hero/page-hero.component.ts
var _c0 = ["*"];
function PageHeroComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("revealDelay", 160);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx_r0.leadKey));
  }
}
var PageHeroComponent = class _PageHeroComponent {
  eyebrowKey;
  titleKey;
  leadKey = "";
  static \u0275fac = function PageHeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageHeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageHeroComponent, selectors: [["app-page-hero"]], inputs: { eyebrowKey: "eyebrowKey", titleKey: "titleKey", leadKey: "leadKey" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 12, vars: 8, consts: [[1, "page-hero", "section--navy"], ["aria-hidden", "true", 1, "tech-grid"], ["aria-hidden", "true", 1, "page-hero__aurora"], [1, "container", "container--narrow", "page-hero__inner"], ["appReveal", "", 1, "eyebrow"], ["appReveal", "", 1, "page-hero__title", 3, "revealDelay"], ["appReveal", "", 1, "page-hero__lead", 3, "revealDelay"]], template: function PageHeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(10, PageHeroComponent_Conditional_10_Template, 3, 4, "p", 6);
      \u0275\u0275projection(11);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, ctx.eyebrowKey));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 90);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, ctx.titleKey));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.leadKey ? 10 : -1);
    }
  }, dependencies: [CommonModule, RevealDirective, TranslatePipe], styles: ["\n\n.page-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: clip;\n  padding-block: calc(var(--header-height) + clamp(2.5rem, 4rem + 3vw, 5rem)) clamp(3rem, 3rem + 3vw, 5rem);\n  border-radius: 0 0 var(--radius-hero) var(--radius-hero);\n  background: var(--grad-hero);\n  text-align: center;\n}\n.page-hero__aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -20% -10% auto -10%;\n  height: 120%;\n  pointer-events: none;\n  background:\n    radial-gradient(\n      28rem 16rem at 22% 30%,\n      var(--grad-mesh-a),\n      transparent 65%),\n    radial-gradient(\n      30rem 18rem at 78% 26%,\n      var(--grad-mesh-b),\n      transparent 65%);\n  animation: _ngcontent-%COMP%_page-hero-drift var(--dur-aurora) ease-in-out infinite alternate;\n}\n.page-hero__inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: var(--z-content);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.page-hero__title[_ngcontent-%COMP%] {\n  font-size: var(--fs-900);\n  color: var(--white);\n  letter-spacing: -0.025em;\n  margin-top: var(--space-4);\n  max-width: 20ch;\n}\n.page-hero__lead[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  font-size: var(--fs-500);\n  color: var(--on-navy-600);\n  max-width: 58ch;\n}\n@keyframes _ngcontent-%COMP%_page-hero-drift {\n  from {\n    transform: translate3d(-2%, 0, 0) scale(1);\n    opacity: 0.85;\n  }\n  to {\n    transform: translate3d(2%, 3%, 0) scale(1.06);\n    opacity: 1;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .page-hero__aurora[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=page-hero.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageHeroComponent, { className: "PageHeroComponent", filePath: "src/app/shared/components/page-hero/page-hero.component.ts", lineNumber: 13 });
})();

export {
  PageHeroComponent
};
//# sourceMappingURL=chunk-PAYULNBZ.js.map
