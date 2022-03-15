import { c as create_ssr_component, h as subscribe, l as set_store_value, g as add_attribute, v as validate_component } from "../../../chunks/index-167532fe.js";
import { l as loading } from "../../../chunks/appStore-11ae9d39.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { L as Loading } from "../../../chunks/Loading-30ee4581.js";
import { N as Notification } from "../../../chunks/Notification-50ae5ebb.js";
import { c as config } from "../../../chunks/config-352e7003.js";
import "../../../chunks/global-a1cc3230.js";
import "../../../chunks/Close20-f5e47c95.js";
import "../../../chunks/Button-d922f2a3.js";
async function load({ session }) {
  if (session.authenticated) {
    return { status: 302, redirect: "/" };
  }
  return {};
}
const _layout_reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  set_store_value(loading, $loading = true, $loading);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"auth-bg"}"><div class="${"auth-box p-4 m-auto"}">${slots.default ? slots.default({}) : ``}</div>
	<div class="${"company-logo"}"><a${add_attribute("href", config.companypage, 0)} target="${"_blank"}"><img src="${"/img/company-logo.png"}" alt="${"company-logo"}" height="${"64"}"></a></div>
	${validate_component(Notification, "Notification").$$render($$result, {}, {}, {})}</div>

${validate_component(Loading, "Loading").$$render($$result, { active: $loading }, {
      active: ($$value) => {
        $loading = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  $$unsubscribe_loading();
  return $$rendered;
});
export { _layout_reset as default, load };
