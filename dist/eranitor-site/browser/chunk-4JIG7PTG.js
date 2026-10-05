import {
  RouterLink
} from "./chunk-ENIMN6E2.js";
import {
  PageHeroComponent
} from "./chunk-4ZQR6UNA.js";
import {
  RevealDirective
} from "./chunk-C6P7IBYN.js";
import {
  CommonModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UA3FDTCO.js";
import "./chunk-Y5RQAIA6.js";

// src/app/pages/sobre/sobre.component.ts
function SobreComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 12)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r1 % 2 * 90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "page.about.stage." + i_r1 + ".name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "page.about.stage." + i_r1 + ".text"));
  }
}
function SobreComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r2 * 90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "page.about.value." + i_r2 + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "page.about.value." + i_r2 + ".text"));
  }
}
var SobreComponent = class _SobreComponent {
  stageIndexes = [0, 1, 2, 3, 4, 5];
  valueIndexes = [0, 1, 2];
  static \u0275fac = function SobreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SobreComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SobreComponent, selectors: [["app-sobre"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 39, consts: [["eyebrowKey", "page.about.eyebrow", "titleKey", "page.about.title", "leadKey", "page.about.lead"], [1, "section"], [1, "container", "missao__grid"], [1, "section-head"], ["appReveal", "", 1, "eyebrow", "eyebrow--on-light"], ["appReveal", "", 1, "section-head__title", 3, "revealDelay"], ["appReveal", "", 1, "missao__text", 3, "revealDelay"], [1, "section", "section--navy"], [1, "container", "container--wide"], [1, "section-head", "section-head--center"], ["appReveal", "", 1, "eyebrow"], [1, "cycle-detail"], ["appReveal", "", 1, "cycle-detail__item", 3, "revealDelay"], [1, "section", "section--alt"], [1, "values-grid"], ["appReveal", "", 1, "value-card", 3, "revealDelay"], [1, "section", "section--navy", "final-cta"], [1, "container", "container--narrow", "final-cta__inner"], ["appReveal", "", 1, "section-head__title"], ["appReveal", "", 1, "section-head__lead", 3, "revealDelay"], ["routerLink", "/baixar", "appReveal", "", 1, "cta", "cta--primary", "cta--lg", "final-cta__btn", 3, "revealDelay"], [1, "cycle-detail__index"]], template: function SobreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-hero", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h2", 5);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "p");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "p");
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "section", 7)(18, "div", 8)(19, "div", 9)(20, "span", 10);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h2", 5);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "ol", 11);
      \u0275\u0275repeaterCreate(27, SobreComponent_For_28_Template, 10, 8, "li", 12, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "section", 13)(30, "div", 8)(31, "div", 9)(32, "span", 4);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h2", 5);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 14);
      \u0275\u0275repeaterCreate(39, SobreComponent_For_40_Template, 7, 7, "div", 15, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "section", 16)(42, "div", 17)(43, "h2", 18);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 19);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 20);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 17, "page.about.missionEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 19, "page.about.missionTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 21, "page.about.missionP1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 23, "page.about.missionP2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 25, "page.about.howEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 27, "page.about.howTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.stageIndexes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 29, "page.about.valuesEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 31, "page.about.valuesTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.valueIndexes);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 33, "page.about.ctaTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 90);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 35, "page.about.ctaText"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 160);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 37, "page.about.ctaBtn"));
    }
  }, dependencies: [CommonModule, RouterLink, PageHeroComponent, RevealDirective, TranslatePipe], styles: ["\n\n.missao__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.8fr 1.2fr;\n  gap: clamp(1.5rem, 1rem + 3vw, 4rem);\n  align-items: start;\n}\n.missao__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  font-size: var(--fs-500);\n  color: var(--text-muted);\n  max-width: 62ch;\n}\n.cycle-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--gap-fluid);\n}\n.cycle-detail__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  background: var(--navy-800);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-xl);\n  padding: clamp(1.25rem, 1rem + 1.5vw, 2rem);\n}\n.cycle-detail__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  color: var(--white);\n  margin-bottom: var(--space-2);\n}\n.cycle-detail__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--on-navy-600);\n  font-size: var(--fs-400);\n  line-height: var(--lh-normal);\n}\n.cycle-detail__index[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--grad-cta);\n  color: var(--navy-950);\n  font-family: var(--font-display);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap-fluid);\n}\n.value-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  color: var(--text);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-xl);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  padding: clamp(1.25rem, 1rem + 1.5vw, 2rem);\n  transition: var(--theme-transition);\n}\n.value-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  margin-bottom: var(--space-3);\n}\n.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: var(--lh-normal);\n}\n.final-cta__inner[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.final-cta[_ngcontent-%COMP%]   .section-head__title[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.final-cta[_ngcontent-%COMP%]   .section-head__lead[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.final-cta__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: var(--space-6);\n}\n@media (max-width: 900px) {\n  .missao__grid[_ngcontent-%COMP%], \n   .cycle-detail[_ngcontent-%COMP%], \n   .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=sobre.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SobreComponent, { className: "SobreComponent", filePath: "src/app/pages/sobre/sobre.component.ts", lineNumber: 15 });
})();
export {
  SobreComponent
};
//# sourceMappingURL=chunk-4JIG7PTG.js.map
