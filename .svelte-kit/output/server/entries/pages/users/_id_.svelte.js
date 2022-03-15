import { c as create_ssr_component, d as escape, v as validate_component } from "../../../chunks/index-167532fe.js";
import { T as Tile, B as Breadcrumb, a as BreadcrumbItem } from "../../../chunks/Tile-37411b40.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import "../../../chunks/Link-ce1e6dbc.js";
const pageName = "User";
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Lighthouse - ${escape(pageName)}</title>`, ""}`, ""}

${validate_component(Tile, "Tile").$$render($$result, { class: "tile" }, {}, {
    default: () => {
      return `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { noTrailingSlash: true }, {}, {
        default: () => {
          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `Home`;
            }
          })}
		${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/users" }, {}, {
            default: () => {
              return `Users`;
            }
          })}
		${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/users/[id]", isCurrentPage: true }, {}, {
            default: () => {
              return `User`;
            }
          })}`;
        }
      })}`;
    }
  })}

<div>User card</div>`;
});
export { U5Bidu5D as default };
