import { c as create_ssr_component, b as spread, f as escape_attribute_value, e as escape_object, d as escape, j as createEventDispatcher, u as null_to_empty, v as validate_component } from "./index-167532fe.js";
import { f as formatDateTime } from "./global-a1cc3230.js";
import { L as Link } from "./Link-ce1e6dbc.js";
import { B as Button } from "./Button-d922f2a3.js";
import { D as DataTable, T as Toolbar, a as ToolbarBatchActions, E as Export16, b as TrashCan16, c as ToolbarContent, d as ToolbarSearch, e as ToolbarMenu, f as ToolbarMenuItem } from "./TrashCan16-9fb72482.js";
import "./HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import "./appStore-11ae9d39.js";
/* empty css                                                 */const Add16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let ariaLabelledBy;
  let labelled;
  let attributes;
  let { class: className = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { tabindex = void 0 } = $$props;
  let { focusable = false } = $$props;
  let { title = void 0 } = $$props;
  let { style = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.focusable === void 0 && $$bindings.focusable && focusable !== void 0)
    $$bindings.focusable(focusable);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  ariaLabel = $$props["aria-label"];
  ariaLabelledBy = $$props["aria-labelledby"];
  labelled = ariaLabel || ariaLabelledBy || title;
  attributes = {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: tabindex === "0" ? true : focusable,
    tabindex
  };
  return `
<svg${spread([
    { "data-carbon-icon": "Add16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Add16$1 = Add16;
const css = {
  code: ".link-button.svelte-whc2ao{align-items:center;padding:0;border:0;appearance:none;background:none;cursor:pointer;width:100%;height:100%}.bx--link.svelte-whc2ao:active,.bx--link.svelte-whc2ao:active:visited,.bx--link.svelte-whc2ao:active:visited:hover{color:var(--cds-text-01, #161616);text-decoration:none}.bx--link.svelte-whc2ao:focus{outline:none}",
  map: null
};
const DataGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedRowIds = [] } = $$props;
  let { selectedRows = [] } = $$props;
  let { rows = [] } = $$props;
  let { headers } = $$props;
  let { size = "medium" } = $$props;
  let { tableClass = "data-table" } = $$props;
  let { linkColumn = -1 } = $$props;
  let { link = null } = $$props;
  let { searchKeys = ["name"] } = $$props;
  let { exportVisible = true } = $$props;
  let { addVisible = false } = $$props;
  let { deleteVisible = false } = $$props;
  createEventDispatcher();
  let initialRows = [];
  let searchValue = "";
  if ($$props.selectedRowIds === void 0 && $$bindings.selectedRowIds && selectedRowIds !== void 0)
    $$bindings.selectedRowIds(selectedRowIds);
  if ($$props.selectedRows === void 0 && $$bindings.selectedRows && selectedRows !== void 0)
    $$bindings.selectedRows(selectedRows);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.tableClass === void 0 && $$bindings.tableClass && tableClass !== void 0)
    $$bindings.tableClass(tableClass);
  if ($$props.linkColumn === void 0 && $$bindings.linkColumn && linkColumn !== void 0)
    $$bindings.linkColumn(linkColumn);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.searchKeys === void 0 && $$bindings.searchKeys && searchKeys !== void 0)
    $$bindings.searchKeys(searchKeys);
  if ($$props.exportVisible === void 0 && $$bindings.exportVisible && exportVisible !== void 0)
    $$bindings.exportVisible(exportVisible);
  if ($$props.addVisible === void 0 && $$bindings.addVisible && addVisible !== void 0)
    $$bindings.addVisible(addVisible);
  if ($$props.deleteVisible === void 0 && $$bindings.deleteVisible && deleteVisible !== void 0)
    $$bindings.deleteVisible(deleteVisible);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        initialRows = rows.slice();
      }
    }
    {
      if (initialRows.length > 0) {
        selectedRows = initialRows.filter(function(f) {
          return selectedRowIds.indexOf(f.id) > -1;
        });
      }
    }
    $$rendered = `<div class="${escape(null_to_empty(tableClass)) + " svelte-whc2ao"}">${validate_component(DataTable, "DataTable").$$render($$result, {
      stickyHeader: true,
      sortable: true,
      batchSelection: true,
      headers,
      size,
      selectedRowIds,
      rows
    }, {
      selectedRowIds: ($$value) => {
        selectedRowIds = $$value;
        $$settled = false;
      },
      rows: ($$value) => {
        rows = $$value;
        $$settled = false;
      }
    }, {
      cell: ({ row, cell }) => {
        return `${headers && linkColumn > -1 && linkColumn <= headers.length && cell.key === headers[linkColumn - 1].key ? `${link !== null ? `${validate_component(Link, "Link").$$render($$result, { href: link + row.id }, {}, {
          default: () => {
            return `${escape(cell.value)}`;
          }
        })}` : `<button class="${"bx--link link-button svelte-whc2ao"}">${escape(cell.value)}</button>`}` : `${cell.key === "session_start" ? `${escape(formatDateTime(new Date(cell.value)))}` : `${escape(cell.value)}`}`}
		`;
      },
      default: () => {
        return `${validate_component(Toolbar, "Toolbar").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(ToolbarBatchActions, "ToolbarBatchActions").$$render($$result, {}, {}, {
              default: () => {
                return `${exportVisible === true ? `${validate_component(Button, "Button").$$render($$result, { icon: Export16 }, {}, {
                  default: () => {
                    return `Export selected`;
                  }
                })}` : ``}
				${deleteVisible === true ? `${validate_component(Button, "Button").$$render($$result, { icon: TrashCan16 }, {}, {
                  default: () => {
                    return `Delete`;
                  }
                })}` : ``}`;
              }
            })}
			${validate_component(ToolbarContent, "ToolbarContent").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"toolbar-item"}"><div>Rows: ${escape(rows.length)}</div></div>
				${validate_component(ToolbarSearch, "ToolbarSearch").$$render($$result, { value: searchValue }, {}, {})}
				${exportVisible === true ? `${validate_component(ToolbarMenu, "ToolbarMenu").$$render($$result, { icon: Export16 }, {}, {
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
                })}` : ``}
				${addVisible === true ? `${validate_component(Button, "Button").$$render($$result, { icon: Add16$1 }, {}, {
                  default: () => {
                    return `Add`;
                  }
                })}` : ``}`;
              }
            })}`;
          }
        })}`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { DataGrid as D };
