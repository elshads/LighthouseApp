import { c as create_ssr_component, d as escape, v as validate_component } from "../../../../chunks/index-167532fe.js";
import { L as Link } from "../../../../chunks/Link-ce1e6dbc.js";
import { B as Button } from "../../../../chunks/Button-d922f2a3.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { T as TextInput } from "../../../../chunks/TextInput-50834e5f.js";
import "../../../../chunks/appStore-11ae9d39.js";
import "../../../../chunks/WarningAltFilled16-391da9e9.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "svg.success-badge{fill:#42be65;height:54px;width:54px}",
  map: null
};
const pageName = "Send email confirmation";
const Confirmation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let invalidUsername = true;
  let usernameRef;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    invalidUsername = !(username.length > 0 && username.includes("@"));
    $$rendered = `${$$result.head += `${$$result.title = `<title>Lighthouse - ${escape(pageName)}</title>`, ""}`, ""}

<div>${`<div><img src="${"/img/logo_orig.png"}" alt="${"logo"}" height="${"96"}"></div>
		<div class="${"py-2"}">${validate_component(TextInput, "TextInput").$$render($$result, {
      type: "email",
      invalid: invalidUsername,
      invalidText: "Required",
      labelText: "Email",
      placeholder: "Enter email address...",
      value: username,
      ref: usernameRef
    }, {
      value: ($$value) => {
        username = $$value;
        $$settled = false;
      },
      ref: ($$value) => {
        usernameRef = $$value;
        $$settled = false;
      }
    }, {})}</div>
		<div class="${"py-4"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Send confirmation link`;
      }
    })}</div>`}
	<div class="${"py-2"}">${validate_component(Link, "Link").$$render($$result, { href: "/auth/login" }, {}, {
      default: () => {
        return `Login`;
      }
    })} or ${validate_component(Link, "Link").$$render($$result, { href: "/auth/register" }, {}, {
      default: () => {
        return `Register`;
      }
    })}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Confirmation as default };
