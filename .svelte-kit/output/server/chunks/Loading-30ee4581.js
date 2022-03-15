import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, g as add_attribute, i as add_classes, d as escape, f as escape_attribute_value } from "./index-167532fe.js";
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let spinnerRadius;
  let $$restProps = compute_rest_props($$props, ["small", "active", "withOverlay", "description", "id"]);
  let { small = false } = $$props;
  let { active = true } = $$props;
  let { withOverlay = true } = $$props;
  let { description = "Active loading indicator" } = $$props;
  let { id = "ccs-" + Math.random().toString(36) } = $$props;
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.withOverlay === void 0 && $$bindings.withOverlay && withOverlay !== void 0)
    $$bindings.withOverlay(withOverlay);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  spinnerRadius = small ? "42" : "44";
  return `${withOverlay ? `<div${spread([escape_object($$restProps)], {
    classes: "bx--loading-overlay " + (!active ? "bx--loading-overlay--stop" : "")
  })}><div aria-atomic="${"true"}"${add_attribute("aria-labelledby", id, 0)}${add_attribute("aria-live", active ? "assertive" : "off", 0)}${add_classes(("bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")).trim())}>
      <label${add_attribute("id", id, 0)}${add_classes("bx--visually-hidden".trim())}>${escape(description)}</label>
      <svg viewBox="${"0 0 100 100"}"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="${"50%"}" cy="${"50%"}"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="${"50%"}" cy="${"50%"}"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div></div>` : `<div${spread([
    { "aria-atomic": "true" },
    {
      "aria-labelledby": escape_attribute_value(id)
    },
    {
      "aria-live": escape_attribute_value(active ? "assertive" : "off")
    },
    escape_object($$restProps)
  ], {
    classes: "bx--loading " + (small ? "bx--loading--small" : "") + " " + (!active ? "bx--loading--stop" : "")
  })}>
    <label${add_attribute("id", id, 0)}${add_classes("bx--visually-hidden".trim())}>${escape(description)}</label>
    <svg viewBox="${"0 0 100 100"}"${add_classes("bx--loading__svg".trim())}><title>${escape(description)}</title>${small ? `<circle cx="${"50%"}" cy="${"50%"}"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__background".trim())}></circle>` : ``}<circle cx="${"50%"}" cy="${"50%"}"${add_attribute("r", spinnerRadius, 0)}${add_classes("bx--loading__stroke".trim())}></circle></svg></div>`}`;
});
export { Loading as L };
