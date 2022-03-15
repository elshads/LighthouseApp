import { c as create_ssr_component, h as subscribe, d as escape, v as validate_component } from "../../../chunks/index-167532fe.js";
import { s as session } from "../../../chunks/stores-bb58c6e6.js";
import { l as loading } from "../../../chunks/appStore-11ae9d39.js";
import { T as Tile, B as Breadcrumb, a as BreadcrumbItem } from "../../../chunks/Tile-37411b40.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { D as DataGrid } from "../../../chunks/DataGrid-1157e458.js";
import "../../../chunks/Link-ce1e6dbc.js";
import "../../../chunks/global-a1cc3230.js";
import "../../../chunks/Button-d922f2a3.js";
import "../../../chunks/TrashCan16-9fb72482.js";
import "../../../chunks/ChevronRight16-1783b04e.js";
import "../../../chunks/Close20-f5e47c95.js";
/* empty css                                                               */const pageName = "Lecturers";
const Lecturers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loading;
  let $$unsubscribe_session;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_session = subscribe(session, (value) => value);
  let selectedRows;
  let rows;
  const headers = [
    { key: "name", value: "Name" },
    { key: "email", value: "Email" },
    { key: "status_name", value: "Status" }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Lighthouse - ${escape(pageName)}</title>`, ""}`, ""}

${validate_component(Tile, "Tile").$$render($$result, { class: "tile" }, {}, {
      default: () => {
        return `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { noTrailingSlash: true }, {}, {
          default: () => {
            return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
              default: () => {
                return `Home`;
              }
            })}
		${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/lecturers", isCurrentPage: true }, {}, {
              default: () => {
                return `${escape(pageName)}`;
              }
            })}`;
          }
        })}`;
      }
    })}


${validate_component(DataGrid, "DataGrid").$$render($$result, {
      headers,
      searchKeys: ["name", "email"],
      tableClass: "lecturers-table",
      linkColumn: "1",
      addVisible: true,
      deleteVisible: true,
      rows,
      selectedRows
    }, {
      rows: ($$value) => {
        rows = $$value;
        $$settled = false;
      },
      selectedRows: ($$value) => {
        selectedRows = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  $$unsubscribe_loading();
  $$unsubscribe_session();
  return $$rendered;
});
export { Lecturers as default };
