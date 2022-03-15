import { c as create_ssr_component, d as escape, v as validate_component } from "../../../../chunks/index-167532fe.js";
import "../../../../chunks/appStore-11ae9d39.js";
import { L as Link } from "../../../../chunks/Link-ce1e6dbc.js";
import { B as Button } from "../../../../chunks/Button-d922f2a3.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { T as TextInput } from "../../../../chunks/TextInput-50834e5f.js";
import "../../../../chunks/WarningAltFilled16-391da9e9.js";
const pageName = "Login";
let invalidUsername = false;
let invalidPassword = false;
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let password = "";
  let usernameRef;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Lighthouse - ${escape(pageName)}</title>`, ""}`, ""}

<div><div><img src="${"/img/logo_orig.png"}" alt="${"logo"}" height="${"96"}"></div>
	<div class="${"py-2"}">${validate_component(TextInput, "TextInput").$$render($$result, {
      type: "email",
      invalid: invalidUsername,
      invalidText: "Required: username@fh-swf.de",
      labelText: "Username",
      placeholder: "Enter username...",
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
	<div class="${"py-2"}">${validate_component(TextInput, "TextInput").$$render($$result, {
      type: "password",
      invalid: invalidPassword,
      invalidText: "Required: min length 6 characters",
      labelText: "Password",
      placeholder: "Enter password...",
      value: password
    }, {
      value: ($$value) => {
        password = $$value;
        $$settled = false;
      }
    }, {})}</div>
	<div class="${"py-4"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Log in`;
      }
    })}</div>
	<div class="${"py-2"}">or ${validate_component(Link, "Link").$$render($$result, { href: "/auth/register" }, {}, {
      default: () => {
        return `Register`;
      }
    })}</div>
	<div class="${"py-2"}">${validate_component(Link, "Link").$$render($$result, { href: "/auth/restore" }, {}, {
      default: () => {
        return `Forgot password?`;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Login as default };
