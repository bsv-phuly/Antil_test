import { u as useHead } from "./index-BabADJUJ.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "@unhead/shared";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "ufo";
import "defu";
import "klona";
import "devalue";
const _imports_0 = "" + __publicAssetsURL("images/main_logo.svg");
const _imports_1 = "" + __publicAssetsURL("images/link_img.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Login",
      meta: [
        { name: "login" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-layout" }, _attrs))} data-v-1c8c5ad4><div class="login-form" data-v-1c8c5ad4><div class="" data-v-1c8c5ad4><img${ssrRenderAttr("src", _imports_0)} data-v-1c8c5ad4><div class="title" data-v-1c8c5ad4> PRマネージャーのIDでログインできます </div></div><div class="input-layout" data-v-1c8c5ad4><div class="label-input" data-v-1c8c5ad4><div class="label" data-v-1c8c5ad4>サブドメイン</div><input placeholder="bravesoft" data-v-1c8c5ad4></div><div class="label-input" data-v-1c8c5ad4><div class="label" data-v-1c8c5ad4>メールアドレス</div><input placeholder="cookpit@cookpit.com" data-v-1c8c5ad4></div><div class="label-input" data-v-1c8c5ad4><div class="label" data-v-1c8c5ad4>パスワード</div><input type="password" placeholder="・・・・・・" data-v-1c8c5ad4></div></div><button type="submit" class="btn-submit" data-v-1c8c5ad4>ログイン</button><div class="d-flex align-items-center link-text" data-v-1c8c5ad4> PRマネージャーへ <img${ssrRenderAttr("src", _imports_1)} data-v-1c8c5ad4></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1c8c5ad4"]]);
export {
  login as default
};
//# sourceMappingURL=login-Bgsvk73l.js.map
