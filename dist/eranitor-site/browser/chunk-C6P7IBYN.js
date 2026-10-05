import {
  ElementRef,
  Renderer2,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-UA3FDTCO.js";

// src/app/shared/directives/reveal.directive.ts
var RevealDirective = class _RevealDirective {
  el;
  renderer;
  appReveal = "up";
  revealDelay = 0;
  observer = null;
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
  ngOnInit() {
    const native = this.el.nativeElement;
    this.renderer.addClass(native, "reveal");
    if (this.appReveal !== "up") {
      this.renderer.addClass(native, `reveal--${this.appReveal}`);
    }
    if (this.revealDelay > 0) {
      native.style.setProperty("--reveal-delay", `${this.revealDelay}ms`);
    }
    if (typeof IntersectionObserver === "undefined") {
      this.renderer.addClass(native, "is-visible");
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.renderer.addClass(native, "is-visible");
          this.observer?.unobserve(native);
        }
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    this.observer.observe(native);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    this.observer = null;
  }
  static \u0275fac = function RevealDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevealDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RevealDirective, selectors: [["", "appReveal", ""]], inputs: { appReveal: "appReveal", revealDelay: "revealDelay" }, standalone: true });
};

export {
  RevealDirective
};
//# sourceMappingURL=chunk-C6P7IBYN.js.map
