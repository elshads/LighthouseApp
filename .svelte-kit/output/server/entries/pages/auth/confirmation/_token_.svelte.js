import { c as create_ssr_component, a as compute_rest_props, b as spread, f as escape_attribute_value, e as escape_object, h as subscribe, d as escape, v as validate_component } from "../../../../chunks/index-167532fe.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { p as page } from "../../../../chunks/stores-bb58c6e6.js";
const CloudDownload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["tabindex", "fill"]);
  let { tabindex = void 0 } = $$props;
  let { fill = "currentColor" } = $$props;
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: tabindex === "0" ? true : void 0,
    tabindex
  };
  return `<svg${spread([
    { preserveAspectRatio: "xMidYMid meet" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { width: "64" },
    { height: "64" },
    { fill: escape_attribute_value(fill) },
    escape_object(attributes),
    escape_object($$restProps)
  ], {})}><path d="${"M25.189,20.369c3.006,0,5.45-2.448,5.45-5.457c0-2.864-2.228-5.259-5.072-5.454c-0.182-0.013-0.325-0.159-0.335-0.341 c-0.197-3.79-3.322-6.758-7.114-6.758c-2.751,0-5.286,1.616-6.456,4.117c-0.081,0.174-0.287,0.253-0.463,0.18 c-0.864-0.355-1.774-0.535-2.706-0.535c-3.933,0-7.133,3.2-7.133,7.133c0,3.574,2.648,6.631,6.16,7.109 c0.197,0.026,0.335,0.208,0.308,0.405c-0.027,0.196-0.21,0.343-0.406,0.308c-3.867-0.526-6.782-3.89-6.782-7.822 c0-4.33,3.523-7.853,7.853-7.853c0.914,0,1.809,0.157,2.666,0.468c1.346-2.581,4.042-4.23,6.959-4.23 c4.07,0,7.443,3.107,7.811,7.13c3.07,0.368,5.432,3.007,5.432,6.143c-0.001,3.406-2.769,6.178-6.172,6.178 c-0.009,0-0.089-0.004-0.098-0.005c-0.194-0.015-0.372-0.183-0.362-0.378s0.125-0.364,0.338-0.345L25.189,20.369z"}"></path><path d="${"M16 30.509L9.746 24.255 10.254 23.745 15.64 29.131 15.64 13 16.36 13 16.36 29.131 21.745 23.745 22.255 24.255z"}"></path></svg>`;
});
var CloudDownload$1 = CloudDownload;
var _token__svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.success-badge{fill:#42be65;height:54px;width:54px}svg.error-badge{fill:#da1e28;height:54px;width:54px}svg.loading-badge{height:54px;width:54px}",
  map: null
};
const pageName = "Email Confirmation";
const U5Btokenu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>Lighthouse - ${escape(pageName)}</title>`, ""}`, ""}

<div>${`${`<div class="${"py-2"}">${validate_component(CloudDownload$1, "CloudDownload").$$render($$result, { class: "loading-badge" }, {}, {})}</div>
		<div class="${"py-4"}"><div>Checking...</div></div>`}`}
</div>`;
});
export { U5Btokenu5D as default };
