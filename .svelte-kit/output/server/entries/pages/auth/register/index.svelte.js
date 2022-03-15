import { c as create_ssr_component, d as escape, v as validate_component } from "../../../../chunks/index-167532fe.js";
import { c as config } from "../../../../chunks/config-352e7003.js";
import "../../../../chunks/appStore-11ae9d39.js";
import { L as Link } from "../../../../chunks/Link-ce1e6dbc.js";
import { B as Button } from "../../../../chunks/Button-d922f2a3.js";
import "../../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { T as TextInput } from "../../../../chunks/TextInput-50834e5f.js";
import "../../../../chunks/WarningAltFilled16-391da9e9.js";
const pageName = "Register";
const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let fullname = "";
  let password = "";
  let password_confirm = "";
  let invalidUsername = false;
  let invalidFullname = false;
  let invalidPassword = false;
  let invalidPasswordConfirmation = false;
  let fullnameRef;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    invalidUsername = !(username.length > 0 && (username.includes("@" + config.accepteddomain) || config.accepteddomain === "*"));
    invalidFullname = fullname.length < 1;
    invalidPassword = password.length < 6;
    invalidPasswordConfirmation = password != password_confirm;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Lighthouse - ${escape(pageName)}</title>`, ""}`, ""}

<div><div><img src="${"/img/logo_orig.png"}" alt="${"logo"}" height="${"64"}"></div>
	<div class="${"py-2"}">${validate_component(TextInput, "TextInput").$$render($$result, {
      type: "text",
      invalid: invalidFullname,
      invalidText: "Required",
      labelText: "Full name",
      placeholder: "Enter your name...",
      value: fullname,
      ref: fullnameRef
    }, {
      value: ($$value) => {
        fullname = $$value;
        $$settled = false;
      },
      ref: ($$value) => {
        fullnameRef = $$value;
        $$settled = false;
      }
    }, {})}</div>
	<div class="${"py-2"}">${validate_component(TextInput, "TextInput").$$render($$result, {
      type: "email",
      invalid: invalidUsername,
      invalidText: "Required: username@fh-swf.de",
      labelText: "Username",
      placeholder: "Enter username...",
      value: username
    }, {
      value: ($$value) => {
        username = $$value;
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
	<div class="${"py-2"}">${validate_component(TextInput, "TextInput").$$render($$result, {
      type: "password",
      invalid: invalidPasswordConfirmation,
      invalidText: "password does not match",
      labelText: "Password Confirmation",
      placeholder: "Confirm password...",
      value: password_confirm
    }, {
      value: ($$value) => {
        password_confirm = $$value;
        $$settled = false;
      }
    }, {})}</div>
	<div class="${"py-4"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Register`;
      }
    })}</div>
	<div class="${"py-2"}">Already registered?
		<div class="${"py-2"}">${validate_component(Link, "Link").$$render($$result, { href: "/auth/login" }, {}, {
      default: () => {
        return `Log in`;
      }
    })}</div>
		<div>or ${validate_component(Link, "Link").$$render($$result, { href: "/auth/confirmation" }, {}, {
      default: () => {
        return `Resend confirmation link`;
      }
    })}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Register as default };
