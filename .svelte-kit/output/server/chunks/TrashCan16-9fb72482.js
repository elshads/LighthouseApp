import { c as create_ssr_component, a as compute_rest_props, b as spread, f as escape_attribute_value, e as escape_object, g as add_attribute, i as add_classes, d as escape, t as compute_slots, n as getContext, h as subscribe, v as validate_component, j as createEventDispatcher, s as setContext, k as each, m as missing_component } from "./index-167532fe.js";
import { w as writable, d as derived } from "./HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { C as ChevronRight16 } from "./ChevronRight16-1783b04e.js";
import { C as Close20 } from "./Close20-f5e47c95.js";
import { B as Button } from "./Button-d922f2a3.js";
const InlineCheckbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["checked", "indeterminate", "title", "id", "ref"]);
  let { checked = false } = $$props;
  let { indeterminate = false } = $$props;
  let { title = void 0 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<input${spread([
    { type: "checkbox" },
    {
      checked: (indeterminate ? false : checked) || null
    },
    {
      indeterminate: escape_attribute_value(indeterminate)
    },
    { id: escape_attribute_value(id) },
    escape_object($$restProps),
    {
      "aria-label": escape_attribute_value(void 0)
    },
    {
      "aria-checked": escape_attribute_value(indeterminate ? "mixed" : checked)
    }
  ], { classes: "bx--checkbox" })}${add_attribute("this", ref, 0)}>
<label${add_attribute("for", id, 0)}${add_attribute("title", title, 0)}${add_attribute("aria-label", $$props["aria-label"], 0)}${add_classes("bx--checkbox-label".trim())}></label>`;
});
const Close16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Close16" },
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
  ], {})}><path d="${"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const RadioButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "value",
    "checked",
    "disabled",
    "required",
    "labelPosition",
    "labelText",
    "hideLabel",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let $selectedValue, $$unsubscribe_selectedValue;
  let { value = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { required = false } = $$props;
  let { labelPosition = "right" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = "" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("RadioButtonGroup");
  const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : void 0);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value2) => $selectedValue = value2);
  if (ctx) {
    ctx.add({ id, checked, disabled, value });
  }
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.labelPosition === void 0 && $$bindings.labelPosition && labelPosition !== void 0)
    $$bindings.labelPosition(labelPosition);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  checked = $selectedValue === value;
  $$unsubscribe_selectedValue();
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--radio-button-wrapper " + (labelPosition === "left" ? "bx--radio-button-wrapper--label-left" : "")
  })}><input type="${"radio"}"${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("value", value, 0)}${add_classes("bx--radio-button".trim())}${add_attribute("this", ref, 0)}>
  <label${add_attribute("for", id, 0)}${add_classes("bx--radio-button__label".trim())}><span${add_classes("bx--radio-button__appearance".trim())}></span>
    ${labelText || $$slots.labelText ? `<span${add_classes((hideLabel ? "bx--visually-hidden" : "").trim())}>${slots.labelText ? slots.labelText({}) : `
          ${escape(labelText)}
        `}</span>` : ``}</label></div>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "zebra", "useStaticWidth", "shouldShowBorder", "sortable", "stickyHeader"]);
  let { size = void 0 } = $$props;
  let { zebra = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { shouldShowBorder = false } = $$props;
  let { sortable = false } = $$props;
  let { stickyHeader = false } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  if ($$props.shouldShowBorder === void 0 && $$bindings.shouldShowBorder && shouldShowBorder !== void 0)
    $$bindings.shouldShowBorder(shouldShowBorder);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  return `${stickyHeader ? `<section${spread([escape_object($$restProps)], {
    classes: "bx--data-table_inner-container"
  })}><table${add_classes(("bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (size === "medium" ? "bx--data-table--md" : "") + " " + (sortable ? "bx--data-table--sort" : "") + " " + (zebra ? "bx--data-table--zebra" : "") + " " + (useStaticWidth ? "bx--data-table--static" : "") + " " + (!shouldShowBorder ? "bx--data-table--no-border" : "") + " " + (stickyHeader ? "bx--data-table--sticky-header" : "")).trim())}>${slots.default ? slots.default({}) : ``}</table></section>` : `<table${spread([escape_object($$restProps)], {
    classes: "bx--data-table " + (size === "compact" ? "bx--data-table--compact" : "") + " " + (size === "short" ? "bx--data-table--short" : "") + " " + (size === "tall" ? "bx--data-table--tall" : "") + " " + (size === "medium" ? "bx--data-table--md" : "") + " " + (sortable ? "bx--data-table--sort" : "") + " " + (zebra ? "bx--data-table--zebra" : "") + " " + (useStaticWidth ? "bx--data-table--static" : "") + " " + (!shouldShowBorder ? "bx--data-table--no-border" : "") + " " + (stickyHeader ? "bx--data-table--sticky-header" : "")
  })}>${slots.default ? slots.default({}) : ``}</table>`}`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<tbody${spread([{ "aria-live": "polite" }, escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</tbody>`;
});
const TableCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<td${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</td>`;
});
const TableContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["title", "description", "stickyHeader", "useStaticWidth"]);
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  return `<div${spread([escape_object($$restProps)], {
    classes: "bx--data-table-container " + (useStaticWidth ? "bx--data-table-container--static" : "") + " " + (stickyHeader ? "bx--data-table--max-width" : "")
  })}>${title ? `<div${add_classes("bx--data-table-header".trim())}><h4${add_classes("bx--data-table-header__title".trim())}>${escape(title)}</h4>
      <p${add_classes("bx--data-table-header__description".trim())}>${escape(description)}</p></div>` : ``}
  ${slots.default ? slots.default({}) : ``}</div>`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<thead${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</thead>`;
});
const ArrowUp20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "ArrowUp20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M16 4L6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const ArrowsVertical20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "ArrowsVertical20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 32 32" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M27.6 20.6L24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22zM9 4L3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, ["disableSorting", "scope", "translateWithId", "id"]);
  let $sortHeader, $$unsubscribe_sortHeader;
  let $tableSortable, $$unsubscribe_tableSortable;
  let { disableSorting = false } = $$props;
  let { scope = "col" } = $$props;
  let { translateWithId = () => "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  const { sortHeader, tableSortable, add } = getContext("DataTable");
  $$unsubscribe_sortHeader = subscribe(sortHeader, (value) => $sortHeader = value);
  $$unsubscribe_tableSortable = subscribe(tableSortable, (value) => $tableSortable = value);
  add(id);
  if ($$props.disableSorting === void 0 && $$bindings.disableSorting && disableSorting !== void 0)
    $$bindings.disableSorting(disableSorting);
  if ($$props.scope === void 0 && $$bindings.scope && scope !== void 0)
    $$bindings.scope(scope);
  if ($$props.translateWithId === void 0 && $$bindings.translateWithId && translateWithId !== void 0)
    $$bindings.translateWithId(translateWithId);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  active = $sortHeader.id === id;
  ariaLabel = translateWithId();
  $$unsubscribe_sortHeader();
  $$unsubscribe_tableSortable();
  return `
${$tableSortable && !disableSorting ? `<th${spread([
    {
      "aria-sort": escape_attribute_value(active ? $sortHeader.sortDirection : "none")
    },
    { scope: escape_attribute_value(scope) },
    { id: escape_attribute_value(id) },
    escape_object($$restProps)
  ], {})}><button${add_classes(("bx--table-sort " + (active ? "bx--table-sort--active" : "") + " " + (active && $sortHeader.sortDirection === "descending" ? "bx--table-sort--ascending" : "")).trim())}><div${add_classes("bx--table-header-label".trim())}>${slots.default ? slots.default({}) : ``}</div>
      ${validate_component(ArrowUp20, "ArrowUp20").$$render($$result, {
    "aria-label": ariaLabel,
    class: "bx--table-sort__icon"
  }, {}, {})}
      ${validate_component(ArrowsVertical20, "ArrowsVertical20").$$render($$result, {
    "aria-label": ariaLabel,
    class: "bx--table-sort__icon-unsorted"
  }, {}, {})}</button></th>` : `<th${spread([
    { scope: escape_attribute_value(scope) },
    { id: escape_attribute_value(id) },
    escape_object($$restProps)
  ], {})}><div${add_classes("bx--table-header-label".trim())}>${slots.default ? slots.default({}) : ``}</div></th>`}`;
});
const TableRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `
<tr${spread([escape_object($$restProps)], {})}>${slots.default ? slots.default({}) : ``}</tr>`;
});
const DataTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expandedRows;
  let expandableRowIds;
  let indeterminate;
  let headerKeys;
  let sortedRows;
  let ascending;
  let sortKey;
  let sorting;
  let displayedRows;
  let displayedSortedRows;
  let $$restProps = compute_rest_props($$props, [
    "headers",
    "rows",
    "size",
    "title",
    "description",
    "zebra",
    "sortable",
    "expandable",
    "batchExpansion",
    "expandedRowIds",
    "nonExpandableRowIds",
    "radio",
    "selectable",
    "batchSelection",
    "selectedRowIds",
    "stickyHeader",
    "useStaticWidth",
    "pageSize",
    "page"
  ]);
  let $$slots = compute_slots(slots);
  let $sortHeader, $$unsubscribe_sortHeader;
  let $headerItems, $$unsubscribe_headerItems;
  let $$unsubscribe_thKeys;
  let { headers = [] } = $$props;
  let { rows = [] } = $$props;
  let { size = void 0 } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { zebra = false } = $$props;
  let { sortable = false } = $$props;
  let { expandable = false } = $$props;
  let { batchExpansion = false } = $$props;
  let { expandedRowIds = [] } = $$props;
  let { nonExpandableRowIds = [] } = $$props;
  let { radio = false } = $$props;
  let { selectable = false } = $$props;
  let { batchSelection = false } = $$props;
  let { selectedRowIds = [] } = $$props;
  let { stickyHeader = false } = $$props;
  let { useStaticWidth = false } = $$props;
  let { pageSize = 0 } = $$props;
  let { page = 0 } = $$props;
  createEventDispatcher();
  const batchSelectedIds = writable(false);
  const tableSortable = writable(sortable);
  const sortHeader = writable({
    id: null,
    key: null,
    sort: void 0,
    sortDirection: "none"
  });
  $$unsubscribe_sortHeader = subscribe(sortHeader, (value) => $sortHeader = value);
  const headerItems = writable([]);
  $$unsubscribe_headerItems = subscribe(headerItems, (value) => $headerItems = value);
  const thKeys = derived(headerItems, () => headers.map(({ key }, i) => ({ key, id: $headerItems[i] })).reduce((a, c) => ({ ...a, [c.key]: c.id }), {}));
  $$unsubscribe_thKeys = subscribe(thKeys, (value) => value);
  const resolvePath = (object, path) => path.split(/[\.\[\]\'\"]/).filter((p) => p).reduce((o, p) => o && typeof o === "object" ? o[p] : o, object);
  setContext("DataTable", {
    sortHeader,
    tableSortable,
    batchSelectedIds,
    resetSelectedRowIds: () => {
      selectAll = false;
      selectedRowIds = [];
      if (refSelectAll)
        refSelectAll.checked = false;
    },
    add: (id) => {
      headerItems.update((_) => [..._, id]);
    }
  });
  let expanded = false;
  let parentRowId = null;
  let selectAll = false;
  let refSelectAll = null;
  const getDisplayedRows = (rows2, page2, pageSize2) => page2 && pageSize2 ? rows2.slice((page2 - 1) * pageSize2, page2 * pageSize2) : rows2;
  if ($$props.headers === void 0 && $$bindings.headers && headers !== void 0)
    $$bindings.headers(headers);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.zebra === void 0 && $$bindings.zebra && zebra !== void 0)
    $$bindings.zebra(zebra);
  if ($$props.sortable === void 0 && $$bindings.sortable && sortable !== void 0)
    $$bindings.sortable(sortable);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.batchExpansion === void 0 && $$bindings.batchExpansion && batchExpansion !== void 0)
    $$bindings.batchExpansion(batchExpansion);
  if ($$props.expandedRowIds === void 0 && $$bindings.expandedRowIds && expandedRowIds !== void 0)
    $$bindings.expandedRowIds(expandedRowIds);
  if ($$props.nonExpandableRowIds === void 0 && $$bindings.nonExpandableRowIds && nonExpandableRowIds !== void 0)
    $$bindings.nonExpandableRowIds(nonExpandableRowIds);
  if ($$props.radio === void 0 && $$bindings.radio && radio !== void 0)
    $$bindings.radio(radio);
  if ($$props.selectable === void 0 && $$bindings.selectable && selectable !== void 0)
    $$bindings.selectable(selectable);
  if ($$props.batchSelection === void 0 && $$bindings.batchSelection && batchSelection !== void 0)
    $$bindings.batchSelection(batchSelection);
  if ($$props.selectedRowIds === void 0 && $$bindings.selectedRowIds && selectedRowIds !== void 0)
    $$bindings.selectedRowIds(selectedRowIds);
  if ($$props.stickyHeader === void 0 && $$bindings.stickyHeader && stickyHeader !== void 0)
    $$bindings.stickyHeader(stickyHeader);
  if ($$props.useStaticWidth === void 0 && $$bindings.useStaticWidth && useStaticWidth !== void 0)
    $$bindings.useStaticWidth(useStaticWidth);
  if ($$props.pageSize === void 0 && $$bindings.pageSize && pageSize !== void 0)
    $$bindings.pageSize(pageSize);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    expandedRows = expandedRowIds.reduce((a, id) => ({ ...a, [id]: true }), {});
    {
      batchSelectedIds.set(selectedRowIds);
    }
    headerKeys = headers.map(({ key }) => key);
    rows = rows.map((row) => ({
      ...row,
      cells: headerKeys.map((key, index) => ({
        key,
        value: resolvePath(row, key),
        display: headers[index].display
      }))
    }));
    expandableRowIds = rows.map((row) => row.id).filter((id) => !nonExpandableRowIds.includes(id));
    indeterminate = selectedRowIds.length > 0 && selectedRowIds.length < rows.length;
    {
      if (batchExpansion) {
        expandable = true;
        expanded = expandedRowIds.length === expandableRowIds.length;
      }
    }
    {
      if (radio || batchSelection)
        selectable = true;
    }
    {
      tableSortable.set(sortable);
    }
    sortedRows = rows;
    ascending = $sortHeader.sortDirection === "ascending";
    sortKey = $sortHeader.key;
    sorting = sortable && sortKey != null;
    {
      if (sorting) {
        if ($sortHeader.sortDirection === "none") {
          sortedRows = rows;
        } else {
          sortedRows = [...rows].sort((a, b) => {
            const itemA = ascending ? resolvePath(a, sortKey) : resolvePath(b, sortKey);
            const itemB = ascending ? resolvePath(b, sortKey) : resolvePath(a, sortKey);
            if ($sortHeader.sort)
              return $sortHeader.sort(itemA, itemB);
            if (typeof itemA === "number" && typeof itemB === "number")
              return itemA - itemB;
            if ([itemA, itemB].every((item) => !item && item !== 0))
              return 0;
            if (!itemA && itemA !== 0)
              return ascending ? 1 : -1;
            if (!itemB && itemB !== 0)
              return ascending ? -1 : 1;
            return itemA.toString().localeCompare(itemB.toString(), "en", { numeric: true });
          });
        }
      }
    }
    displayedRows = getDisplayedRows(rows, page, pageSize);
    displayedSortedRows = getDisplayedRows(sortedRows, page, pageSize);
    $$rendered = `${validate_component(TableContainer, "TableContainer").$$render($$result, Object.assign({ useStaticWidth }, $$restProps), {}, {
      default: () => {
        return `${title || $$slots.title || description || $$slots.description ? `<div${add_classes("bx--data-table-header".trim())}>${title || $$slots.title ? `<h4${add_classes("bx--data-table-header__title".trim())}>${slots.title ? slots.title({}) : `${escape(title)}`}</h4>` : ``}
      ${description || $$slots.description ? `<p${add_classes("bx--data-table-header__description".trim())}>${slots.description ? slots.description({}) : `${escape(description)}`}</p>` : ``}</div>` : ``}
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Table, "Table").$$render($$result, {
          zebra,
          size,
          stickyHeader,
          sortable,
          useStaticWidth
        }, {}, {
          default: () => {
            return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableRow, "TableRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${expandable ? `<th scope="${"col"}"${add_attribute("data-previous-value", expanded ? "collapsed" : void 0, 0)}${add_classes("bx--table-expand".trim())}>${batchExpansion ? `<button type="${"button"}"${add_classes("bx--table-expand__button".trim())}>${validate_component(ChevronRight16, "ChevronRight16").$$render($$result, { class: "bx--table-expand__svg" }, {}, {})}</button>` : ``}</th>` : ``}
        ${selectable && !batchSelection ? `<th scope="${"col"}"></th>` : ``}
        ${batchSelection && !radio ? `<th scope="${"col"}"${add_classes("bx--table-column-checkbox".trim())}>${validate_component(InlineCheckbox, "InlineCheckbox").$$render($$result, {
                      "aria-label": "Select all rows",
                      checked: selectAll,
                      indeterminate,
                      ref: refSelectAll
                    }, {
                      ref: ($$value) => {
                        refSelectAll = $$value;
                        $$settled = false;
                      }
                    }, {})}</th>` : ``}
        ${each(headers, (header, i) => {
                      return `${header.empty ? `<th scope="${"col"}"></th>` : `${validate_component(TableHeader, "TableHeader").$$render($$result, { disableSorting: header.sort === false }, {}, {
                        default: () => {
                          return `${slots["cell-header"] ? slots["cell-header"]({ header }) : `${escape(header.value)}`}
            `;
                        }
                      })}`}`;
                    })}`;
                  }
                })}`;
              }
            })}
    ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
              default: () => {
                return `${each(sorting ? displayedSortedRows : displayedRows, (row, i) => {
                  return `${validate_component(TableRow, "TableRow").$$render($$result, {
                    id: "row-" + row.id,
                    class: (selectedRowIds.includes(row.id) ? "bx--data-table--selected" : "") + " " + (expandedRows[row.id] ? "bx--expandable-row" : "") + " " + (expandable ? "bx--parent-row" : "") + " " + (expandable && parentRowId === row.id ? "bx--expandable-row--hover" : "")
                  }, {}, {
                    default: () => {
                      return `${expandable ? `${validate_component(TableCell, "TableCell").$$render($$result, {
                        class: "bx--table-expand",
                        headers: "expand",
                        "data-previous-value": !nonExpandableRowIds.includes(row.id) && expandedRows[row.id] ? "collapsed" : void 0
                      }, {}, {
                        default: () => {
                          return `${!nonExpandableRowIds.includes(row.id) ? `<button type="${"button"}"${add_attribute("aria-label", expandedRows[row.id] ? "Collapse current row" : "Expand current row", 0)}${add_classes("bx--table-expand__button".trim())}>${validate_component(ChevronRight16, "ChevronRight16").$$render($$result, { class: "bx--table-expand__svg" }, {}, {})}
                </button>` : ``}
            `;
                        }
                      })}` : ``}
          ${selectable ? `<td${add_classes(("bx--table-column-checkbox " + (radio ? "bx--table-column-radio" : "")).trim())}>${radio ? `${validate_component(RadioButton, "RadioButton").$$render($$result, {
                        name: "select-row-" + row.id,
                        checked: selectedRowIds.includes(row.id)
                      }, {}, {})}` : `${validate_component(InlineCheckbox, "InlineCheckbox").$$render($$result, {
                        name: "select-row-" + row.id,
                        checked: selectedRowIds.includes(row.id)
                      }, {}, {})}`}
            </td>` : ``}
          ${each(row.cells, (cell, j) => {
                        return `${headers[j].empty ? `<td${add_classes((headers[j].columnMenu ? "bx--table-column-menu" : "").trim())}>${slots.cell ? slots.cell({ row, cell }) : `
                  ${escape(cell.display ? cell.display(cell.value) : cell.value)}
                `}
              </td>` : `${validate_component(TableCell, "TableCell").$$render($$result, {}, {}, {
                          default: () => {
                            return `${slots.cell ? slots.cell({ row, cell }) : `
                  ${escape(cell.display ? cell.display(cell.value) : cell.value)}
                `}
              `;
                          }
                        })}`}`;
                      })}
        `;
                    }
                  })}

        ${expandable && expandedRows[row.id] && !nonExpandableRowIds.includes(row.id) ? `<tr data-child-row${add_classes("bx--expandable-row".trim())}>${validate_component(TableCell, "TableCell").$$render($$result, {
                    colspan: selectable ? headers.length + 2 : headers.length + 1
                  }, {}, {
                    default: () => {
                      return `<div${add_classes("bx--child-row-inner-container".trim())}>${slots["expanded-row"] ? slots["expanded-row"]({ row }) : ``}</div>
            `;
                    }
                  })}
          </tr>` : ``}`;
                })}`;
              }
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_sortHeader();
  $$unsubscribe_headerItems();
  $$unsubscribe_thKeys();
  return $$rendered;
});
const Toolbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "default" } = $$props;
  let ref = null;
  const overflowVisible = writable(false);
  setContext("Toolbar", {
    overflowVisible,
    setOverflowVisible: (visible) => {
      overflowVisible.set(visible);
    }
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<section${spread([{ "aria-label": "data table toolbar" }, escape_object($$restProps)], {
    classes: "bx--table-toolbar " + (size === "sm" ? "bx--table-toolbar--small" : "") + " " + (size === "default" ? "bx--table-toolbar--normal" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const ToolbarContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_classes("bx--toolbar-content".trim())}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Search16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Search16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 16 16" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M15,14.3L10.7,10c1.9-2.3,1.6-5.8-0.7-7.7S4.2,0.7,2.3,3S0.7,8.8,3,10.7c2,1.7,5,1.7,7,0l4.3,4.3L15,14.3z M2,6.5	C2,4,4,2,6.5,2S11,4,11,6.5S9,11,6.5,11S2,9,2,6.5z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const SearchSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["small", "size"]);
  let { small = false } = $$props;
  let { size = "xl" } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `
<div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton " + (size === "sm" || small ? "bx--search--sm" : "") + " " + (size === "lg" ? "bx--search--lg" : "") + " " + (size === "xl" ? "bx--search--xl" : "")
  })}><span${add_classes("bx--label".trim())}></span>
  <div${add_classes("bx--search-input".trim())}></div></div>`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "small",
    "size",
    "searchClass",
    "skeleton",
    "light",
    "disabled",
    "expandable",
    "expanded",
    "value",
    "type",
    "placeholder",
    "autocomplete",
    "autofocus",
    "closeButtonLabelText",
    "labelText",
    "icon",
    "id",
    "ref"
  ]);
  let { small = false } = $$props;
  let { size = "xl" } = $$props;
  let { searchClass = "" } = $$props;
  let { skeleton = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { expandable = false } = $$props;
  let { expanded = false } = $$props;
  let { value = "" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = "Search..." } = $$props;
  let { autocomplete = "off" } = $$props;
  let { autofocus = false } = $$props;
  let { closeButtonLabelText = "Clear search input" } = $$props;
  let { labelText = "" } = $$props;
  let { icon = Search16 } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const dispatch = createEventDispatcher();
  let searchRef = null;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.searchClass === void 0 && $$bindings.searchClass && searchClass !== void 0)
    $$bindings.searchClass(searchClass);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.expandable === void 0 && $$bindings.expandable && expandable !== void 0)
    $$bindings.expandable(expandable);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.autofocus === void 0 && $$bindings.autofocus && autofocus !== void 0)
    $$bindings.autofocus(autofocus);
  if ($$props.closeButtonLabelText === void 0 && $$bindings.closeButtonLabelText && closeButtonLabelText !== void 0)
    $$bindings.closeButtonLabelText(closeButtonLabelText);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (expanded && ref)
      ref.focus();
  }
  {
    dispatch(expanded ? "expand" : "collapse");
  }
  return `${skeleton ? `${validate_component(SearchSkeleton, "SearchSkeleton").$$render($$result, Object.assign({ small }, { size }, $$restProps), {}, {})}` : `<div role="${"search"}" aria-labelledby="${escape(id) + "-search"}" class="${[
    escape(searchClass),
    "bx--search " + (light ? "bx--search--light" : "") + " " + (disabled ? "bx--search--disabled" : "") + " " + (size === "sm" || small ? "bx--search--sm" : "") + " " + (size === "lg" ? "bx--search--lg" : "") + " " + (size === "xl" ? "bx--search--xl" : "") + " " + (expandable ? "bx--search--expandable" : "") + " " + (expanded ? "bx--search--expanded" : "")
  ].join(" ").trim()}"><div${add_classes("bx--search-magnifier".trim())}${add_attribute("this", searchRef, 0)}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, { class: "bx--search-magnifier-icon" }, {}, {})}</div>
    <label id="${escape(id) + "-search"}"${add_attribute("for", id, 0)}${add_classes("bx--label".trim())}>${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</label>
    
    <input${spread([
    { role: "searchbox" },
    {
      autofocus: (autofocus === true ? true : void 0) || null
    },
    {
      autocomplete: escape_attribute_value(autocomplete)
    },
    { disabled: disabled || null },
    { id: escape_attribute_value(id) },
    {
      placeholder: escape_attribute_value(placeholder)
    },
    { type: escape_attribute_value(type) },
    { value: escape_attribute_value(value) },
    escape_object($$restProps)
  ], { classes: "bx--search-input" })}${add_attribute("this", ref, 0)}>
    <button type="${"button"}"${add_attribute("aria-label", closeButtonLabelText, 0)} ${disabled ? "disabled" : ""}${add_classes(("bx--search-close " + (value === "" ? "bx--search-close--hidden" : "")).trim())}>${validate_component((size === "xl" ? Close20 : Close16) || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</button></div>`}`;
});
const ToolbarSearch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["value", "expanded", "persistent", "disabled", "tabindex", "ref"]);
  let { value = "" } = $$props;
  let { expanded = false } = $$props;
  let { persistent = false } = $$props;
  let { disabled = false } = $$props;
  let { tabindex = "0" } = $$props;
  let { ref = null } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.persistent === void 0 && $$bindings.persistent && persistent !== void 0)
    $$bindings.persistent(persistent);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    expanded = !!value.length;
    classes = [
      expanded && "bx--toolbar-search-container-active",
      persistent ? "bx--toolbar-search-container-persistent" : "bx--toolbar-search-container-expandable",
      disabled && "bx--toolbar-search-container-disabled"
    ].filter(Boolean).join(" ");
    $$rendered = `${validate_component(Search, "Search").$$render($$result, Object.assign({ tabindex }, { disabled }, $$restProps, {
      searchClass: classes + " " + $$restProps.class
    }, { ref }, { value }), {
      ref: ($$value) => {
        ref = $$value;
        $$settled = false;
      },
      value: ($$value) => {
        value = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
const ToolbarBatchActions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showActions;
  let $$restProps = compute_rest_props($$props, ["formatTotalSelected"]);
  let { formatTotalSelected = (totalSelected) => `${totalSelected} item${totalSelected === 1 ? "" : "s"} selected` } = $$props;
  let batchSelectedIds = [];
  const ctx = getContext("DataTable");
  ctx.batchSelectedIds.subscribe((value) => {
    batchSelectedIds = value;
  });
  let overflowVisible = false;
  const ctxToolbar = getContext("Toolbar");
  ctxToolbar.overflowVisible.subscribe((value) => {
    overflowVisible = value;
  });
  if ($$props.formatTotalSelected === void 0 && $$bindings.formatTotalSelected && formatTotalSelected !== void 0)
    $$bindings.formatTotalSelected(formatTotalSelected);
  showActions = batchSelectedIds.length > 0;
  return `${!overflowVisible ? `<div${spread([escape_object($$restProps)], {
    classes: "bx--batch-actions " + (showActions ? "bx--batch-actions--active" : "")
  })}><div${add_classes("bx--batch-summary".trim())}><p${add_classes("bx--batch-summary__para".trim())}><span>${escape(formatTotalSelected(batchSelectedIds.length))}</span></p></div>
    <div${add_classes("bx--action-list".trim())}>${slots.default ? slots.default({}) : ``}
      ${validate_component(Button, "Button").$$render($$result, {
    class: "bx--batch-summary__cancel",
    tabindex: showActions ? "0" : "-1"
  }, {}, {
    default: () => {
      return `${slots.cancel ? slots.cancel({}) : `Cancel`}`;
    }
  })}</div></div>` : ``}`;
});
const Settings16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Settings16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 16 16" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3	c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1	C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4	c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4	c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4	c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8	L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6	C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z"}"></path><path d="${"M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8	c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const OverflowMenuVertical16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    {
      "data-carbon-icon": "OverflowMenuVertical16"
    },
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
  ], {})}><circle cx="${"16"}" cy="${"8"}" r="${"2"}"></circle><circle cx="${"16"}" cy="${"16"}" r="${"2"}"></circle><circle cx="${"16"}" cy="${"24"}" r="${"2"}"></circle>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const OverflowMenuHorizontal16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    {
      "data-carbon-icon": "OverflowMenuHorizontal16"
    },
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
  ], {})}><circle cx="${"8"}" cy="${"16"}" r="${"2"}"></circle><circle cx="${"16"}" cy="${"16"}" r="${"2"}"></circle><circle cx="${"24"}" cy="${"16"}" r="${"2"}"></circle>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const OverflowMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let styles;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "direction",
    "open",
    "light",
    "flipped",
    "menuOptionsClass",
    "icon",
    "iconClass",
    "iconDescription",
    "id",
    "buttonRef",
    "menuRef"
  ]);
  let $currentIndex, $$unsubscribe_currentIndex;
  let $items, $$unsubscribe_items;
  let $$unsubscribe_currentId;
  let { size = void 0 } = $$props;
  let { direction = "bottom" } = $$props;
  let { open = false } = $$props;
  let { light = false } = $$props;
  let { flipped = false } = $$props;
  let { menuOptionsClass = void 0 } = $$props;
  let { icon = OverflowMenuVertical16 } = $$props;
  let { iconClass = void 0 } = $$props;
  let { iconDescription = "Open and close list of options" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { buttonRef = null } = $$props;
  let { menuRef = null } = $$props;
  const ctxBreadcrumbItem = getContext("BreadcrumbItem");
  createEventDispatcher();
  const items = writable([]);
  $$unsubscribe_items = subscribe(items, (value) => $items = value);
  const currentId = writable(void 0);
  $$unsubscribe_currentId = subscribe(currentId, (value) => value);
  const focusedId = writable(void 0);
  const currentIndex = writable(-1);
  $$unsubscribe_currentIndex = subscribe(currentIndex, (value) => $currentIndex = value);
  setContext("OverflowMenu", {
    focusedId,
    add: ({ id: id2, text, primaryFocus }) => {
      items.update((_) => {
        if (primaryFocus) {
          currentIndex.set(_.length);
        }
        return [..._, { id: id2, text, primaryFocus, index: _.length }];
      });
    },
    update: (id2) => {
      currentId.set(id2);
    },
    change: (direction2) => {
      let index = $currentIndex + direction2;
      if (index < 0) {
        index = $items.length - 1;
      } else if (index >= $items.length) {
        index = 0;
      }
      currentIndex.set(index);
    }
  });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.flipped === void 0 && $$bindings.flipped && flipped !== void 0)
    $$bindings.flipped(flipped);
  if ($$props.menuOptionsClass === void 0 && $$bindings.menuOptionsClass && menuOptionsClass !== void 0)
    $$bindings.menuOptionsClass(menuOptionsClass);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconClass === void 0 && $$bindings.iconClass && iconClass !== void 0)
    $$bindings.iconClass(iconClass);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.buttonRef === void 0 && $$bindings.buttonRef && buttonRef !== void 0)
    $$bindings.buttonRef(buttonRef);
  if ($$props.menuRef === void 0 && $$bindings.menuRef && menuRef !== void 0)
    $$bindings.menuRef(menuRef);
  {
    if (ctxBreadcrumbItem) {
      icon = OverflowMenuHorizontal16;
    }
  }
  ariaLabel = $$props["aria-label"] || "menu";
  {
    if ($items[$currentIndex]) {
      focusedId.set($items[$currentIndex].id);
    }
  }
  styles = `<style>
    #${id} .bx--overflow-menu-options.bx--overflow-menu-options:after {
      width: ${"2rem"};
    }
  </style>`;
  $$unsubscribe_currentIndex();
  $$unsubscribe_items();
  $$unsubscribe_currentId();
  return `${$$result.head += `<!-- HTML_TAG_START -->${styles}<!-- HTML_TAG_END -->`, ""}




