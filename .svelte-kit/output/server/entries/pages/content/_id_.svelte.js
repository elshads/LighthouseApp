import { c as create_ssr_component, a as compute_rest_props, j as createEventDispatcher, h as subscribe, s as setContext, b as spread, e as escape_object, i as add_classes, g as add_attribute, d as escape, v as validate_component, n as getContext, t as compute_slots, f as escape_attribute_value, k as each, w as onDestroy } from "../../../chunks/index-167532fe.js";
import { s as session, p as page } from "../../../chunks/stores-bb58c6e6.js";
import { l as loading } from "../../../chunks/appStore-11ae9d39.js";
import "qrcode";
import "uuid";
import { T as Tile, B as Breadcrumb, a as BreadcrumbItem } from "../../../chunks/Tile-37411b40.js";
import { B as Button } from "../../../chunks/Button-d922f2a3.js";
import { w as writable } from "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { C as ChevronDown16 } from "../../../chunks/ChevronDown16-8933e66a.js";
import { W as WarningFilled16, a as WarningAltFilled16 } from "../../../chunks/WarningAltFilled16-391da9e9.js";
import "@tiptap/core";
import "@tiptap/starter-kit";
import "@tiptap/extension-underline";
import "@tiptap/extension-task-list";
import "@tiptap/extension-task-item";
import "@tiptap/extension-placeholder";
import "@tiptap/extension-link";
import "@tiptap/extension-highlight";
import "@tiptap/extension-text-align";
import "@tiptap/extension-image";
/* empty css                                                               */import "../../../chunks/Link-ce1e6dbc.js";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "selected",
    "size",
    "inline",
    "light",
    "disabled",
    "id",
    "name",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "helperText",
    "noLabel",
    "labelText",
    "hideLabel",
    "ref",
    "required"
  ]);
  let $$unsubscribe_selectedValue;
  let { selected = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { inline = false } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { helperText = "" } = $$props;
  let { noLabel = false } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  createEventDispatcher();
  const selectedValue = writable(selected);
  $$unsubscribe_selectedValue = subscribe(selectedValue, (value) => value);
  setContext("Select", { selectedValue });
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
    $$bindings.noLabel(noLabel);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  errorId = `error-${id}`;
  {
    selectedValue.set(selected);
  }
  $$unsubscribe_selectedValue();
  return `<div${spread([escape_object($$restProps)], { classes: "bx--form-item" })}><div${add_classes(("bx--select " + (inline ? "bx--select--inline" : "") + " " + (light ? "bx--select--light" : "") + " " + (invalid ? "bx--select--invalid" : "") + " " + (disabled ? "bx--select--disabled" : "") + " " + (warn ? "bx--select--warning" : "")).trim())}>${!noLabel ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
          ${escape(labelText)}
        `}</label>` : ``}
    ${inline ? `<div${add_classes("bx--select-input--inline__wrapper".trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)}${add_attribute("aria-invalid", invalid || void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name, 0)} class="${[escape(size && `bx--select-input--${size}`), "bx--select-input"].join(" ").trim()}"${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select>
          ${validate_component(ChevronDown16, "ChevronDown16").$$render($$result, { class: "bx--select__arrow" }, {}, {})}
          ${invalid ? `${validate_component(WarningFilled16, "WarningFilled16").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``}</div>
        ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div>
      ${helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}` : ``}
    ${!inline ? `<div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--select-input__wrapper".trim())}><select${add_attribute("id", id, 0)}${add_attribute("name", name, 0)}${add_attribute("aria-describedby", invalid ? errorId : void 0, 0)} ${disabled || void 0 ? "disabled" : ""} ${required || void 0 ? "required" : ""}${add_attribute("aria-invalid", invalid || void 0, 0)} class="${[escape(size && `bx--select-input--${size}`), "bx--select-input"].join(" ").trim()}"${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</select>
        ${validate_component(ChevronDown16, "ChevronDown16").$$render($$result, { class: "bx--select__arrow" }, {}, {})}
        ${invalid ? `${validate_component(WarningFilled16, "WarningFilled16").$$render($$result, { class: "bx--select__invalid-icon" }, {}, {})}` : ``}
        ${!invalid && warn ? `${validate_component(WarningAltFilled16, "WarningAltFilled16").$$render($$result, {
    class: "bx--select__invalid-icon bx--select__invalid-icon--warning"
  }, {}, {})}` : ``}</div>
      ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}
      ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
      ${!invalid && warn ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}` : ``}</div></div>`;
});
const SelectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "text", "hidden", "disabled"]);
  let { value = "" } = $$props;
  let { text = "" } = $$props;
  let { hidden = false } = $$props;
  let { disabled = false } = $$props;
  const ctx = getContext("Select") || getContext("TimePickerSelect");
  let selected = false;
  ctx.selectedValue.subscribe((currentValue) => {
    selected = currentValue === value;
  });
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `<option${add_attribute("value", value, 0)} ${disabled ? "disabled" : ""} ${hidden ? "hidden" : ""} ${selected ? "selected" : ""} class="${[escape($$restProps.class), "bx--select-option"].join(" ").trim()}"${add_attribute("style", $$restProps.style, 0)}>${escape(text || value)}</option>`;
});
const TextArea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let errorId;
  let $$restProps = compute_rest_props($$props, [
    "value",
    "placeholder",
    "cols",
    "rows",
    "light",
    "disabled",
    "helperText",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "id",
    "name",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { cols = 50 } = $$props;
  let { rows = 4 } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.cols === void 0 && $$bindings.cols && cols !== void 0)
    $$bindings.cols(cols);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  errorId = `error-${id}`;
  return `
<div${add_classes("bx--form-item".trim())}>${(labelText || $$slots.labelText) && !hideLabel ? `<label${add_attribute("for", id, 0)}${add_classes(("bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "")).trim())}>${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</label>` : ``}
  <div${add_attribute("data-invalid", invalid || void 0, 0)}${add_classes("bx--text-area__wrapper".trim())}>${invalid ? `${validate_component(WarningFilled16, "WarningFilled16").$$render($$result, { class: "bx--text-area__invalid-icon" }, {}, {})}` : ``}
    <textarea${spread([
    {
      "aria-invalid": escape_attribute_value(invalid || void 0)
    },
    {
      "aria-describedby": escape_attribute_value(invalid ? errorId : void 0)
    },
    { disabled: disabled || null },
    { id: escape_attribute_value(id) },
    { name: escape_attribute_value(name) },
    { cols: escape_attribute_value(cols) },
    { rows: escape_attribute_value(rows) },
    {
      placeholder: escape_attribute_value(placeholder)
    },
    escape_object($$restProps),
    {
      readonly: ($$restProps.readonly === true ? true : void 0) || null
    }
  ], {
    classes: "bx--text-area " + (light ? "bx--text-area--light" : "") + " " + (invalid ? "bx--text-area--invalid" : "")
  })}${add_attribute("this", ref, 0)}>${escape(value ?? "")}</textarea></div>
  ${!invalid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "")).trim())}>${escape(helperText)}</div>` : ``}
  ${invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}</div>`;
});
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getMonthLength(year, month) {
  const feb = isLeapYear(year) ? 29 : 28;
  const monthLenghts = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return monthLenghts[month];
}
function toText(date, formatTokens) {
  let text = "";
  if (date) {
    for (const token of formatTokens) {
      if (typeof token === "string") {
        text += token;
      } else {
        text += token.toString(date);
      }
    }
  }
  return text;
}
function getMonthDays(year, month) {
  const monthLength = getMonthLength(year, month);
  const days = [];
  for (let i = 0; i < monthLength; i++) {
    days.push({
      year,
      month,
      number: i + 1
    });
  }
  return days;
}
function getCalendarDays(value, weekStartsOn) {
  const year = value.getFullYear();
  const month = value.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  let days = [];
  const daysBefore = (firstWeekday - weekStartsOn + 7) % 7;
  if (daysBefore > 0) {
    let lastMonth = month - 1;
    let lastMonthYear = year;
    if (lastMonth === -1) {
      lastMonth = 11;
      lastMonthYear = year - 1;
    }
    days = getMonthDays(lastMonthYear, lastMonth).slice(-daysBefore);
  }
  days = days.concat(getMonthDays(year, month));
  let nextMonth = month + 1;
  let nextMonthYear = year;
  if (nextMonth === 12) {
    nextMonth = 0;
    nextMonthYear = year + 1;
  }
  const daysAfter = 42 - days.length;
  days = days.concat(getMonthDays(nextMonthYear, nextMonth).slice(0, daysAfter));
  return days;
}
function getLocaleDefaults() {
  return {
    weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    weekStartsOn: 1
  };
}
function getInnerLocale(locale = {}) {
  const innerLocale = getLocaleDefaults();
  if (typeof locale.weekStartsOn === "number") {
    innerLocale.weekStartsOn = locale.weekStartsOn;
  }
  if (locale.months)
    innerLocale.months = locale.months;
  if (locale.weekdays)
    innerLocale.weekdays = locale.weekdays;
  return innerLocale;
}
var DatePicker_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".date-time-picker.svelte-w595t7.svelte-w595t7{display:inline-block;color:var(--date-picker-foreground, #000000);background:var(--date-picker-background, #ffffff);user-select:none;-webkit-user-select:none;padding:0.5rem;cursor:default;font-size:0.75rem;border:1px solid rgba(103, 113, 137, 0.3);border-radius:3px;box-shadow:0px 2px 6px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.11);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}.date-time-picker.svelte-w595t7.svelte-w595t7:focus-visible{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}.tab-container.svelte-w595t7.svelte-w595t7{outline:none}.top.svelte-w595t7.svelte-w595t7{display:flex;justify-content:center;align-items:center;padding-bottom:0.5rem}.dropdown.svelte-w595t7.svelte-w595t7{margin-left:0.25rem;margin-right:0.25rem;position:relative;display:flex}.dropdown.svelte-w595t7 svg.svelte-w595t7{position:absolute;right:0px;top:0px;height:100%;width:8px;padding:0rem 0.5rem;pointer-events:none}.month.svelte-w595t7.svelte-w595t7{flex-grow:1}.year.svelte-w595t7.svelte-w595t7{flex-grow:1}svg.svelte-w595t7.svelte-w595t7{display:block;fill:var(--date-picker-foreground, #000000);opacity:0.75;outline:none}.page-button.svelte-w595t7.svelte-w595t7{width:1.5rem;height:1.5rem;flex-shrink:0;border-radius:5px;box-sizing:border-box;border:1px solid transparent;display:flex;align-items:center;justify-content:center}.page-button.svelte-w595t7.svelte-w595t7:hover{background-color:rgba(128, 128, 128, 0.08);border:1px solid rgba(128, 128, 128, 0.08)}.page-button.svelte-w595t7 svg.svelte-w595t7{width:0.68rem;height:0.68rem}select.dummy-select.svelte-w595t7.svelte-w595t7{position:absolute;width:100%;pointer-events:none;outline:none;color:var(--date-picker-foreground, #000000);background-color:var(--date-picker-background, #ffffff);border-radius:3px}select.svelte-w595t7:focus+select.dummy-select.svelte-w595t7{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}select.svelte-w595t7.svelte-w595t7:not(.dummy-select){border-radius:100px}select.svelte-w595t7.svelte-w595t7{font-size:inherit;font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;flex-grow:1;padding:0rem 0.35rem;height:1.5rem;padding-right:1.3rem;margin:0px;border:1px solid rgba(108, 120, 147, 0.3);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}.header.svelte-w595t7.svelte-w595t7{display:flex;font-weight:600;padding-bottom:2px}.header-cell.svelte-w595t7.svelte-w595t7{width:1.875rem;text-align:center;flex-grow:1}.week.svelte-w595t7.svelte-w595t7{display:flex}.cell.svelte-w595t7.svelte-w595t7{display:flex;align-items:center;justify-content:center;width:2rem;height:1.94rem;flex-grow:1;border-radius:5px;box-sizing:border-box;border:2px solid transparent}.cell.svelte-w595t7.svelte-w595t7:hover{border:1px solid rgba(128, 128, 128, 0.08);background-color:rgba(128, 128, 128, 0.08)}.cell.disabled.svelte-w595t7.svelte-w595t7{visibility:hidden}.cell.disabled.svelte-w595t7.svelte-w595t7:hover{border:none;background-color:transparent}.cell.other-month.svelte-w595t7 span.svelte-w595t7{opacity:0.4}.cell.selected.svelte-w595t7.svelte-w595t7{color:var(--date-picker-selected-color, inherit);background:var(--date-picker-selected-background, rgba(2, 105, 247, 0.2));border:2px solid var(--date-picker-highlight-border, #0269f7)}",
  map: null
};
function dayIsInRange(calendarDay, min, max) {
  const date = new Date(calendarDay.year, calendarDay.month, calendarDay.number);
  const minDate = new Date(min.getFullYear(), min.getMonth(), min.getDate());
  const maxDate = new Date(max.getFullYear(), max.getMonth(), max.getDate());
  return date >= minDate && date <= maxDate;
}
const DatePicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iLocale;
  let calendarDays;
  createEventDispatcher();
  let { value = null } = $$props;
  function setValue(d) {
    if (d.getTime() !== (value === null || value === void 0 ? void 0 : value.getTime())) {
      value = d;
    }
  }
  const defaultDate = new Date();
  let shownDate = value !== null && value !== void 0 ? value : defaultDate;
  function updateShownDate(updater) {
    shownDate = updater(new Date(shownDate.getTime()));
    if (value && shownDate.getTime() !== value.getTime()) {
      setValue(shownDate);
    }
  }
  let { min = new Date(defaultDate.getFullYear() - 20, 0, 1) } = $$props;
  let { max = new Date(defaultDate.getFullYear(), 11, 31, 23, 59, 59, 999) } = $$props;
  let years = getYears(min, max);
  function getYears(min2, max2) {
    let years2 = [];
    for (let i = min2.getFullYear(); i <= max2.getFullYear(); i++) {
      years2.push(i);
    }
    return years2;
  }
  let { locale = {} } = $$props;
  let year = shownDate.getFullYear();
  const getYear = (tmpPickerDate) => year = tmpPickerDate.getFullYear();
  function setYear(year2) {
    updateShownDate((tmpPickerDate) => {
      tmpPickerDate.setFullYear(year2);
      return tmpPickerDate;
    });
  }
  let month = shownDate.getMonth();
  const getMonth = (tmpPickerDate) => month = tmpPickerDate.getMonth();
  function setMonth(month2) {
    let newYear = year;
    let newMonth = month2;
    if (month2 === 12) {
      newMonth = 0;
      newYear++;
    } else if (month2 === -1) {
      newMonth = 11;
      newYear--;
    }
    const maxDate = getMonthLength(newYear, newMonth);
    const newDate = Math.min(shownDate.getDate(), maxDate);
    updateShownDate((date) => {
      return new Date(newYear, newMonth, newDate, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    });
  }
  let dayOfMonth = (value === null || value === void 0 ? void 0 : value.getDate()) || null;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  $$result.css.add(css$2);
  {
    if (value)
      shownDate = value;
  }
  years = getYears(min, max);
  {
    if (shownDate > max) {
      updateShownDate(() => max);
    } else if (shownDate < min) {
      updateShownDate(() => min);
    }
  }
  iLocale = getInnerLocale(locale);
  {
    getYear(shownDate);
  }
  {
    setYear(year);
  }
  {
    getMonth(shownDate);
  }
  {
    setMonth(month);
  }
  dayOfMonth = (value === null || value === void 0 ? void 0 : value.getDate()) || null;
  calendarDays = getCalendarDays(shownDate, iLocale.weekStartsOn);
  return `<div class="${"date-time-picker svelte-w595t7"}" tabindex="${"0"}"><div class="${"tab-container svelte-w595t7"}" tabindex="${"-1"}"><div class="${"top svelte-w595t7"}"><div class="${"page-button svelte-w595t7"}" tabindex="${"-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-w595t7"}"><path d="${"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"}" transform="${"rotate(180, 12, 12)"}"></path></svg></div>
      <div class="${"dropdown month svelte-w595t7"}"><select class="${"svelte-w595t7"}">${each(iLocale.months, (monthName, i) => {
    return `<option ${new Date(year, i, getMonthLength(year, i), 23, 59, 59, 999) < min || new Date(year, i) > max ? "disabled" : ""}${add_attribute("value", i, 0)}>${escape(monthName)}</option>`;
  })}</select>
        
        <select class="${"dummy-select svelte-w595t7"}" tabindex="${"-1"}">${each(iLocale.months, (monthName, i) => {
    return `<option${add_attribute("value", i, 0)} ${i === month ? "selected" : ""}>${escape(monthName)}</option>`;
  })}</select>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-w595t7"}"><path d="${"M6 0l12 12-12 12z"}" transform="${"rotate(90, 12, 12)"}"></path></svg></div>
      <div class="${"dropdown year svelte-w595t7"}"><select class="${"svelte-w595t7"}">${each(years, (v) => {
    return `<option${add_attribute("value", v, 0)}>${escape(v)}</option>`;
  })}</select>
        
        <select class="${"dummy-select svelte-w595t7"}" tabindex="${"-1"}">${each(years, (v) => {
    return `<option${add_attribute("value", v, 0)} ${v === year ? "selected" : ""}>${escape(v)}</option>`;
  })}</select>
        <svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-w595t7"}"><path d="${"M6 0l12 12-12 12z"}" transform="${"rotate(90, 12, 12)"}"></path></svg></div>
      <div class="${"page-button svelte-w595t7"}" tabindex="${"-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" class="${"svelte-w595t7"}"><path d="${"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"}"></path></svg></div></div>
    <div class="${"header svelte-w595t7"}">${each(Array(7), (_, i) => {
    return `${i + iLocale.weekStartsOn < 7 ? `<div class="${"header-cell svelte-w595t7"}">${escape(iLocale.weekdays[iLocale.weekStartsOn + i])}</div>` : `<div class="${"header-cell svelte-w595t7"}">${escape(iLocale.weekdays[iLocale.weekStartsOn + i - 7])}</div>`}`;
  })}</div>
    ${each(Array(6), (_, weekIndex) => {
    return `<div class="${"week svelte-w595t7"}">${each(calendarDays.slice(weekIndex * 7, weekIndex * 7 + 7), (calendarDay) => {
      return `<div class="${[
        "cell svelte-w595t7",
        (!dayIsInRange(calendarDay, min, max) ? "disabled" : "") + " " + (calendarDay.month === month && calendarDay.number === dayOfMonth ? "selected" : "") + " " + (calendarDay.month !== month ? "other-month" : "")
      ].join(" ").trim()}"><span class="${"svelte-w595t7"}">${escape(calendarDay.number)}</span>
          </div>`;
    })}
      </div>`;
  })}</div>
</div>`;
});
function parse(str, tokens, baseDate) {
  let missingPunctuation = "";
  let valid = true;
  baseDate = baseDate || new Date(2020, 0, 1, 0, 0, 0, 0);
  let year = baseDate.getFullYear();
  let month = baseDate.getMonth();
  let day = baseDate.getDate();
  let hours = baseDate.getHours();
  let minutes = baseDate.getMinutes();
  let seconds = baseDate.getSeconds();
  const ms = baseDate.getMilliseconds();
  function parseString(token) {
    for (let i = 0; i < token.length; i++) {
      if (str.startsWith(token[i])) {
        str = str.slice(1);
      } else {
        valid = false;
        if (str.length === 0)
          missingPunctuation = token.slice(i);
        return;
      }
    }
  }
  function parseUint(pattern, min, max) {
    const matches = str.match(pattern);
    if (matches === null || matches === void 0 ? void 0 : matches[0]) {
      str = str.slice(matches[0].length);
      const n = parseInt(matches[0]);
      if (n > max || n < min) {
        valid = false;
        return null;
      } else {
        return n;
      }
    } else {
      valid = false;
      return null;
    }
  }
  function parseToken(token) {
    if (typeof token === "string") {
      parseString(token);
    } else if (token.id === "yyyy") {
      const value = parseUint(/^[0-9]{4}/, 0, 9999);
      if (value !== null)
        year = value;
    } else if (token.id === "MM") {
      const value = parseUint(/^[0-9]{2}/, 1, 12);
      if (value !== null)
        month = value - 1;
    } else if (token.id === "dd") {
      const value = parseUint(/^[0-9]{2}/, 1, 31);
      if (value !== null)
        day = value;
    } else if (token.id === "HH") {
      const value = parseUint(/^[0-9]{2}/, 0, 23);
      if (value !== null)
        hours = value;
    } else if (token.id === "mm") {
      const value = parseUint(/^[0-9]{2}/, 0, 59);
      if (value !== null)
        minutes = value;
    } else if (token.id === "ss") {
      const value = parseUint(/^[0-9]{2}/, 0, 59);
      if (value !== null)
        seconds = value;
    }
  }
  for (const token of tokens) {
    parseToken(token);
    if (!valid)
      break;
  }
  const monthLength = getMonthLength(year, month);
  if (day > monthLength) {
    valid = false;
  }
  return {
    date: valid ? new Date(year, month, day, hours, minutes, seconds, ms) : null,
    missingPunctuation
  };
}
function twoDigit(value) {
  return ("0" + value.toString()).slice(-2);
}
const ruleTokens = [
  {
    id: "yyyy",
    toString: (d) => d.getFullYear().toString()
  },
  {
    id: "MM",
    toString: (d) => twoDigit(d.getMonth() + 1)
  },
  {
    id: "dd",
    toString: (d) => twoDigit(d.getDate())
  },
  {
    id: "HH",
    toString: (d) => twoDigit(d.getHours())
  },
  {
    id: "mm",
    toString: (d) => twoDigit(d.getMinutes())
  },
  {
    id: "ss",
    toString: (d) => twoDigit(d.getSeconds())
  }
];
function parseRule(s) {
  for (const token of ruleTokens) {
    if (s.startsWith(token.id)) {
      return token;
    }
  }
}
function createFormat(s) {
  const tokens = [];
  while (s.length > 0) {
    const token = parseRule(s);
    if (token) {
      tokens.push(token);
      s = s.slice(token.id.length);
    } else if (typeof tokens[tokens.length - 1] === "string") {
      tokens[tokens.length - 1] += s[0];
      s = s.slice(1);
    } else {
      tokens.push(s[0]);
      s = s.slice(1);
    }
  }
  return tokens;
}
var DateInput_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".date-time-field.svelte-h5dfp8{position:relative}input.svelte-h5dfp8{color:var(--date-picker-foreground, #000000);background:var(--date-picker-background, #ffffff);min-width:0px;box-sizing:border-box;padding:4px 6px;margin:0px;border:1px solid rgba(103, 113, 137, 0.3);border-radius:3px;width:var(--date-input-width, 150px);outline:none;transition:all 80ms cubic-bezier(0.4, 0, 0.2, 1)}input.svelte-h5dfp8:focus{border-color:var(--date-picker-highlight-border, #0269f7);box-shadow:0px 0px 0px 2px var(--date-picker-highlight-shadow, rgba(2, 105, 247, 0.4))}.invalid.svelte-h5dfp8{border:1px solid rgba(249, 47, 114, 0.5);background-color:rgba(249, 47, 114, 0.1)}.invalid.svelte-h5dfp8:focus{border-color:#f92f72;box-shadow:0px 0px 0px 2px rgba(249, 47, 114, 0.5)}.picker.svelte-h5dfp8{display:none;position:absolute;margin-top:1px;z-index:10}.picker.visible.svelte-h5dfp8{display:block}",
  map: null
};
const DateInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $store, $$unsubscribe_store;
  let $innerStore, $$unsubscribe_innerStore;
  createEventDispatcher();
  const defaultDate = new Date();
  const innerStore = writable(null);
  $$unsubscribe_innerStore = subscribe(innerStore, (value2) => $innerStore = value2);
  const store = (() => {
    return {
      subscribe: innerStore.subscribe,
      set: (d) => {
        if (d === null) {
          innerStore.set(null);
          value = d;
        } else if (d.getTime() !== ($innerStore === null || $innerStore === void 0 ? void 0 : $innerStore.getTime())) {
          innerStore.set(d);
          value = d;
        }
      }
    };
  })();
  $$unsubscribe_store = subscribe(store, (value2) => $store = value2);
  let { value = null } = $$props;
  let { min = new Date(defaultDate.getFullYear() - 20, 0, 1) } = $$props;
  let { max = new Date(defaultDate.getFullYear(), 11, 31, 23, 59, 59, 999) } = $$props;
  let { placeholder = "2020-12-31 23:00:00" } = $$props;
  let { valid = true } = $$props;
  let { format = "yyyy-MM-dd HH:mm:ss" } = $$props;
  let formatTokens = createFormat(format);
  let { locale = {} } = $$props;
  function valueUpdate(value2, formatTokens2) {
    text = toText(value2, formatTokens2);
  }
  let { text = toText($store, formatTokens) } = $$props;
  let textHistory = [text, text];
  function textUpdate(text2, formatTokens2) {
    if (text2.length) {
      const result = parse(text2, formatTokens2, $store);
      if (result.date !== null) {
        valid = true;
        store.set(result.date);
      } else {
        valid = false;
      }
    } else {
      valid = true;
      if (value) {
        value = null;
        store.set(null);
      }
    }
  }
  let { visible = false } = $$props;
  let { closeOnSelection = false } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.format === void 0 && $$bindings.format && format !== void 0)
    $$bindings.format(format);
  if ($$props.locale === void 0 && $$bindings.locale && locale !== void 0)
    $$bindings.locale(locale);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.closeOnSelection === void 0 && $$bindings.closeOnSelection && closeOnSelection !== void 0)
    $$bindings.closeOnSelection(closeOnSelection);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      store.set(value);
    }
    formatTokens = createFormat(format);
    {
      valueUpdate($store, formatTokens);
    }
    textHistory = [textHistory[1], text];
    {
      textUpdate(text, formatTokens);
    }
    $$rendered = `<div class="${"date-time-field svelte-h5dfp8"}"><input type="${"text"}"${add_attribute("placeholder", placeholder, 0)} class="${["svelte-h5dfp8", !valid ? "invalid" : ""].join(" ").trim()}"${add_attribute("value", text, 0)}>
  ${visible ? `<div class="${["picker svelte-h5dfp8", visible ? "visible" : ""].join(" ").trim()}">${validate_component(DatePicker, "DateTimePicker").$$render($$result, { min, max, locale, value: $store }, {
      value: ($$value) => {
        $store = $$value;
        $$settled = false;
      }
    }, {})}</div>` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_store();
  $$unsubscribe_innerStore();
  return $$rendered;
});
const Editor_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let element;
  onDestroy(() => {
  });
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `<div class="${"tt-container"}">${``}
	<div class="${"tt-content"}"><div${add_attribute("this", element, 0)}></div></div>

	<input style="${"display:none"}" type="${"file"}" accept="${".jpg, .jpeg, .png"}"></div>`;
});
var SimpleAutocomplete_svelte_svelte_type_style_lang = "";
const css = {
  code: '.autocomplete.svelte-1nqq7zl.svelte-1nqq7zl{min-width:200px;display:inline-block;max-width:100%;position:relative;vertical-align:top;height:2.25em}.autocomplete.svelte-1nqq7zl.svelte-1nqq7zl:not(.hide-arrow):not(.is-loading)::after{border:3px solid;border-radius:2px;border-right:0;border-top:0;content:" ";display:block;height:0.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:0.625em;border-color:#3273dc;right:1.125em;z-index:4}.autocomplete.show-clear.svelte-1nqq7zl.svelte-1nqq7zl:not(.hide-arrow)::after{right:2.3em}.autocomplete.svelte-1nqq7zl .svelte-1nqq7zl{box-sizing:border-box}.autocomplete-input.svelte-1nqq7zl.svelte-1nqq7zl{font:inherit;width:100%;height:100%;padding:5px 11px}.autocomplete.svelte-1nqq7zl:not(.hide-arrow) .autocomplete-input.svelte-1nqq7zl{padding-right:2em}.autocomplete.show-clear.svelte-1nqq7zl:not(.hide-arrow) .autocomplete-input.svelte-1nqq7zl{padding-right:3.2em}.autocomplete.hide-arrow.show-clear.svelte-1nqq7zl .autocomplete-input.svelte-1nqq7zl{padding-right:2em}.autocomplete-list.svelte-1nqq7zl.svelte-1nqq7zl{background:#fff;position:relative;width:100%;overflow-y:auto;z-index:99;padding:10px 0;top:0px;border:1px solid #999;max-height:calc(15 * (1rem + 10px) + 15px);user-select:none}.autocomplete-list.svelte-1nqq7zl.svelte-1nqq7zl:empty{padding:0}.autocomplete-list-item.svelte-1nqq7zl.svelte-1nqq7zl{padding:5px 15px;color:#333;cursor:pointer;line-height:1}.autocomplete-list-item.confirmed.svelte-1nqq7zl.svelte-1nqq7zl{background-color:#789fed;color:#fff}.autocomplete-list-item.selected.svelte-1nqq7zl.svelte-1nqq7zl{background-color:#2e69e2;color:#fff}.autocomplete-list-item-no-results.svelte-1nqq7zl.svelte-1nqq7zl{padding:5px 15px;color:#999;line-height:1}.autocomplete-list-item-create.svelte-1nqq7zl.svelte-1nqq7zl{padding:5px 15px;line-height:1}.autocomplete-list-item-loading.svelte-1nqq7zl.svelte-1nqq7zl{padding:5px 15px;line-height:1}.autocomplete-list.hidden.svelte-1nqq7zl.svelte-1nqq7zl{display:none}.autocomplete.show-clear.svelte-1nqq7zl .autocomplete-clear-button.svelte-1nqq7zl{cursor:pointer;display:block;text-align:center;position:absolute;right:0.1em;padding:0.3em 0.6em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);z-index:4}.autocomplete.svelte-1nqq7zl:not(.show-clear) .autocomplete-clear-button.svelte-1nqq7zl{display:none}.autocomplete.svelte-1nqq7zl select.svelte-1nqq7zl{display:none}.autocomplete.is-multiple.svelte-1nqq7zl .input-container.svelte-1nqq7zl{height:auto;box-shadow:inset 0 1px 2px rgba(10, 10, 10, 0.1);border-radius:4px;border:1px solid #b5b5b5;padding-left:0.4em;padding-right:0.4em;display:flex;flex-wrap:wrap;align-items:stretch;background-color:#fff}.autocomplete.is-multiple.svelte-1nqq7zl .tag.svelte-1nqq7zl{display:flex;margin-top:0.5em;margin-bottom:0.3em}.autocomplete.is-multiple.svelte-1nqq7zl .tag.is-delete.svelte-1nqq7zl{cursor:pointer}.autocomplete.is-multiple.svelte-1nqq7zl .tags.svelte-1nqq7zl{margin-right:0.3em;margin-bottom:0}.autocomplete.is-multiple.svelte-1nqq7zl .autocomplete-input.svelte-1nqq7zl{display:flex;width:100%;flex:1 1 50px;min-width:3em;border:none;box-shadow:none;background:none}',
  map: null
};
function safeFunction(theFunction, argument) {
  if (typeof theFunction !== "function") {
    console.error("Not a function: " + theFunction + ", argument: " + argument);
    return void 0;
  }
  let result;
  try {
    result = theFunction(argument);
  } catch (error) {
    console.warn("Error executing Autocomplete function on value: " + argument + " function: " + theFunction);
  }
  return result;
}
function safeStringFunction(theFunction, argument) {
  let result = safeFunction(theFunction, argument);
  if (result === void 0 || result === null) {
    result = "";
  }
  if (typeof result !== "string") {
    result = result.toString();
  }
  return result;
}
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const SimpleAutocomplete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showList;
  let clearable;
  let { items = [] } = $$props;
  let { searchFunction = false } = $$props;
  let { labelFieldName = void 0 } = $$props;
  let { keywordsFieldName = labelFieldName } = $$props;
  let { valueFieldName = void 0 } = $$props;
  let { labelFunction = function(item) {
    if (item === void 0 || item === null) {
      return "";
    }
    return labelFieldName ? item[labelFieldName] : item;
  } } = $$props;
  let { keywordsFunction = function(item) {
    if (item === void 0 || item === null) {
      return "";
    }
    return keywordsFieldName ? item[keywordsFieldName] : labelFunction(item);
  } } = $$props;
  let { valueFunction = function(item, forceSingle = false) {
    if (item === void 0 || item === null) {
      return item;
    }
    if (!multiple || forceSingle) {
      return valueFieldName ? item[valueFieldName] : item;
    } else {
      return item.map((i) => valueFieldName ? i[valueFieldName] : i);
    }
  } } = $$props;
  let { keywordsCleanFunction = function(keywords) {
    return keywords;
  } } = $$props;
  let { textCleanFunction = function(userEnteredText) {
    return userEnteredText;
  } } = $$props;
  let { beforeChange = function(oldSelectedItem, newSelectedItem) {
    return true;
  } } = $$props;
  let { onChange = function(newSelectedItem) {
  } } = $$props;
  let { onFocus = function() {
  } } = $$props;
  let { onBlur = function() {
  } } = $$props;
  let { onCreate = function(text2) {
    if (debug) {
      console.log("onCreate: " + text2);
    }
  } } = $$props;
  let { selectFirstIfEmpty = false } = $$props;
  let { minCharactersToSearch = 1 } = $$props;
  let { maxItemsToShowInList = 0 } = $$props;
  let { multiple = false } = $$props;
  let { create = false } = $$props;
  let { ignoreAccents = true } = $$props;
  let { matchAllKeywords = true } = $$props;
  let { sortByMatchedKeywords = false } = $$props;
  let { itemFilterFunction = void 0 } = $$props;
  let { itemSortFunction = void 0 } = $$props;
  let { lock = false } = $$props;
  let { delay = 0 } = $$props;
  let { localFiltering = true } = $$props;
  let { localSorting = true } = $$props;
  let { cleanUserText = true } = $$props;
  let { closeOnBlur = false } = $$props;
  let { hideArrow = false } = $$props;
  let { showClear = false } = $$props;
  let { showLoadingIndicator = false } = $$props;
  let { noResultsText = "No results found" } = $$props;
  let { loadingText = "Loading results..." } = $$props;
  let { moreItemsText = "items not shown" } = $$props;
  let { createText = "Not found, add anyway?" } = $$props;
  let { placeholder = void 0 } = $$props;
  let { className = void 0 } = $$props;
  let { inputClassName = void 0 } = $$props;
  let { inputId = void 0 } = $$props;
  let { name = void 0 } = $$props;
  let { selectName = void 0 } = $$props;
  let { selectId = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { html5autocomplete = void 0 } = $$props;
  let { readonly = void 0 } = $$props;
  let { dropdownClassName = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { noInputStyles = false } = $$props;
  let { required = null } = $$props;
  let { debug = false } = $$props;
  let { tabindex = 0 } = $$props;
  let { selectedItem = multiple ? [] : void 0 } = $$props;
  let { value = void 0 } = $$props;
  let { highlightedItem = void 0 } = $$props;
  const uniqueId = "sautocomplete-" + Math.floor(Math.random() * 1e3);
  let input;
  let list;
  let opened = false;
  let loading2 = false;
  let highlightIndex = -1;
  let { text } = $$props;
  let filteredListItems;
  let listItems = [];
  function safeLabelFunction(item) {
    return safeStringFunction(labelFunction, item);
  }
  function safeKeywordsFunction(item) {
    const keywords = safeStringFunction(keywordsFunction, item);
    let result = safeStringFunction(keywordsCleanFunction, keywords);
    result = result.toLowerCase().trim();
    if (ignoreAccents) {
      result = removeAccents(result);
    }
    if (debug) {
      console.log("Extracted keywords: '" + result + "' from item: " + JSON.stringify(item));
    }
    return result;
  }
  function prepareListItems() {
    let timerId;
    if (debug) {
      timerId = `Autocomplete prepare list ${inputId ? `(id: ${inputId})` : ""}`;
      console.time(timerId);
      console.log("Prepare items to search");
      console.log("items: " + JSON.stringify(items));
    }
    if (!Array.isArray(items)) {
      console.warn("Autocomplete items / search function did not return array but", items);
      items = [];
    }
    const length = items ? items.length : 0;
    listItems = new Array(length);
    if (length > 0) {
      items.forEach((item, i) => {
        const listItem = getListItem(item);
        if (listItem === void 0) {
          console.log("Undefined item for: ", item);
        }
        listItems[i] = listItem;
      });
    }
    filteredListItems = listItems;
    if (debug) {
      console.log(listItems.length + " items to search");
      console.timeEnd(timerId);
    }
  }
  function getListItem(item) {
    return {
      keywords: localFiltering ? safeKeywordsFunction(item) : [],
      label: safeLabelFunction(item),
      item
    };
  }
  function onSelectedItemChanged() {
    value = valueFunction(selectedItem);
    text = !multiple ? safeLabelFunction(selectedItem) : "";
    filteredListItems = listItems;
    onChange(selectedItem);
  }
  function unselectItem(tag) {
    if (debug) {
      console.log("unselectItem", tag);
    }
    selectedItem = selectedItem.filter((i) => i !== tag);
    input.focus();
  }
  function highlightFilter(keywords, field) {
    return (item) => {
      let label = item[field];
      const newItem = Object.assign({ highlighted: void 0 }, item);
      newItem.highlighted = label;
      const labelLowercase = label.toLowerCase();
      const labelLowercaseNoAc = ignoreAccents ? removeAccents(labelLowercase) : labelLowercase;
      if (keywords && keywords.length) {
        const positions = [];
        for (let i = 0; i < keywords.length; i++) {
          let keyword = keywords[i];
          if (ignoreAccents) {
            keyword = removeAccents(keyword);
          }
          const keywordLen = keyword.length;
          let pos1 = 0;
          do {
            pos1 = labelLowercaseNoAc.indexOf(keyword, pos1);
            if (pos1 >= 0) {
              let pos2 = pos1 + keywordLen;
              positions.push([pos1, pos2]);
              pos1 = pos2;
            }
          } while (pos1 !== -1);
        }
        if (positions.length > 0) {
          const keywordPatterns = /* @__PURE__ */ new Set();
          for (let i = 0; i < positions.length; i++) {
            const pair = positions[i];
            const pos1 = pair[0];
            const pos2 = pair[1];
            const keywordPattern = labelLowercase.substring(pos1, pos2);
            keywordPatterns.add(keywordPattern);
          }
          for (let keywordPattern of keywordPatterns) {
            if (keywordPattern === "b") {
              continue;
            }
            const reg = new RegExp("(" + keywordPattern + ")", "ig");
            const newHighlighted = newItem.highlighted.replace(reg, "<b>$1</b>");
            newItem.highlighted = newHighlighted;
          }
        }
      }
      return newItem;
    };
  }
  function isConfirmed(listItem) {
    if (!selectedItem) {
      return false;
    }
    if (multiple) {
      return selectedItem.includes(listItem);
    } else {
      return listItem === selectedItem;
    }
  }
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.searchFunction === void 0 && $$bindings.searchFunction && searchFunction !== void 0)
    $$bindings.searchFunction(searchFunction);
  if ($$props.labelFieldName === void 0 && $$bindings.labelFieldName && labelFieldName !== void 0)
    $$bindings.labelFieldName(labelFieldName);
  if ($$props.keywordsFieldName === void 0 && $$bindings.keywordsFieldName && keywordsFieldName !== void 0)
    $$bindings.keywordsFieldName(keywordsFieldName);
  if ($$props.valueFieldName === void 0 && $$bindings.valueFieldName && valueFieldName !== void 0)
    $$bindings.valueFieldName(valueFieldName);
  if ($$props.labelFunction === void 0 && $$bindings.labelFunction && labelFunction !== void 0)
    $$bindings.labelFunction(labelFunction);
  if ($$props.keywordsFunction === void 0 && $$bindings.keywordsFunction && keywordsFunction !== void 0)
    $$bindings.keywordsFunction(keywordsFunction);
  if ($$props.valueFunction === void 0 && $$bindings.valueFunction && valueFunction !== void 0)
    $$bindings.valueFunction(valueFunction);
  if ($$props.keywordsCleanFunction === void 0 && $$bindings.keywordsCleanFunction && keywordsCleanFunction !== void 0)
    $$bindings.keywordsCleanFunction(keywordsCleanFunction);
  if ($$props.textCleanFunction === void 0 && $$bindings.textCleanFunction && textCleanFunction !== void 0)
    $$bindings.textCleanFunction(textCleanFunction);
  if ($$props.beforeChange === void 0 && $$bindings.beforeChange && beforeChange !== void 0)
    $$bindings.beforeChange(beforeChange);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  if ($$props.onFocus === void 0 && $$bindings.onFocus && onFocus !== void 0)
    $$bindings.onFocus(onFocus);
  if ($$props.onBlur === void 0 && $$bindings.onBlur && onBlur !== void 0)
    $$bindings.onBlur(onBlur);
  if ($$props.onCreate === void 0 && $$bindings.onCreate && onCreate !== void 0)
    $$bindings.onCreate(onCreate);
  if ($$props.selectFirstIfEmpty === void 0 && $$bindings.selectFirstIfEmpty && selectFirstIfEmpty !== void 0)
    $$bindings.selectFirstIfEmpty(selectFirstIfEmpty);
  if ($$props.minCharactersToSearch === void 0 && $$bindings.minCharactersToSearch && minCharactersToSearch !== void 0)
    $$bindings.minCharactersToSearch(minCharactersToSearch);
  if ($$props.maxItemsToShowInList === void 0 && $$bindings.maxItemsToShowInList && maxItemsToShowInList !== void 0)
    $$bindings.maxItemsToShowInList(maxItemsToShowInList);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.create === void 0 && $$bindings.create && create !== void 0)
    $$bindings.create(create);
  if ($$props.ignoreAccents === void 0 && $$bindings.ignoreAccents && ignoreAccents !== void 0)
    $$bindings.ignoreAccents(ignoreAccents);
  if ($$props.matchAllKeywords === void 0 && $$bindings.matchAllKeywords && matchAllKeywords !== void 0)
    $$bindings.matchAllKeywords(matchAllKeywords);
  if ($$props.sortByMatchedKeywords === void 0 && $$bindings.sortByMatchedKeywords && sortByMatchedKeywords !== void 0)
    $$bindings.sortByMatchedKeywords(sortByMatchedKeywords);
  if ($$props.itemFilterFunction === void 0 && $$bindings.itemFilterFunction && itemFilterFunction !== void 0)
    $$bindings.itemFilterFunction(itemFilterFunction);
  if ($$props.itemSortFunction === void 0 && $$bindings.itemSortFunction && itemSortFunction !== void 0)
    $$bindings.itemSortFunction(itemSortFunction);
  if ($$props.lock === void 0 && $$bindings.lock && lock !== void 0)
    $$bindings.lock(lock);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.localFiltering === void 0 && $$bindings.localFiltering && localFiltering !== void 0)
    $$bindings.localFiltering(localFiltering);
  if ($$props.localSorting === void 0 && $$bindings.localSorting && localSorting !== void 0)
    $$bindings.localSorting(localSorting);
  if ($$props.cleanUserText === void 0 && $$bindings.cleanUserText && cleanUserText !== void 0)
    $$bindings.cleanUserText(cleanUserText);
  if ($$props.closeOnBlur === void 0 && $$bindings.closeOnBlur && closeOnBlur !== void 0)
    $$bindings.closeOnBlur(closeOnBlur);
  if ($$props.hideArrow === void 0 && $$bindings.hideArrow && hideArrow !== void 0)
    $$bindings.hideArrow(hideArrow);
  if ($$props.showClear === void 0 && $$bindings.showClear && showClear !== void 0)
    $$bindings.showClear(showClear);
  if ($$props.showLoadingIndicator === void 0 && $$bindings.showLoadingIndicator && showLoadingIndicator !== void 0)
    $$bindings.showLoadingIndicator(showLoadingIndicator);
  if ($$props.noResultsText === void 0 && $$bindings.noResultsText && noResultsText !== void 0)
    $$bindings.noResultsText(noResultsText);
  if ($$props.loadingText === void 0 && $$bindings.loadingText && loadingText !== void 0)
    $$bindings.loadingText(loadingText);
  if ($$props.moreItemsText === void 0 && $$bindings.moreItemsText && moreItemsText !== void 0)
    $$bindings.moreItemsText(moreItemsText);
  if ($$props.createText === void 0 && $$bindings.createText && createText !== void 0)
    $$bindings.createText(createText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.inputClassName === void 0 && $$bindings.inputClassName && inputClassName !== void 0)
    $$bindings.inputClassName(inputClassName);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.selectName === void 0 && $$bindings.selectName && selectName !== void 0)
    $$bindings.selectName(selectName);
  if ($$props.selectId === void 0 && $$bindings.selectId && selectId !== void 0)
    $$bindings.selectId(selectId);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.html5autocomplete === void 0 && $$bindings.html5autocomplete && html5autocomplete !== void 0)
    $$bindings.html5autocomplete(html5autocomplete);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.dropdownClassName === void 0 && $$bindings.dropdownClassName && dropdownClassName !== void 0)
    $$bindings.dropdownClassName(dropdownClassName);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.noInputStyles === void 0 && $$bindings.noInputStyles && noInputStyles !== void 0)
    $$bindings.noInputStyles(noInputStyles);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.debug === void 0 && $$bindings.debug && debug !== void 0)
    $$bindings.debug(debug);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.selectedItem === void 0 && $$bindings.selectedItem && selectedItem !== void 0)
    $$bindings.selectedItem(selectedItem);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.highlightedItem === void 0 && $$bindings.highlightedItem && highlightedItem !== void 0)
    $$bindings.highlightedItem(highlightedItem);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.highlightFilter === void 0 && $$bindings.highlightFilter && highlightFilter !== void 0)
    $$bindings.highlightFilter(highlightFilter);
  $$result.css.add(css);
  {
    prepareListItems();
  }
  {
    onSelectedItemChanged();
  }
  highlightedItem = filteredListItems && highlightIndex && highlightIndex >= 0 && highlightIndex < filteredListItems.length ? filteredListItems[highlightIndex].item : null;
  showList = opened;
  clearable = showClear || (lock || multiple) && selectedItem;
  return `<div class="${[
    escape(className ? className : "") + " " + escape(hideArrow || !items.length ? "hide-arrow" : "") + " " + escape(multiple ? "is-multiple" : "") + " autocomplete select is-fullwidth " + escape(uniqueId) + " svelte-1nqq7zl",
    (clearable ? "show-clear" : "") + " " + (showLoadingIndicator && loading2 ? "is-loading" : "")
  ].join(" ").trim()}"><select${add_attribute("name", selectName, 0)}${add_attribute("id", selectId, 0)} ${multiple ? "multiple" : ""} class="${"svelte-1nqq7zl"}">${!multiple && value ? `<option${add_attribute("value", value, 0)} selected class="${"svelte-1nqq7zl"}">${escape(text)}</option>` : `${multiple && selectedItem ? `${each(selectedItem, (i) => {
    return `<option${add_attribute("value", valueFunction(i, true), 0)} selected class="${"svelte-1nqq7zl"}">${escape(safeLabelFunction(i))}
        </option>`;
  })}` : ``}`}</select>
  <div class="${"input-container svelte-1nqq7zl"}">${multiple && selectedItem ? `${each(selectedItem, (tagItem) => {
    return `${slots.tag ? slots.tag({
      label: safeLabelFunction(tagItem),
      item: tagItem,
      unselectItem
    }) : `
          <div class="${"tags has-addons svelte-1nqq7zl"}"><span class="${"tag svelte-1nqq7zl"}">${escape(safeLabelFunction(tagItem))}</span>
            <span class="${"tag is-delete svelte-1nqq7zl"}"></span></div>
        `}`;
  })}` : ``}
    <input type="${"text"}" class="${escape(inputClassName ? inputClassName : "") + " " + escape(noInputStyles ? "" : "input autocomplete-input") + " svelte-1nqq7zl"}"${add_attribute("id", inputId ? inputId : "", 0)}${add_attribute("autocomplete", html5autocomplete ? "on" : "off", 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("name", name, 0)} ${disabled ? "disabled" : ""} ${required ? "required" : ""}${add_attribute("title", title, 0)} ${readonly || lock && selectedItem ? "readonly" : ""}${add_attribute("tabindex", tabindex, 0)}${add_attribute("this", input, 0)}${add_attribute("value", text, 0)}>
    ${clearable ? `<span class="${"autocomplete-clear-button svelte-1nqq7zl"}">\u2716</span>` : ``}</div>
  <div class="${escape(dropdownClassName ? dropdownClassName : "") + " autocomplete-list " + escape(showList ? "" : "hidden") + " is-fullwidth svelte-1nqq7zl"}"${add_attribute("this", list, 0)}>${filteredListItems && filteredListItems.length > 0 ? `${each(filteredListItems, (listItem, i) => {
    return `${listItem && (maxItemsToShowInList <= 0 || i < maxItemsToShowInList) ? `${listItem ? `<div class="${[
      "autocomplete-list-item " + escape(i === highlightIndex ? "selected" : "") + " svelte-1nqq7zl",
      isConfirmed(listItem.item) ? "confirmed" : ""
    ].join(" ").trim()}">${slots.item ? slots.item({
      item: listItem.item,
      label: listItem.highlighted ? listItem.highlighted : listItem.label
    }) : `
                ${listItem.highlighted ? `<!-- HTML_TAG_START -->${listItem.highlighted}<!-- HTML_TAG_END -->` : `<!-- HTML_TAG_START -->${listItem.label}<!-- HTML_TAG_END -->`}
              `}
            </div>` : ``}` : ``}`;
  })}

      ${maxItemsToShowInList > 0 && filteredListItems.length > maxItemsToShowInList ? `${moreItemsText ? `<div class="${"autocomplete-list-item-no-results svelte-1nqq7zl"}">...${escape(filteredListItems.length - maxItemsToShowInList)}
            ${escape(moreItemsText)}</div>` : ``}` : ``}` : `${`${create ? `<div class="${"autocomplete-list-item-create svelte-1nqq7zl"}">${slots.create ? slots.create({ createText }) : `${escape(createText)}`}</div>` : `${noResultsText ? `<div class="${"autocomplete-list-item-no-results svelte-1nqq7zl"}">${slots["no-results"] ? slots["no-results"]({ noResultsText }) : `${escape(noResultsText)}`}</div>` : ``}`}`}`}</div></div>

