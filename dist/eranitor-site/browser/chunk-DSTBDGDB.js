import {
  PhoneMockupComponent,
  StoreBadgeComponent
} from "./chunk-VAE3UO5D.js";
import {
  PageHeroComponent
} from "./chunk-PAYULNBZ.js";
import {
  RevealDirective
} from "./chunk-P5JX75SE.js";
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-NZFAXOOV.js";
import "./chunk-Y5RQAIA6.js";

// src/app/pages/download/download.component.ts
var _forTrack0 = ($index, $item) => $item.platform;
function DownloadComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-store-badge", 2);
  }
  if (rf & 2) {
    const store_r1 = ctx.$implicit;
    \u0275\u0275property("platform", store_r1.platform)("available", store_r1.available)("url", store_r1.url);
  }
}
function DownloadComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "span", 18);
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
    const i_r2 = ctx.$implicit;
    \u0275\u0275property("revealDelay", i_r2 * 80);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "page.download.step." + i_r2 + ".title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 6, "page.download.step." + i_r2 + ".text"));
  }
}
var DownloadComponent = class _DownloadComponent {
  stores = [
    { platform: "google-play", available: false, url: void 0 },
    { platform: "app-store", available: false, url: void 0 }
  ];
  stepIndexes = [0, 1, 2];
  static \u0275fac = function DownloadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DownloadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DownloadComponent, selectors: [["app-download"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 24, consts: [["eyebrowKey", "page.download.eyebrow", "titleKey", "page.download.title", "leadKey", "page.download.lead"], [1, "download-hero__badges"], [3, "platform", "available", "url"], [1, "section", "download-main"], [1, "container", "download-main__grid"], [1, "section-head"], ["appReveal", "", 1, "eyebrow", "eyebrow--on-light"], ["appReveal", "", 1, "section-head__title", 3, "revealDelay"], [1, "steps"], ["appReveal", "", 1, "steps__item", 3, "revealDelay"], ["role", "note", "appReveal", "", 1, "download-main__qr"], ["aria-hidden", "true", 1, "download-main__qr-box"], ["appReveal", "scale", 1, "download-main__visual"], ["variant", "float", "screen", "plan"], [1, "section", "section--alt", "compat"], [1, "container", "container--narrow", "compat__inner"], [1, "section-head", "section-head--center"], ["appReveal", "", 1, "section-head__lead", 3, "revealDelay"], [1, "steps__index"]], template: function DownloadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-page-hero", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, DownloadComponent_For_3_Template, 1, 3, "app-store-badge", 2, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "section", 3)(5, "div", 4)(6, "div")(7, "div", 5)(8, "span", 6);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h2", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "ol", 8);
      \u0275\u0275repeaterCreate(15, DownloadComponent_For_16_Template, 10, 8, "li", 9, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "span");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 12);
      \u0275\u0275element(26, "app-phone-mockup", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "section", 14)(28, "div", 15)(29, "div", 16)(30, "span", 6);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h2", 7);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 17);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.stores);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "page.download.stepsEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "page.download.stepsTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.stepIndexes);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 14, "page.download.qrTitle"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 16, "page.download.qrText"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 18, "page.download.compatEyebrow"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 80);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 20, "page.download.compatTitle"));
      \u0275\u0275advance(2);
      \u0275\u0275property("revealDelay", 140);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 22, "page.download.compatText"), " ");
    }
  }, dependencies: [CommonModule, StoreBadgeComponent, PhoneMockupComponent, PageHeroComponent, RevealDirective, TranslatePipe], styles: ["\n\n.download-hero__badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: var(--space-4);\n  margin-top: var(--space-7);\n}\n.download-main__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 0.9fr;\n  gap: clamp(2rem, 2rem + 3vw, 4.5rem);\n  align-items: center;\n}\n.steps[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--space-5);\n  margin-top: var(--space-6);\n}\n.steps__item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-4);\n  align-items: flex-start;\n  background: var(--surface);\n  color: var(--text);\n  border: 2px solid var(--hard-color);\n  border-radius: var(--radius-lg);\n  box-shadow: 3px 3px 0 var(--hard-color);\n  padding: var(--space-5);\n  transition: var(--theme-transition);\n}\n.steps__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--fs-600);\n  margin-bottom: var(--space-2);\n}\n.steps__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  line-height: var(--lh-normal);\n}\n.steps__index[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--navy-950);\n  color: var(--ice-400);\n  font-family: var(--font-display);\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.download-main__qr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-4);\n  margin-top: var(--space-6);\n  max-width: 28rem;\n}\n.download-main__qr-box[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 5.5rem;\n  height: 5.5rem;\n  border-radius: var(--radius-md);\n  border: 2px dashed var(--grey-400);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--fs-200);\n  color: var(--text-muted);\n  text-align: center;\n  padding: 0.5rem;\n}\n.download-main__qr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--fs-300);\n  color: var(--text-muted);\n  line-height: var(--lh-normal);\n}\n.download-main__visual[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  background: var(--grad-card-navy);\n  border-radius: var(--radius-xxl);\n  padding: clamp(2rem, 2rem + 2vw, 3rem);\n}\n.compat__inner[_ngcontent-%COMP%] {\n  margin-inline: auto;\n  text-align: center;\n}\n.compat__inner[_ngcontent-%COMP%]   .section-head__lead[_ngcontent-%COMP%] {\n  margin-inline: auto;\n}\n@media (max-width: 900px) {\n  .download-main__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=download.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DownloadComponent, { className: "DownloadComponent", filePath: "src/app/pages/download/download.component.ts", lineNumber: 16 });
})();
export {
  DownloadComponent
};
//# sourceMappingURL=chunk-DSTBDGDB.js.map
