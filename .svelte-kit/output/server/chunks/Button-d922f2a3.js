import { c as create_ssr_component, a as compute_rest_props, b as spread, f as escape_attribute_value, e as escape_object, d as escape, t as compute_slots, n as getContext, v as validate_component, g as add_attribute, i as add_classes, m as missing_component } from "./index-167532fe.js";
const ButtonSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "size", "small"]);
  let { href = void 0 } = $$props;
  let { size = "default" } = $$props;
  let { small = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  return `
${href ? `<a${spread([
    { href: escape_attribute_value(href) },
    {
      rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
    },
    { role: "button" },
    escape_object($$restProps)
  ], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" || small ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}>${escape("")}</a>` : `<div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--btn " + (size === "field" ? "bx--btn--field" : "") + " " + (size === "small" || small ? "bx--btn--sm" : "") + " " + (size === "lg" ? "bx--btn--lg" : "") + " " + (size === "xl" ? "bx--btn--xl" : "")
  })}></div>`}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonProps;
  let $$restProps = compute_rest_props($$props, [
    "kind",
    "size",
    "expressive",
    "isSelected",
    "hasIconOnly",
    "icon",
    "iconDescription",
    "tooltipAlignment",
    "tooltipPosition",
    "as",
    "skeleton",
    "disabled",
    "href",
    "tabindex",
    "type",
    "ref"
  ]);
  let $$slots = compute_slots(slots);
  let { kind = "primary" } = $$props;
  let { size = "default" } = $$props;
  let { expressive = false } = $$props;
  let { isSelected = false } = $$props;
  let { hasIconOnly = false } = $$props;
  let { icon = void 0 } = $$props;
  let { iconDescription = void 0 } = $$props;
  let { tooltipAlignment = "center" } = $$props;
  let { tooltipPosition = "bottom" } = $$props;
  let { as = false } = $$props;
  let { skeleton = false } = $$props;
  let { disabled = false } = $$props;
  let { href = void 0 } = $$props;
  let { tabindex = "0" } = $$props;
  let { type = "button" } = $$props;
  let { ref = null } = $$props;
  const ctx = getContext("ComposedModal");
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.expressive === void 0 && $$bindings.expressive && expressive !== void 0)
    $$bindings.expressive(expressive);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.hasIconOnly === void 0 && $$bindings.hasIconOnly && hasIconOnly !== void 0)
    $$bindings.hasIconOnly(hasIconOnly);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.iconDescription === void 0 && $$bindings.iconDescription && iconDescription !== void 0)
    $$bindings.iconDescription(iconDescription);
  if ($$props.tooltipAlignment === void 0 && $$bindings.tooltipAlignment && tooltipAlignment !== void 0)
    $$bindings.tooltipAlignment(tooltipAlignment);
  if ($$props.tooltipPosition === void 0 && $$bindings.tooltipPosition && tooltipPosition !== void 0)
    $$bindings.tooltipPosition(tooltipPosition);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  {
    if (ctx && ref) {
      ctx.declareRef(ref);
    }
  }
  hasIconOnly = icon && !$$slots.default;
  buttonProps = {
    type: href && !disabled ? void 0 : type,
    tabindex,
    disabled: disabled === true ? true : void 0,
    href,
    "aria-pressed": hasIconOnly && kind === "ghost" ? isSelected : void 0,
    ...$$restProps,
    class: [
      "bx--btn",
      expressive && "bx--btn--expressive",
      (size === "small" && !expressive || size === "sm" && !expressive || size === "small" && !expressive) && "bx--btn--sm",
      size === "field" && !expressive || size === "md" && !expressive && "bx--btn--md",
      size === "field" && "bx--btn--field",
      size === "small" && "bx--btn--sm",
      size === "lg" && "bx--btn--lg",
      size === "xl" && "bx--btn--xl",
      kind && `bx--btn--${kind}`,
      disabled && "bx--btn--disabled",
      hasIconOnly && "bx--btn--icon-only",
      hasIconOnly && "bx--tooltip__trigger",
      hasIconOnly && "bx--tooltip--a11y",
      hasIconOnly && tooltipPosition && `bx--btn--icon-only--${tooltipPosition}`,
      hasIconOnly && tooltipAlignment && `bx--tooltip--align-${tooltipAlignment}`,
      hasIconOnly && isSelected && kind === "ghost" && "bx--btn--selected",
      $$restProps.class
    ].filter(Boolean).join(" ")
  };
  return `
${skeleton ? `${validate_component(ButtonSkeleton, "ButtonSkeleton").$$render($$result, Object.assign({ href }, { size }, $$restProps, { style: hasIconOnly && "width: 3rem;" }), {}, {})}` : `${as ? `${slots.default ? slots.default({ props: buttonProps }) : ``}` : `${href && !disabled ? `
  <a${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render($$result, {
    "aria-hidden": "true",
    class: "bx--btn__icon",
    "aria-label": iconDescription
  }, {}, {})}</a>` : `<button${spread([escape_object(buttonProps)], {})}${add_attribute("this", ref, 0)}>${hasIconOnly ? `<span${add_classes("bx--assistive-text".trim())}>${escape(iconDescription)}</span>` : ``}
    ${slots.default ? slots.default({}) : ``}${validate_component(icon || missing_component, "svelte:component").$$render($$result, {
    "aria-hidden": "true",
    class: "bx--btn__icon",
    "aria-label": iconDescription
  }, {}, {})}</button>`}`}`}`;
});
export { Button as B };