<button${spread([
    { type: "button" },
    { "aria-haspopup": true },
    {
      "aria-expanded": escape_attribute_value(open)
    },
    {
      "aria-label": escape_attribute_value(ariaLabel)
    },
    { id: escape_attribute_value(id) },
    escape_object($$restProps)
  ], {
    classes: "bx--overflow-menu " + (open ? "bx--overflow-menu--open" : "") + " " + (light ? "bx--overflow-menu--light" : "") + " " + (size === "sm" ? "bx--overflow-menu--sm" : "") + " " + (size === "xl" ? "bx--overflow-menu--xl" : "")
  })}${add_attribute("this", buttonRef, 0)}>${slots.menu ? slots.menu({}) : `
    ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {
    "aria-label": iconDescription,
    title: iconDescription,
    class: "bx--overflow-menu__icon " + iconClass
  }, {}, {})}
  `}
  ${open ? `<ul role="${"menu"}" tabindex="${"-1"}"${add_attribute("aria-label", ariaLabel, 0)}${add_attribute("data-floating-menu-direction", direction, 0)} class="${[
    escape(menuOptionsClass),
    "bx--overflow-menu-options " + (flipped ? "bx--overflow-menu--flip" : "") + " " + (open ? "bx--overflow-menu-options--open" : "") + " " + (light ? "bx--overflow-menu-options--light" : "") + " " + (size === "sm" ? "bx--overflow-menu-options--sm" : "") + " " + (size === "xl" ? "bx--overflow-menu-options--xl" : "") + " " + (!!ctxBreadcrumbItem ? "bx--breadcrumb-menu-options" : "")
  ].join(" ").trim()}"${add_attribute("this", menuRef, 0)}>${slots.default ? slots.default({}) : ``}</ul>` : ``}</button>`;
});
const OverflowMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "text",
    "href",
    "primaryFocus",
    "disabled",
    "hasDivider",
    "danger",
    "requireTitle",
    "id",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let $focusedId, $$unsubscribe_focusedId;
  let { text = "Provide text" } = $$props;
  let { href = "" } = $$props;
  let { primaryFocus = false } = $$props;
  let { disabled = false } = $$props;
  let { hasDivider = false } = $$props;
  let { danger = false } = $$props;
  let { requireTitle = true } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { ref = null } = $$props;
  const { focusedId, add, update, change } = getContext("OverflowMenu");
  $$unsubscribe_focusedId = subscribe(focusedId, (value) => $focusedId = value);
  add({ id, text, primaryFocus });
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.primaryFocus === void 0 && $$bindings.primaryFocus && primaryFocus !== void 0)
    $$bindings.primaryFocus(primaryFocus);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.hasDivider === void 0 && $$bindings.hasDivider && hasDivider !== void 0)
    $$bindings.hasDivider(hasDivider);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.requireTitle === void 0 && $$bindings.requireTitle && requireTitle !== void 0)
    $$bindings.requireTitle(requireTitle);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  primaryFocus = $focusedId === id;
  buttonProps = {
    role: "menuitem",
    tabindex: "-1",
    class: "bx--overflow-menu-options__btn",
    disabled: href ? void 0 : disabled,
    href: href ? href : void 0,
    title: requireTitle ? $$slots.default ? void 0 : text : void 0
  };
  $$unsubscribe_focusedId();
  return `<li${spread([
    { role: "none" },
    { id: escape_attribute_value(id) },
    escape_object($$restProps)
  ], {
    classes: "bx--overflow-menu-options__option " + (hasDivider ? "bx--overflow-menu--divider" : "") + " " + (danger ? "bx--overflow-menu-options__option--danger" : "") + " " + (disabled ? "bx--overflow-menu-options__option--disabled" : "")
  })}>${href ? `
    <a${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : `
        <div${add_classes("bx--overflow-menu-options__option-content".trim())}>${escape(text)}</div>
      `}</a>` : `<button${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : `
        <div${add_classes("bx--overflow-menu-options__option-content".trim())}>${escape(text)}</div>
      `}</button>`}</li>`;
});
const ToolbarMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  const ctx = getContext("Toolbar");
  let menuRef = null;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (menuRef)
        menuRef.style.top = "100%";
    }
    {
      ctx.setOverflowVisible(menuRef != null);
    }
    $$rendered = `${validate_component(OverflowMenu, "OverflowMenu").$$render($$result, Object.assign({ icon: Settings16 }, $$restProps, {
      class: "bx--toolbar-action bx--overflow-menu " + $$restProps.class
    }, { flipped: true }, { menuRef }), {
      menuRef: ($$value) => {
        menuRef = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const ToolbarMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `${validate_component(OverflowMenuItem, "OverflowMenuItem").$$render($$result, Object.assign($$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Export16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Export16" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 16 16" },
    { fill: "currentColor" },
    { width: "16" },
    { height: "16" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M13 12v2H3v-2H2v2l0 0c0 .6.4 1 1 1h10c.6 0 1-.4 1-1l0 0v-2H13zM3 6L3.7 6.7 7.5 2.9 7.5 12 8.5 12 8.5 2.9 12.3 6.7 13 6 8 1z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Export16$1 = Export16;
const TrashCan16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "TrashCan16" },
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
  ], {})}><path d="${"M12 12H14V24H12zM18 12H20V24H18z"}"></path><path d="${"M4 6V8H6V28a2 2 0 002 2H24a2 2 0 002-2V8h2V6zM8 28V8H24V28zM12 2H20V4H12z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var TrashCan16$1 = TrashCan16;
export { DataTable as D, Export16$1 as E, Toolbar as T, ToolbarBatchActions as a, TrashCan16$1 as b, ToolbarContent as c, ToolbarSearch as d, ToolbarMenu as e, ToolbarMenuItem as f };
