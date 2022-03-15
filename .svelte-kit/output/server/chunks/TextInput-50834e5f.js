import { c as create_ssr_component, b as spread, f as escape_attribute_value, e as escape_object, d as escape, a as compute_rest_props, n as getContext, i as add_classes, g as add_attribute, v as validate_component } from "./index-167532fe.js";
import { W as WarningFilled16, a as WarningAltFilled16 } from "./WarningAltFilled16-391da9e9.js";
const EditOff16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "EditOff16" },
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
  ], {})}><path d="${"M30 28.6L3.4 2 2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30 30 28.6zM9.6 26H6v-3.6l7.5-7.5 3.6 3.6L9.6 26zM29.4 6.2L29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l0 0 0 0-8 8 1.4 1.4L20 8.4l3.6 3.6L20 15.6l1.4 1.4 8-8C30.2 8.2 30.2 7 29.4 6.2L29.4 6.2zM25 10.6L21.4 7l3-3L28 7.6 25 10.6z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const TextInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isFluid;
  let errorId;
  let warnId;
  let $$restProps = compute_rest_props($$props, [
    "size",
    "value",
    "type",
    "placeholder",
    "light",
    "disabled",
    "helperText",
    "id",
    "name",
    "labelText",
    "hideLabel",
    "invalid",
    "invalidText",
    "warn",
    "warnText",
    "ref",
    "required",
    "inline",
    "readonly"
  ]);
  let { size = void 0 } = $$props;
  let { value = "" } = $$props;
  let { type = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { light = false } = $$props;
  let { disabled = false } = $$props;
  let { helperText = "" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  let { name = void 0 } = $$props;
  let { labelText = "" } = $$props;
  let { hideLabel = false } = $$props;
  let { invalid = false } = $$props;
  let { invalidText = "" } = $$props;
  let { warn = false } = $$props;
  let { warnText = "" } = $$props;
  let { ref = null } = $$props;
  let { required = false } = $$props;
  let { inline = false } = $$props;
  let { readonly = false } = $$props;
  const ctx = getContext("Form");
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.labelText === void 0 && $$bindings.labelText && labelText !== void 0)
    $$bindings.labelText(labelText);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.invalidText === void 0 && $$bindings.invalidText && invalidText !== void 0)
    $$bindings.invalidText(invalidText);
  if ($$props.warn === void 0 && $$bindings.warn && warn !== void 0)
    $$bindings.warn(warn);
  if ($$props.warnText === void 0 && $$bindings.warnText && warnText !== void 0)
    $$bindings.warnText(warnText);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  isFluid = !!ctx && ctx.isFluid;
  errorId = `error-${id}`;
  warnId = `warn-${id}`;
  return `
<div${add_classes(("bx--form-item bx--text-input-wrapper " + (inline ? "bx--text-input-wrapper--inline" : "") + " " + (light ? "bx--text-input-wrapper--light" : "") + " " + (readonly ? "bx--text-input-wrapper--readonly" : "")).trim())}>${inline ? `<div${add_classes("bx--text-input__label-helper-wrapper".trim())}>${labelText ? `<label${add_attribute("for", id, 0)} class="${[
    escape(inline && !!size && `bx--label--inline--${size}`),
    "bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "")
  ].join(" ").trim()}">${slots.labelText ? slots.labelText({}) : `
            ${escape(labelText)}
          `}</label>` : ``}
      ${!isFluid && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``}</div>` : ``}
  ${!inline && labelText ? `<label${add_attribute("for", id, 0)} class="${[
    escape(inline && !!size && `bx--label--inline--${size}`),
    "bx--label " + (hideLabel ? "bx--visually-hidden" : "") + " " + (disabled ? "bx--label--disabled" : "") + " " + (inline ? "bx--label--inline" : "")
  ].join(" ").trim()}">${slots.labelText ? slots.labelText({}) : `
        ${escape(labelText)}
      `}</label>` : ``}
  <div${add_classes(("bx--text-input__field-outer-wrapper " + (inline ? "bx--text-input__field-outer-wrapper--inline" : "")).trim())}><div${add_attribute("data-invalid", invalid || void 0, 0)}${add_attribute("data-warn", warn || void 0, 0)}${add_classes(("bx--text-input__field-wrapper " + (!invalid && warn ? "bx--text-input__field-wrapper--warning" : "")).trim())}>${invalid ? `${validate_component(WarningFilled16, "WarningFilled16").$$render($$result, { class: "bx--text-input__invalid-icon" }, {}, {})}` : ``}
      ${!invalid && warn ? `${validate_component(WarningAltFilled16, "WarningAltFilled16").$$render($$result, {
    class: "bx--text-input__invalid-icon\n            bx--text-input__invalid-icon--warning"
  }, {}, {})}` : ``}
      ${readonly ? `${validate_component(EditOff16, "EditOff16").$$render($$result, { class: "bx--text-input__readonly-icon" }, {}, {})}` : ``}
      <input${spread([
    {
      "data-invalid": escape_attribute_value(invalid || void 0)
    },
    {
      "aria-invalid": escape_attribute_value(invalid || void 0)
    },
    {
      "data-warn": escape_attribute_value(warn || void 0)
    },
    {
      "aria-describedby": escape_attribute_value(invalid ? errorId : warn ? warnId : void 0)
    },
    { disabled: disabled || null },
    { id: escape_attribute_value(id) },
    { name: escape_attribute_value(name) },
    {
      placeholder: escape_attribute_value(placeholder)
    },
    { type: escape_attribute_value(type) },
    {
      value: escape_attribute_value(value ?? "")
    },
    { required: required || null },
    { readonly: readonly || null },
    escape_object($$restProps),
    {
      class: escape_attribute_value(size && `bx--text-input--${size}`)
    }
  ], {
    classes: "bx--text-input " + (light ? "bx--text-input--light" : "") + " " + (invalid ? "bx--text-input--invalid" : "") + " " + (warn ? "bx--text-input--warn" : "")
  })}${add_attribute("this", ref, 0)}>
      ${isFluid ? `<hr${add_classes("bx--text-input__divider".trim())}>` : ``}
      ${isFluid && !inline && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
      ${isFluid && !inline && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div>
    ${!invalid && !warn && !isFluid && !inline && helperText ? `<div${add_classes(("bx--form__helper-text " + (disabled ? "bx--form__helper-text--disabled" : "") + " " + (inline ? "bx--form__helper-text--inline" : "")).trim())}>${escape(helperText)}</div>` : ``}
    ${!isFluid && invalid ? `<div${add_attribute("id", errorId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(invalidText)}</div>` : ``}
    ${!isFluid && !invalid && warn ? `<div${add_attribute("id", warnId, 0)}${add_classes("bx--form-requirement".trim())}>${escape(warnText)}</div>` : ``}</div></div>`;
});
export { TextInput as T };
