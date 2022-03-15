import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, g as add_attribute, i as add_classes, v as validate_component, m as missing_component, f as escape_attribute_value } from "./index-167532fe.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "href", "inline", "icon", "disabled", "visited", "ref"]);
  let { size = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { inline = false } = $$props;
  let { icon = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { visited = false } = $$props;
  let { ref = null } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.visited === void 0 && $$bindings.visited && visited !== void 0)
    $$bindings.visited(visited);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `
${disabled ? `<p${spread([escape_object($$restProps)], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}${!inline && icon ? `<div${add_classes("bx--link__icon".trim())}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}</p>` : `<a${spread([
    {
      rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
    },
    { href: escape_attribute_value(href) },
    escape_object($$restProps)
  ], {
    classes: "bx--link " + (disabled ? "bx--link--disabled" : "") + " " + (inline ? "bx--link--inline" : "") + " " + (visited ? "bx--link--visited" : "") + " " + (size === "sm" ? "bx--link--sm" : "") + " " + (size === "lg" ? "bx--link--lg" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}${!inline && icon ? `<div${add_classes("bx--link__icon".trim())}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}</a>`}`;
});
export { Link as L };
