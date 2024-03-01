import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("images/main_logo.svg");
const _imports_1 = "" + publicAssetsURL("images/link_img.svg");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login-layout" }, _attrs))} data-v-1c8c5ad4><div class="login-form" data-v-1c8c5ad4><div class="" data-v-1c8c5ad4><img${ssrRenderAttr("src", _imports_0)} data-v-1c8c5ad4><div class="title" data-v-1c8c5ad4> PR\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u306EID\u3067\u30ED\u30B0\u30A4\u30F3\u3067\u304D\u307E\u3059 </div></div><div class="input-layout" data-v-1c8c5ad4><div class="label-input" data-v-1c8c5ad4><div class="label" data-v-1c8c5ad4>\u30B5\u30D6\u30C9\u30E1\u30A4\u30F3</div><input placeholder="bravesoft" data-v-1c8c5ad4></div><div class="label-input" data-v-1c8c5ad4><div class="label" data-v-1c8c5ad4>\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9</div><input placeholder="cookpit@cookpit.com" data-v-1c8c5ad4></div><div class="label-input" data-v-1c8c5ad4><div class="label" data-v-1c8c5ad4>\u30D1\u30B9\u30EF\u30FC\u30C9</div><input type="password" placeholder="\u30FB\u30FB\u30FB\u30FB\u30FB\u30FB" data-v-1c8c5ad4></div></div><button type="submit" class="btn-submit" data-v-1c8c5ad4>\u30ED\u30B0\u30A4\u30F3</button><div class="d-flex align-items-center link-text" data-v-1c8c5ad4> PR\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u3078 <img${ssrRenderAttr("src", _imports_1)} data-v-1c8c5ad4></div></div></div>`);
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

export { login as default };
//# sourceMappingURL=login-Bgsvk73l.mjs.map
