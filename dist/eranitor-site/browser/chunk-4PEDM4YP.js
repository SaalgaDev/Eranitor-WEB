import {
  RouterLink
} from "./chunk-CZMGGFVX.js";
import {
  PageHeroComponent
} from "./chunk-PAYULNBZ.js";
import {
  RevealDirective
} from "./chunk-P5JX75SE.js";
import {
  CommonModule,
  ElementRef,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NZFAXOOV.js";
import "./chunk-Y5RQAIA6.js";

// src/app/pages/sobre/sobre.component.ts
var _forTrack0 = ($index, $item) => $item.target;
function SobreComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function SobreComponent_For_8_Template_button_click_0_listener() {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollTo(g_r2.target));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, g_r2.key));
  }
}
function SobreComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r4 * 90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "page.about.signal." + i_r4 + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "page.about.signal." + i_r4 + ".text"));
  }
}
function SobreComponent_For_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "page.about.principle." + i_r5));
  }
}
function SobreComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "dt", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd", 64)(5, "span");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 65);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "dd", 66);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r6 * 80);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "page.about.stat." + i_r6 + ".label"));
    \u0275\u0275advance(3);
    \u0275\u0275attribute("data-count", \u0275\u0275pipeBind1(6, 8, "page.about.stat." + i_r6 + ".value"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "page.about.stat." + i_r6 + ".value"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "page.about.stat." + i_r6 + ".suffix"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "page.about.stat." + i_r6 + ".label"));
  }
}
function SobreComponent_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 33)(1, "span", 67);
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
    const i_r7 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r7 % 2 * 90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "page.about.stage." + i_r7 + ".name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "page.about.stage." + i_r7 + ".text"));
  }
}
function SobreComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 38)(1, "span", 68);
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
    \u0275\u0275elementStart(10, "p", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 70);
    \u0275\u0275element(12, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r8 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r8 * 90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "page.about.who." + i_r8 + ".tag"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "page.about.who." + i_r8 + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "page.about.who." + i_r8 + ".text"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 11, "page.about.who." + i_r8 + ".help"), " ");
  }
}
function SobreComponent_For_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r9 * 90);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "page.about.value." + i_r9 + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "page.about.value." + i_r9 + ".text"));
  }
}
function SobreComponent_For_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45)(1, "span", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 73);
    \u0275\u0275element(3, "path", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r10 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r10 % 2 * 90);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "page.about.diff." + i_r10 + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 5, "page.about.diff." + i_r10 + ".text"));
  }
}
function SobreComponent_For_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "page.about.honest." + i_r11));
  }
}
function SobreComponent_For_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "page.about.future." + i_r12));
  }
}
function SobreComponent_For_153_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 56);
    \u0275\u0275element(1, "span", 74);
    \u0275\u0275elementStart(2, "span", 75);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r13 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r13 * 90);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "page.about.phase." + i_r13 + ".date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 6, "page.about.phase." + i_r13 + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "page.about.phase." + i_r13 + ".text"));
  }
}
var SobreComponent = class _SobreComponent {
  host;
  stageIndexes = [0, 1, 2, 3, 4, 5];
  valueIndexes = [0, 1, 2];
  signalIndexes = [0, 1, 2];
  statIndexes = [0, 1, 2, 3];
  whoIndexes = [0, 1, 2];
  diffIndexes = [0, 1, 2, 3];
  phaseIndexes = [0, 1, 2, 3];
  honestIndexes = [0, 1, 2];
  futureIndexes = [0, 1, 2];
  guideLinks = [
    { key: "page.about.guide.0", target: "origem" },
    { key: "page.about.guide.1", target: "publico" },
    { key: "page.about.guide.2", target: "diferenciais" },
    { key: "page.about.guide.3", target: "jornada" }
  ];
  constructor(host) {
    this.host = host;
  }
  scrollTo(targetId) {
    const el = this.host.nativeElement.querySelector(`#${targetId}`);
    if (!el)
      return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    if (!el.hasAttribute("tabindex"))
      el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  }
  ngAfterViewInit() {
    const els = Array.from(this.host.nativeElement.querySelectorAll("[data-count]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => this.setFinal(el));
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting)
          continue;
        const el = entry.target;
        io.unobserve(el);
        if (reduced) {
          this.setFinal(el);
        } else {
          this.animate(el);
        }
      }
    }, { threshold: 0.4 });
    els.forEach((el) => io.observe(el));
  }
  targetOf(el) {
    return Number(el.dataset["count"] ?? "0") || 0;
  }
  setFinal(el) {
    el.textContent = String(this.targetOf(el));
  }
  animate(el) {
    const target = this.targetOf(el);
    const dur = 900;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = String(Math.round(target * eased));
      if (p < 1)
        requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  static \u0275fac = function SobreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SobreComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SobreComponent, selectors: [["app-sobre"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 165, vars: 113, consts: [["eyebrowKey", "page.about.eyebrow", "titleKey", "page.about.title", "leadKey", "page.about.lead"], [1, "guide"], ["appReveal", "", 1, "container", "guide__inner"], [1, "guide__label"], [1, "guide__links"], ["type", "button", 1, "guide__pill"], [1, "section"], [1, "container", "missao__grid"], [1, "section-head"], ["appReveal", "", 1, "eyebrow", "eyebrow--on-light"], ["appReveal", "", 1, "section-head__title", 3, "revealDelay"], ["appReveal", "", 1, "missao__text", 3, "revealDelay"], ["id", "origem", "aria-labelledby", "origem-title", 1, "section", "section--alt"], [1, "container"], [1, "origin__grid"], [1, "origin__sticky"], ["id", "origem-title", "appReveal", "", 1, "section-head__title", 3, "revealDelay"], ["appReveal", "", 1, "origin__lead", 3, "revealDelay"], ["appReveal", "", 1, "origin__quote", 3, "revealDelay"], [1, "origin__body"], ["appReveal", "", 1, "origin__subtitle"], [1, "signals"], ["appReveal", "", 1, "signals__item", 3, "revealDelay"], ["appReveal", "", 1, "solution"], ["aria-label", "Principles", 1, "principles"], [1, "principles__chip"], ["aria-label", "Stats", 1, "stats"], ["appReveal", "", 1, "stats__item", 3, "revealDelay"], [1, "section", "section--navy"], [1, "container", "container--wide"], [1, "section-head", "section-head--center"], ["appReveal", "", 1, "eyebrow"], [1, "cycle-detail"], ["appReveal", "", 1, "cycle-detail__item", 3, "revealDelay"], ["id", "publico", "aria-labelledby", "publico-title", 1, "section"], ["id", "publico-title", "appReveal", "", 1, "section-head__title", 3, "revealDelay"], ["appReveal", "", 1, "section-head__lead", 3, "revealDelay"], [1, "who-grid"], ["appReveal", "", 1, "who-card", 3, "revealDelay"], [1, "section", "section--alt"], [1, "values-grid"], ["appReveal", "", 1, "value-card", 3, "revealDelay"], ["id", "diferenciais", "aria-labelledby", "diff-title", 1, "section"], ["id", "diff-title", "appReveal", "", 1, "section-head__title", 3, "revealDelay"], [1, "diff-list"], ["appReveal", "", 1, "diff-list__item", 3, "revealDelay"], ["appReveal", "", 1, "honest"], [1, "honest__summary"], ["aria-hidden", "true", 1, "honest__icon"], [1, "honest__list"], ["id", "jornada", "aria-labelledby", "jornada-title", 1, "section", "section--alt"], [1, "container", "journey__grid"], ["id", "jornada-title", "appReveal", "", 1, "section-head__title", 3, "revealDelay"], ["appReveal", "", 1, "future", 3, "revealDelay"], ["appReveal", "", 1, "tcc-note", 3, "revealDelay"], [1, "timeline"], ["appReveal", "", 1, "timeline__item", 3, "revealDelay"], [1, "section", "section--navy", "final-cta"], [1, "container", "container--narrow", "final-cta__inner"], ["appReveal", "", 1, "section-head__title"], ["routerLink", "/baixar", "appReveal", "", 1, "cta", "cta--primary", "cta--lg", "final-cta__btn", 3, "revealDelay"], ["type", "button", 1, "guide__pill", 3, "click"], ["aria-hidden", "true", 1, "signals__num"], [1, "sr-only"], [1, "stats__num"], [1, "stats__suffix"], [1, "stats__label"], [1, "cycle-detail__index"], [1, "who-card__tag"], [1, "who-card__help"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M20 6 9 17l-5-5"], ["aria-hidden", "true", 1, "diff-list__check"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["aria-hidden", "true", 1, "timeline__dot"], [1, "timeline__phase"]], template: function SobreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-hero", 0);
      \u0275\u0275elementStart(1, "nav", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4);
      \u0275\u0275repeaterCreate(7, SobreComponent_For_8_Template, 3, 3, "button", 5, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 6)(10, "div", 7)(11, "div", 8)(12, "span", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h2", 10);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 11)(19, "p");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "section", 12)(26, "div", 13)(27, "div", 14)(28, "div", 15)(29, "span", 9);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "h2", 16);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 17);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "blockquote", 18);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 19)(42, "h3", 20);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "ol", 21);
      \u0275\u0275repeaterCreate(46, SobreComponent_For_47_Template, 10, 8, "li", 22, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 23)(49, "h3");
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p");
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "ul", 24);
      \u0275\u0275repeaterCreate(56, SobreComponent_For_57_Template, 3, 3, "li", 25, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "dl", 26);
      \u0275\u0275repeaterCreate(59, SobreComponent_For_60_Template, 15, 16, "div", 27, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "section", 28)(62, "div", 29)(63, "div", 30)(64, "span", 31);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h2", 10);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "ol", 32);
      \u0275\u0275repeaterCreate(71, SobreComponent_For_72_Template, 10, 8, "li", 33, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "section", 34)(74, "div", 29)(75, "div", 8)(76, "span", 9);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "h2", 35);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "p", 36);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 37);
      \u0275\u0275repeaterCreate(86, SobreComponent_For_87_Template, 15, 13, "article", 38, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "section", 39)(89, "div", 29)(90, "div", 30)(91, "span", 9);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "h2", 10);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 40);
      \u0275\u0275repeaterCreate(98, SobreComponent_For_99_Template, 7, 7, "div", 41, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "section", 42)(101, "div", 13)(102, "div", 30)(103, "span", 9);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "h2", 43);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 36);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "ul", 44);
      \u0275\u0275repeaterCreate(113, SobreComponent_For_114_Template, 11, 7, "li", 45, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "details", 46)(116, "summary", 47)(117, "span")(118, "strong");
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "small");
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "span", 48);
      \u0275\u0275text(125, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "ul", 49);
      \u0275\u0275repeaterCreate(127, SobreComponent_For_128_Template, 3, 3, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(129, "section", 50)(130, "div", 51)(131, "div")(132, "span", 9);
      \u0275\u0275text(133);
      \u0275\u0275pipe(134, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "h2", 52);
      \u0275\u0275text(136);
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p", 36);
      \u0275\u0275text(139);
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 53)(142, "h3");
      \u0275\u0275text(143);
      \u0275\u0275pipe(144, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "ul");
      \u0275\u0275repeaterCreate(146, SobreComponent_For_147_Template, 3, 3, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "p", 54);
      \u0275\u0275text(149);
      \u0275\u0275pipe(150, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "ol", 55);
      \u0275\u0275repeaterCreate(152, SobreComponent_For_153_Template, 11, 10, "li", 56, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "section", 57)(155, "div", 58)(156, "h2", 59);
      \u0275\u0275text(157);
      \u0275\u0275pipe(158, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "p", 36);
      \u0275\u0275text(160);
      \u0275\u0275pipe(161, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "a", 60);
      \u0275\u0275text(163);
      \u0275\u0275pipe(164, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 49, "page.about.guideLabel"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.guideLinks);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 51, "page.about.missionEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 53, "page.about.missionTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 55, "page.about.missionP1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 57, "page.about.missionP2"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 59, "page.about.originEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 61, "page.about.originTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 63, "page.about.originLead"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 200);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 65, "page.about.quote"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 67, "page.about.signalsTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.signalIndexes);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 69, "page.about.solutionTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 71, "page.about.solutionText"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.signalIndexes);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.statIndexes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 73, "page.about.howEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 75, "page.about.howTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.stageIndexes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 77, "page.about.audienceEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 79, "page.about.audienceTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 81, "page.about.audienceLead"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.whoIndexes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 83, "page.about.valuesEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 85, "page.about.valuesTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.valueIndexes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 87, "page.about.diffEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 89, "page.about.diffTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(111, 91, "page.about.diffLead"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.diffIndexes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 93, "page.about.honestTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 95, "page.about.honestText"));
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.honestIndexes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(134, 97, "page.about.journeyEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(137, 99, "page.about.journeyTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 101, "page.about.journeyLead"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 200);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(144, 103, "page.about.futureTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.futureIndexes);
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 240);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(150, 105, "page.about.tccNote"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.phaseIndexes);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(158, 107, "page.about.ctaTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 90);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(161, 109, "page.about.ctaText"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 160);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(164, 111, "page.about.ctaBtn"));
    }
  }, dependencies: [CommonModule, RouterLink, PageHeroComponent, RevealDirective, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.missao__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.8fr 1.2fr;\n  gap: clamp(1.5rem, 1rem + 3vw, 4rem);\n  align-items: start;\n}\n.missao__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-4);\n  font-size: var(--fs-500);\n  color: var(--text-muted);\n  max-width: 62ch;\n}\n.cycle-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--gap-fluid);\n}\n.cycle-detail__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  background: var(--navy-800);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: var(--radius-xl);\n  padding: clamp(1.25rem, 1rem + 1.5vw, 2rem);\n}\n.cycle-detail__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  color: var(--white);\n  margin-bottom: var(--space-2);\n}\n.cycle-detail__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--on-navy-600);\n  font-size: var(--fs-400);\n  line-height: var(--lh-normal);\n}\n.cycle-detail__index[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--grad-cta);\n  color: var(--navy-950);\n  font-family: var(--font-display);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap-fluid);\n}\n.value-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  color: var(--text);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-xl);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  padding: clamp(1.25rem, 1rem + 1.5vw, 2rem);\n  transition: var(--theme-transition);\n}\n.value-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  margin-bottom: var(--space-3);\n}\n.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: var(--lh-normal);\n}\n.final-cta__inner[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-inline: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.final-cta[_ngcontent-%COMP%]   .section-head__title[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n.final-cta[_ngcontent-%COMP%]   .section-head__lead[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.final-cta__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: var(--space-6);\n}\n@media (max-width: 900px) {\n  .missao__grid[_ngcontent-%COMP%], \n   .cycle-detail[_ngcontent-%COMP%], \n   .values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\nsection[id][_ngcontent-%COMP%] {\n  scroll-margin-top: calc(var(--header-height) + 1rem);\n}\n.guide[_ngcontent-%COMP%] {\n  padding-block: var(--space-5) 0;\n}\n.guide__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  flex-wrap: wrap;\n}\n.guide__label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--fs-300);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n.guide__links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-3);\n  flex-wrap: wrap;\n}\n.guide__pill[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--fs-300);\n  font-weight: 700;\n  color: var(--text);\n  background: var(--surface);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-pill);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  padding: 0.55rem 1.1rem;\n  cursor: pointer;\n  transition: transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard);\n}\n.guide__pill[_ngcontent-%COMP%]:hover {\n  transform: translate(-2px, -2px);\n  box-shadow: 5px 5px 0 var(--hard-color);\n}\n.origin__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  gap: clamp(2rem, 2rem + 3vw, 4.5rem);\n  align-items: start;\n}\n.origin__sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: calc(var(--header-height) + 1.5rem);\n}\n.origin__lead[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  font-size: var(--fs-500);\n  color: var(--text-muted);\n  max-width: 46ch;\n}\n.origin__quote[_ngcontent-%COMP%] {\n  margin: var(--space-6) 0 0;\n  padding-left: var(--space-4);\n  border-left: 3px solid var(--ice-400);\n  font-family: var(--font-display);\n  font-size: var(--fs-600);\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  line-height: var(--lh-snug);\n  max-width: 26ch;\n}\n.origin__subtitle[_ngcontent-%COMP%] {\n  font-size: var(--fs-500);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.signals[_ngcontent-%COMP%] {\n  margin-top: var(--space-4);\n  display: flex;\n  flex-direction: column;\n}\n.signals__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  padding-block: var(--space-5);\n  border-top: 1px solid var(--border-soft);\n}\n.signals__item[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid var(--border-soft);\n}\n.signals__num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: var(--navy-950);\n  color: var(--ice-400);\n  font-family: var(--font-display);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.signals__item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  margin-bottom: var(--space-2);\n}\n.signals__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: var(--fs-400);\n  max-width: 52ch;\n}\n.solution[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n  background: var(--card-bg);\n  color: var(--text);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-xl);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  padding: clamp(1.25rem, 1rem + 1.5vw, 2rem);\n}\n.solution[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  margin-bottom: var(--space-3);\n}\n.solution[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  max-width: 56ch;\n}\n.principles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--space-3);\n  margin-top: var(--space-5);\n}\n.principles__chip[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--fs-300);\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--ice-400);\n  background: var(--navy-950);\n  border-radius: var(--radius-pill);\n  padding: 0.45rem 0.95rem;\n}\n.stats[_ngcontent-%COMP%] {\n  margin-top: var(--space-8);\n  padding-top: var(--space-6);\n  border-top: 1px solid var(--border-soft);\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--gap-fluid);\n}\n.stats__num[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--fs-800);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  line-height: 1;\n}\n.stats__suffix[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  color: var(--text-muted);\n}\n.stats__label[_ngcontent-%COMP%] {\n  margin-top: var(--space-2);\n  color: var(--text-muted);\n  font-size: var(--fs-300);\n  max-width: 26ch;\n}\n.who-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: var(--gap-fluid);\n}\n.who-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  color: var(--text);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-xl);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  padding: clamp(1.5rem, 1.25rem + 1.5vw, 2.25rem);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  transition: transform var(--dur-base) var(--ease-standard);\n}\n.who-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.who-card__tag[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  font-family: var(--font-display);\n  font-size: var(--fs-200);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  background: var(--navy-950);\n  color: var(--ice-400);\n  border-radius: var(--radius-pill);\n  padding: 0.4rem 0.8rem;\n}\n.who-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-700);\n  letter-spacing: -0.015em;\n}\n.who-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: var(--fs-400);\n}\n.who-card__help[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-2);\n  margin-top: auto;\n  padding-top: var(--space-3);\n  border-top: 1px solid var(--border-soft);\n  font-size: var(--fs-300);\n  font-weight: 600;\n}\n.who-card__help[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  flex-shrink: 0;\n  color: var(--success-500);\n}\n.diff-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--gap-fluid);\n  max-width: 60rem;\n  margin-inline: auto;\n}\n.diff-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  padding-block: var(--space-2);\n}\n.diff-list__check[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--grad-cta);\n  color: var(--navy-950);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.diff-list__check[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.diff-list__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  margin-bottom: var(--space-2);\n}\n.diff-list__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: var(--fs-400);\n  max-width: 42ch;\n}\n.honest[_ngcontent-%COMP%] {\n  max-width: 60rem;\n  margin: var(--space-7) auto 0;\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-lg);\n  background: var(--surface);\n  overflow: clip;\n}\n.honest__summary[_ngcontent-%COMP%] {\n  list-style: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-4);\n  padding: var(--space-5) var(--space-6);\n  min-height: 44px;\n}\n.honest__summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.honest__summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-display);\n  font-size: var(--fs-500);\n}\n.honest__summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--text-muted);\n  font-size: var(--fs-300);\n  margin-top: 0.25rem;\n}\n.honest__icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  border: 2px solid var(--hard-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  font-weight: 700;\n  transition: transform var(--dur-base) var(--ease-standard);\n}\n.honest[open][_ngcontent-%COMP%]   .honest__icon[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.honest__list[_ngcontent-%COMP%] {\n  padding: 0 var(--space-6) var(--space-6);\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-3);\n  color: var(--text-muted);\n  font-size: var(--fs-400);\n}\n.honest__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n  position: relative;\n}\n.honest__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2014";\n  position: absolute;\n  left: 0;\n  color: var(--ice-500);\n}\n.journey__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: clamp(2rem, 2rem + 4vw, 5rem);\n  align-items: start;\n}\n.future[_ngcontent-%COMP%] {\n  margin-top: var(--space-6);\n  padding-left: var(--space-4);\n  border-left: 3px solid var(--ice-400);\n}\n.future[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-500);\n  margin-bottom: var(--space-3);\n}\n.future[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-2);\n  color: var(--text-muted);\n  font-size: var(--fs-400);\n}\n.tcc-note[_ngcontent-%COMP%] {\n  margin-top: var(--space-5);\n  font-size: var(--fs-300);\n  color: var(--text-muted);\n  max-width: 48ch;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: var(--space-6);\n  padding-left: 1.75rem;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0.45rem;\n  top: 0.5rem;\n  bottom: 0.5rem;\n  width: 2px;\n  background: var(--border-soft);\n}\n.timeline__item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.timeline__dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -1.75rem;\n  top: 0.25rem;\n  width: 1rem;\n  height: 1rem;\n  border-radius: 50%;\n  background: var(--ice-400);\n  border: 3px solid var(--navy-950);\n  box-shadow: 0 0 0 2px var(--ice-400);\n}\n.timeline__phase[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-size: var(--fs-200);\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n.timeline__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  margin-top: var(--space-2);\n  margin-bottom: var(--space-2);\n}\n.timeline__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: var(--fs-400);\n  max-width: 48ch;\n}\n@media (max-width: 1024px) {\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .who-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .origin__grid[_ngcontent-%COMP%], \n   .journey__grid[_ngcontent-%COMP%], \n   .diff-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .origin__sticky[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .origin__quote[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n@media (max-width: 640px) {\n  .stats[_ngcontent-%COMP%], \n   .who-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .guide__inner[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .guide__pill[_ngcontent-%COMP%]:hover, \n   .who-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=sobre.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SobreComponent, { className: "SobreComponent", filePath: "src/app/pages/sobre/sobre.component.ts", lineNumber: 15 });
})();
export {
  SobreComponent
};
//# sourceMappingURL=chunk-4PEDM4YP.js.map
