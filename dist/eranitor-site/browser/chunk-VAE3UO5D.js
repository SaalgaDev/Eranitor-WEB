import {
  CommonModule,
  NgTemplateOutlet,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-NZFAXOOV.js";

// src/app/shared/components/phone-mockup/phone-mockup.component.ts
function PhoneMockupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 3);
    \u0275\u0275listener("error", function PhoneMockupComponent_Conditional_1_Template_img_error_0_listener() {
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
function PhoneMockupComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span");
    \u0275\u0275text(2, "Pr\xE9via do app");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "Adicione ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "tela1.png");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " em assets/images");
    \u0275\u0275elementEnd()();
  }
}
var PhoneMockupComponent = class _PhoneMockupComponent {
  variant = "inline";
  screen = "plan";
  /** Coloque a prévia do aplicativo em public/assets/images/tela1.png. */
  src = "assets/images/tela1.png";
  imageAvailable = true;
  onImageError() {
    this.imageAvailable = false;
  }
  order = ["plan", "track", "review"];
  subjectKeys = ["phone.subject.math", "phone.subject.history", "phone.subject.bio"];
  subjectProgress = [72, 45, 88];
  ringByScreen = { plan: 68, track: 54, review: 81 };
  tabByScreen = { plan: 0, track: 3, review: 1 };
  taskKeys = {
    plan: ["phone.task.plan.0", "phone.task.plan.1"],
    track: ["phone.task.track.0", "phone.task.track.1"],
    review: ["phone.task.review.0", "phone.task.review.1"]
  };
  static \u0275fac = function PhoneMockupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhoneMockupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PhoneMockupComponent, selectors: [["app-phone-mockup"]], inputs: { variant: "variant", screen: "screen", src: "src" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[1, "phone"], ["alt", "Pr\xE9via do aplicativo Eranitor", 1, "phone__image", 3, "src"], ["role", "img", "aria-label", "Pr\xE9via do aplicativo Eranitor", 1, "phone__placeholder"], ["alt", "Pr\xE9via do aplicativo Eranitor", 1, "phone__image", 3, "error", "src"]], template: function PhoneMockupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, PhoneMockupComponent_Conditional_1_Template, 1, 1, "img", 1)(2, PhoneMockupComponent_Conditional_2_Template, 8, 0, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("phone--float", ctx.variant === "float");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.imageAvailable ? 1 : 2);
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  --phone-w: clamp(16rem, 13rem + 13vw, 21.5rem);\n}\n.phone[_ngcontent-%COMP%] {\n  width: var(--phone-w);\n  max-width: 76vw;\n  margin-inline: auto;\n  filter: drop-shadow(0 1.5rem 1.5rem rgba(0, 0, 0, 0.45));\n}\n.phone--float[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_phone-float var(--dur-float) ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_phone-float {\n  0%, 100% {\n    translate: 0 0;\n  }\n  50% {\n    translate: 0 -0.8rem;\n  }\n}\n.phone__image[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  max-height: 78vh;\n  object-fit: contain;\n  object-position: center;\n}\n.phone__placeholder[_ngcontent-%COMP%] {\n  aspect-ratio: 9/19.5;\n  display: grid;\n  place-content: center;\n  gap: 0.7rem;\n  padding: 1.5rem;\n  text-align: center;\n  color: var(--on-navy-100);\n  background:\n    linear-gradient(\n      145deg,\n      var(--navy-700),\n      var(--navy-950));\n  border: 2px solid rgba(149, 197, 235, 0.55);\n  border-radius: 2rem;\n  box-shadow: inset 0 0 0 0.45rem var(--navy-900);\n}\n.phone__placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.phone__placeholder[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--on-navy-600);\n  line-height: 1.4;\n}\n@media (prefers-reduced-motion: reduce) {\n  .phone--float[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=phone-mockup.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PhoneMockupComponent, { className: "PhoneMockupComponent", filePath: "src/app/shared/components/phone-mockup/phone-mockup.component.ts", lineNumber: 14 });
})();

// src/app/shared/components/store-badge/store-badge.component.ts
function StoreBadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 1);
    \u0275\u0275elementContainer(1, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const content_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("href", ctx_r0.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", content_r2);
  }
}
function StoreBadgeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementContainer(2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const content_r2 = \u0275\u0275reference(3);
    \u0275\u0275attribute("aria-label", ctx_r0.label + ": " + \u0275\u0275pipeBind1(1, 2, "common.soon"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", content_r2);
  }
}
function StoreBadgeComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 8);
    \u0275\u0275elementEnd();
  }
}
function StoreBadgeComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 4);
    \u0275\u0275element(1, "path", 9);
    \u0275\u0275elementEnd();
  }
}
function StoreBadgeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StoreBadgeComponent_ng_template_2_Conditional_0_Template, 2, 0, ":svg:svg", 4)(1, StoreBadgeComponent_ng_template_2_Conditional_1_Template, 2, 0, ":svg:svg", 4);
    \u0275\u0275elementStart(2, "span", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.platform === "google-play" ? 0 : 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, ctx_r0.available ? "store.available" : "store.soon"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
var StoreBadgeComponent = class _StoreBadgeComponent {
  platform = "google-play";
  available = false;
  url;
  get label() {
    return this.platform === "google-play" ? "Google Play" : "App Store";
  }
  static \u0275fac = function StoreBadgeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StoreBadgeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StoreBadgeComponent, selectors: [["app-store-badge"]], inputs: { platform: "platform", available: "available", url: "url" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [["content", ""], ["target", "_blank", "rel", "noopener noreferrer", 1, "badge", 3, "href"], ["role", "note", 1, "badge", "badge--disabled"], [3, "ngTemplateOutlet"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "badge__icon"], [1, "badge__text"], [1, "badge__sub"], [1, "badge__label"], ["d", "M4 3.6v16.8a1 1 0 0 0 1.6.8l11-8.4a1 1 0 0 0 0-1.6l-11-8.4A1 1 0 0 0 4 3.6Z", "fill", "currentColor"], ["d", "M16.7 12.4c0-2 1.6-3 1.7-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.4 2.5-.4 6.3 1 8.3.7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.4ZM14.5 6.1c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2Z", "fill", "currentColor"]], template: function StoreBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StoreBadgeComponent_Conditional_0_Template, 2, 2, "a", 1)(1, StoreBadgeComponent_Conditional_1_Template, 3, 4, "div", 2)(2, StoreBadgeComponent_ng_template_2_Template, 8, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.available && ctx.url ? 0 : 1);
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, TranslatePipe], styles: ["\n\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--space-3);\n  padding: 0.65rem 1.25rem;\n  border-radius: var(--radius-md);\n  background: var(--navy-800);\n  border: var(--stroke-md);\n  color: var(--white);\n  transition: transform var(--dur-fast) var(--ease-standard);\n}\na.badge[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.badge--disabled[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.badge__icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n}\n.badge__text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.badge__sub[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--on-navy-600);\n}\n.badge__label[_ngcontent-%COMP%] {\n  font-family: var(--font-display);\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n/*# sourceMappingURL=store-badge.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StoreBadgeComponent, { className: "StoreBadgeComponent", filePath: "src/app/shared/components/store-badge/store-badge.component.ts", lineNumber: 14 });
})();

export {
  PhoneMockupComponent,
  StoreBadgeComponent
};
//# sourceMappingURL=chunk-VAE3UO5D.js.map
