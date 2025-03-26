"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const userScore = common_vendor.ref(0);
    const maskState = common_vendor.ref(true);
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const infoPop = common_vendor.ref(null);
    const clickInfo = () => {
      infoPop.value.open();
    };
    const clickInfoClose = () => {
      infoPop.value.close();
    };
    const scorePop = common_vendor.ref(null);
    const clickScore = () => {
      scorePop.value.open();
    };
    const clickScoreClose = () => {
      scorePop.value.close();
    };
    const submitScore = () => {
      scorePop.value.close();
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:149", "已评分～");
    };
    const goBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$3,
        c: common_vendor.o(maskChange),
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "back",
          size: "20"
        }),
        f: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        g: common_vendor.o(goBack),
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        i: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        j: common_vendor.o(clickInfo),
        k: common_vendor.p({
          type: "info",
          size: "24",
          color: "#28b389"
        }),
        l: common_vendor.o(clickScore),
        m: common_vendor.p({
          type: "star-filled",
          size: "24",
          color: "#28b389"
        }),
        n: common_vendor.p({
          type: "download-filled",
          size: "24",
          color: "#28b389"
        })
      } : {}, {
        o: common_vendor.o(clickInfoClose),
        p: common_vendor.p({
          type: "close",
          size: "18",
          color: "#999"
        }),
        q: common_vendor.p({
          readonly: true,
          value: "5",
          touchable: "false"
        }),
        r: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        s: common_vendor.sr(infoPop, "2dad6c07-6", {
          "k": "infoPop"
        }),
        t: common_vendor.p({
          type: "bottom"
        }),
        v: common_vendor.o(clickScoreClose),
        w: common_vendor.p({
          type: "close",
          size: "18",
          color: "#999"
        }),
        x: common_vendor.o(($event) => userScore.value = $event),
        y: common_vendor.p({
          ["allow-half"]: true,
          modelValue: userScore.value
        }),
        z: common_vendor.t(userScore.value),
        A: !userScore.value,
        B: common_vendor.o(submitScore),
        C: common_vendor.sr(scorePop, "2dad6c07-9", {
          "k": "scorePop"
        }),
        D: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