`;
});
const pageName = "Content";
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  let $$unsubscribe_loading;
  let $page, $$unsubscribe_page;
  $$unsubscribe_session = subscribe(session, (value) => value);
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let workshop = {
    id: null,
    title: null,
    description: null,
    content: null,
    session_start: new Date(Date.now() + 1e3 * 60 * 60 * 24),
    session_end: new Date(Date.now() + 1e3 * 60 * 60 * 25),
    reg_start: new Date(Date.now()),
    reg_end: new Date(Date.now() + 1e3 * 60 * 60 * 24),
    points: null,
    sessiontype_id: null,
    sessioncategory_id: null,
    sessionstatus_id: null,
    location_id: null,
    created_on: null,
    created_by: null,
    updated_on: null,
    updated_by: null,
    registration_token: null,
    attendance_token: null,
    lecturers: []
  };
  let lecturers;
  let valid_session_start;
  let valid_session_end;
  let valid_reg_start;
  let valid_reg_end;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    valid_session_start = valid_session_start && workshop.session_end > workshop.session_start;
    valid_session_end = valid_session_end && workshop.session_end > workshop.session_start;
    valid_reg_start = valid_reg_start && workshop.reg_end > workshop.reg_start;
    valid_reg_end = valid_reg_end && workshop.reg_end > workshop.reg_start;
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
		${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/content" }, {}, {
              default: () => {
                return `Content List`;
              }
            })}
		${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {
              href: $page.url.pathname,
              isCurrentPage: true
            }, {}, {
              default: () => {
                return `${escape(pageName)}`;
              }
            })}`;
          }
        })}`;
      }
    })}

<div class="${"d-flex right"}"><div class="${"card py-2 px-3 right"}">Id: ${escape(workshop.id)}</div></div>

<div><div class="${"py-3"}">${validate_component(TextArea, "TextArea").$$render($$result, {
      rows: "1",
      labelText: "Title",
      placeholder: "Enter title...",
      invalid: !workshop?.title || workshop.title.length < 1,
      invalidText: "Mandatory field",
      value: workshop.title
    }, {
      value: ($$value) => {
        workshop.title = $$value;
        $$settled = false;
      }
    }, {})}</div>

	<div class="${"py-3"}"><label class="${"bx--label"}" for="${"editor"}">Content</label>
		${validate_component(Editor_1, "Editor").$$render($$result, { id: "editor", content: workshop.content }, {
      content: ($$value) => {
        workshop.content = $$value;
        $$settled = false;
      }
    }, {})}</div>

	<div class="${"row"}"><div class="${"mr-10"}"><div class="${"session_datetime py-3"}"><div class="${"d-flex"}"><div><div class="${"mr-4 date-input"}"><label class="${"bx--label"}" for="${"session-start"}">Session start</label>
							${validate_component(DateInput, "DateInput").$$render($$result, {
      id: "session-start",
      format: "yyyy-MM-dd	HH:mm",
      placeholder: "yyyy-mm-dd HH:mm",
      value: workshop.session_start,
      valid: valid_session_start
    }, {
      value: ($$value) => {
        workshop.session_start = $$value;
        $$settled = false;
      },
      valid: ($$value) => {
        valid_session_start = $$value;
        $$settled = false;
      }
    }, {})}</div></div>
					<div><div class="${"date-input"}"><label class="${"bx--label"}" for="${"session-end"}">Session end</label>
							${validate_component(DateInput, "DateInput").$$render($$result, {
      id: "session-end",
      format: "yyyy-MM-dd	HH:mm",
      placeholder: "yyyy-mm-dd HH:mm",
      value: workshop.session_end,
      valid: valid_session_end
    }, {
      value: ($$value) => {
        workshop.session_end = $$value;
        $$settled = false;
      },
      valid: ($$value) => {
        valid_session_end = $$value;
        $$settled = false;
      }
    }, {})}</div></div></div>
				${!valid_session_start || !valid_session_end ? `<div class="${"invalid-label"}">Start date must be earlier than end date</div>` : ``}</div>

			<div class="${"reg_datetime py-3"}"><div class="${"d-flex"}"><div><div class="${"mr-4 date-input"}"><label class="${"bx--label"}" for="${"reg-start"}">Registration start</label>
							${validate_component(DateInput, "DateInput").$$render($$result, {
      id: "reg-start",
      format: "yyyy-MM-dd	HH:mm",
      placeholder: "yyyy-mm-dd HH:mm",
      value: workshop.reg_start,
      valid: valid_reg_start
    }, {
      value: ($$value) => {
        workshop.reg_start = $$value;
        $$settled = false;
      },
      valid: ($$value) => {
        valid_reg_start = $$value;
        $$settled = false;
      }
    }, {})}</div></div>
					<div><div class="${"date-input"}"><label class="${"bx--label"}" for="${"reg-end"}">Registration end</label>
							${validate_component(DateInput, "DateInput").$$render($$result, {
      id: "reg-end",
      format: "yyyy-MM-dd	HH:mm",
      placeholder: "yyyy-mm-dd HH:mm",
      value: workshop.reg_end,
      valid: valid_reg_end
    }, {
      value: ($$value) => {
        workshop.reg_end = $$value;
        $$settled = false;
      },
      valid: ($$value) => {
        valid_reg_end = $$value;
        $$settled = false;
      }
    }, {})}</div></div></div>
				${!valid_session_start || !valid_session_end ? `<div class="${"invalid-label"}">Start date must be earlier than end date</div>` : ``}</div>

			<div class="${"content-select py-3"}">${validate_component(Select, "Select").$$render($$result, {
      id: "select-type",
      labelText: "Type",
      selected: workshop.sessiontype_id
    }, {
      selected: ($$value) => {
        workshop.sessiontype_id = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(SelectItem, "SelectItem").$$render($$result, {
          disabled: true,
          hidden: true,
          value: "-1",
          text: "Choose an option"
        }, {}, {})}
					${``}`;
      }
    })}</div>

			<div class="${"content-select py-3"}">${validate_component(Select, "Select").$$render($$result, {
      id: "select-category",
      labelText: "Category",
      selected: workshop.sessioncategory_id
    }, {
      selected: ($$value) => {
        workshop.sessioncategory_id = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(SelectItem, "SelectItem").$$render($$result, {
          disabled: true,
          hidden: true,
          value: "-1",
          text: "Choose an option"
        }, {}, {})}
					${``}`;
      }
    })}</div>

			<div class="${"content-select py-3"}">${validate_component(Select, "Select").$$render($$result, {
      id: "select-location",
      labelText: "Location",
      selected: workshop.location_id
    }, {
      selected: ($$value) => {
        workshop.location_id = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(SelectItem, "SelectItem").$$render($$result, {
          disabled: true,
          hidden: true,
          value: "-1",
          text: "Choose an option"
        }, {}, {})}
					${``}`;
      }
    })}</div>

			<div class="${"content-select py-3"}">${validate_component(Select, "Select").$$render($$result, {
      id: "select-status",
      labelText: "Status",
      selected: workshop.sessionstatus_id
    }, {
      selected: ($$value) => {
        workshop.sessionstatus_id = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(SelectItem, "SelectItem").$$render($$result, {
          disabled: true,
          hidden: true,
          value: "-1",
          text: "Choose an option"
        }, {}, {})}
					${``}`;
      }
    })}</div></div>

		<div class="${"py-3 mr-10"}" style="${"max-width: 21rem;"}"><label class="${"bx--label"}" for="${"lecturers"}">Lecturers</label>
			${validate_component(SimpleAutocomplete, "AutoComplete").$$render($$result, {
      id: "lecturers",
      multiple: true,
      items: lecturers,
      valueFieldName: "id",
      labelFunction: (lecturer) => lecturer.name + " ( " + lecturer.email + " )",
      hideArrow: true,
      placeholder: "...",
      selectedItem: workshop.lecturers
    }, {
      selectedItem: ($$value) => {
        workshop.lecturers = $$value;
        $$settled = false;
      }
    }, {})}</div></div>
	<div class="${"py-4"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Save`;
      }
    })}
		<span class="${"px-3"}"></span>
		${validate_component(Button, "Button").$$render($$result, { kind: "danger" }, {}, {
      default: () => {
        return `Delete`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_session();
  $$unsubscribe_loading();
  $$unsubscribe_page();
  return $$rendered;
});
export { U5Bidu5D as default };
