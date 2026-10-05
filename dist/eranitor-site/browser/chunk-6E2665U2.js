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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UA3FDTCO.js";
import "./chunk-Y5RQAIA6.js";

// src/app/pages/contato/contato.component.ts
var _forTrack0 = ($index, $item) => $item.titleKey;
function ContatoComponent_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "rect", 10)(2, "path", 11);
    \u0275\u0275elementEnd();
  }
}
function ContatoComponent_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 7);
    \u0275\u0275element(1, "rect", 12)(2, "circle", 13)(3, "circle", 14);
    \u0275\u0275elementEnd();
  }
}
function ContatoComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "span", 6);
    \u0275\u0275template(2, ContatoComponent_For_5_Conditional_2_Template, 3, 0, ":svg:svg", 7)(3, ContatoComponent_For_5_Conditional_3_Template, 4, 0, ":svg:svg", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const \u0275$index_9_r2 = ctx.$index;
    \u0275\u0275property("href", c_r1.href, \u0275\u0275sanitizeUrl)("revealDelay", \u0275$index_9_r2 * 90);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r1.icon === "mail" ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, c_r1.titleKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.valueKey ? \u0275\u0275pipeBind1(9, 7, c_r1.valueKey) : c_r1.value);
  }
}
var ContatoComponent = class _ContatoComponent {
  channels = [
    {
      icon: "mail",
      titleKey: "page.contact.email",
      value: "contato@eranitor.com.br",
      href: "mailto:contato@eranitor.com.br"
    },
    {
      icon: "instagram",
      titleKey: "page.contact.instagram",
      valueKey: "page.contact.instagramValue",
      href: "#"
    }
  ];
  static \u0275fac = function ContatoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContatoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContatoComponent, selectors: [["app-contato"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 3, consts: [["eyebrowKey", "page.contact.eyebrow", "titleKey", "page.contact.title", "leadKey", "page.contact.lead"], [1, "section"], [1, "container", "container--narrow"], [1, "channels-grid"], ["appReveal", "", "rel", "noopener noreferrer", 1, "channel-card", 3, "href", "revealDelay"], ["appReveal", "", 1, "channels-note"], ["aria-hidden", "true", 1, "channel-card__icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "channel-card__title"], [1, "channel-card__value"], ["x", "3", "y", "5", "width", "18", "height", "14", "rx", "2"], ["d", "m3 7 9 6 9-6"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1", "fill", "currentColor", "stroke", "none"]], template: function ContatoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-page-hero", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275repeaterCreate(4, ContatoComponent_For_5_Template, 10, 9, "a", 4, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.channels);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 1, "page.contact.note"), " ");
    }
  }, dependencies: [CommonModule, PageHeroComponent, RevealDirective, TranslatePipe], styles: ["\n\n.channels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: var(--gap-fluid);\n}\n.channel-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: var(--space-3);\n  padding: clamp(1.75rem, 1.5rem + 2vw, 2.75rem) var(--space-5);\n  background: var(--card-bg);\n  color: var(--text);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-xl);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  min-height: 44px;\n  transition:\n    transform var(--dur-base) var(--ease-standard),\n    box-shadow var(--dur-base) var(--ease-standard),\n    var(--theme-transition);\n}\n.channel-card[_ngcontent-%COMP%]:hover {\n  transform: translate(-3px, -3px);\n  box-shadow: 5px 5px 0 var(--hard-color);\n}\n.channel-card__icon[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: var(--ice-200);\n  border: var(--stroke-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.channel-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.625rem;\n  height: 1.625rem;\n}\n.channel-card__title[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: var(--fs-500);\n}\n.channel-card__value[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: var(--fs-400);\n  word-break: break-word;\n}\n.channels-note[_ngcontent-%COMP%] {\n  max-width: 36rem;\n  margin: var(--space-8) auto 0;\n  text-align: center;\n  color: var(--text-muted);\n  font-size: var(--fs-300);\n}\n@media (prefers-reduced-motion: reduce) {\n  .channel-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n@media (max-width: 620px) {\n  .channels-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=contato.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContatoComponent, { className: "ContatoComponent", filePath: "src/app/pages/contato/contato.component.ts", lineNumber: 22 });
})();
export {
  ContatoComponent
};
//# sourceMappingURL=chunk-6E2665U2.js.map
