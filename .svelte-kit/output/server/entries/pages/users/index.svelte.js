import { c as create_ssr_component, h as subscribe, d as escape, v as validate_component } from "../../../chunks/index-167532fe.js";
import { l as loading } from "../../../chunks/appStore-11ae9d39.js";
import { T as Tile, B as Breadcrumb, a as BreadcrumbItem } from "../../../chunks/Tile-37411b40.js";
import { B as Button } from "../../../chunks/Button-d922f2a3.js";
import { D as DataTable, T as Toolbar, a as ToolbarBatchActions, E as Export16, b as TrashCan16, c as ToolbarContent, d as ToolbarSearch, e as ToolbarMenu, f as ToolbarMenuItem } from "../../../chunks/TrashCan16-9fb72482.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { L as Link } from "../../../chunks/Link-ce1e6dbc.js";
import { s as session } from "../../../chunks/stores-bb58c6e6.js";
import "../../../chunks/ChevronRight16-1783b04e.js";
import "../../../chunks/Close20-f5e47c95.js";
const pageName = "Users";
let linkColumn = 1;
let link = "/users/";
const Users = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loading;
  let $$unsubscribe_session;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_session = subscribe(session, (value) => value);
  let selectedRowIds;
  let searchValue = "";
  let rows = [];
  let initialRows = [];
  const headers = [
    { key: "username", value: "Email" },
    { key: "fullname", value: "Name" },
    {
      key: "matriculation_no",
      value: "Matr. No"
    },
    {
      key: "email_confirmed",
      value: "Confirmed"
    },
    { key: "rolename", value: "Role" },
    { key: "statusname", value: "Status" }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    initialRows.filter(function(f) {
      return selectedRowIds.indexOf(f.id) > -1;
    });
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
		${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/users", isCurrentPage: true }, {}, {
              default: () => {
                return `Users`;
              }
            })}`;
          }
        })}`;
      }
    })}

<div class="${"users-table"}">${validate_component(DataTable, "DataTable").$$render($$result, {
      stickyHeader: true,
      sortable: true,
      batchSelection: true,
      headers,
      rows,
      selectedRowIds
    }, {
      selectedRowIds: ($$value) => {
        selectedRowIds = $$value;
        $$settled = false;
      }
    }, {
      cell: ({ row, cell }) => {
        return `${cell.key === headers[linkColumn].key ? `${validate_component(Link, "Link").$$render($$result, { href: link + row.id }, {}, {
          default: () => {
            return `${escape(cell.value)}`;
          }
        })}` : `${escape(cell.value)}`}
		`;
      },
      default: () => {
        return `${validate_component(Toolbar, "Toolbar").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(ToolbarBatchActions, "ToolbarBatchActions").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Button, "Button").$$render($$result, { icon: Export16 }, {}, {
                  default: () => {
                    return `Export selected`;
                  }
                })}
				${validate_component(Button, "Button").$$render($$result, { icon: TrashCan16 }, {}, {
                  default: () => {
                    return `Delete`;
                  }
                })}`;
              }
            })}
			${validate_component(ToolbarContent, "ToolbarContent").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(ToolbarSearch, "ToolbarSearch").$$render($$result, { value: searchValue }, {}, {})}
				${validate_component(ToolbarMenu, "ToolbarMenu").$$render($$result, { icon: Export16 }, {}, {
                  default: () => {
                    return `${validate_component(ToolbarMenuItem, "ToolbarMenuItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `.csv - All rows`;
                      }
                    })}
					${validate_component(ToolbarMenuItem, "ToolbarMenuItem").$$render($$result, {}, {}, {
                      default: () => {
                        return `.csv - Filtered rows`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_loading();
  $$unsubscribe_session();
  return $$rendered;
});
export { Users as default };
