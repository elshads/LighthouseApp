import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, k as each, i as add_classes, v as validate_component, s as setContext } from "./index-167532fe.js";
import { L as Link } from "./Link-ce1e6dbc.js";
const BreadcrumbSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["noTrailingSlash", "count"]);
  let { noTrailingSlash = false } = $$props;
  let { count = 3 } = $$props;
  if ($$props.noTrailingSlash === void 0 && $$bindings.noTrailingSlash && noTrailingSlash !== void 0)
    $$bindings.noTrailingSlash(noTrailingSlash);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  return `
<div${spread([escape_object($$restProps)], {
    classes: "bx--skeleton bx--breadcrumb " + (noTrailingSlash ? "bx--breadcrumb--no-trailing-slash" : "")
  })}>${each(Array.from({ length: count }, (_, i) => i), (item) => {
    return `<div${add_classes("bx--breadcrumb-item".trim())}><span${add_classes("bx--link".trim())}>\xA0</span>
    </div>`;
  })}</div>`;
});
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["noTrailingSlash", "skeleton"]);
  let { noTrailingSlash = false } = $$props;
  let { skeleton = false } = $$props;
  if ($$props.noTrailingSlash === void 0 && $$bindings.noTrailingSlash && noTrailingSlash !== void 0)
    $$bindings.noTrailingSlash(noTrailingSlash);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  return `
${skeleton ? `${validate_component(BreadcrumbSkeleton, "BreadcrumbSkeleton").$$render($$result, Object.assign({ noTrailingSlash }, $$restProps), {}, {})}` : `<nav${spread([{ "aria-label": "Breadcrumb" }, escape_object($$restProps)], {})}><ol${add_classes(("bx--breadcrumb " + (noTrailingSlash ? "bx--breadcrumb--no-trailing-slash" : "")).trim())}>${slots.default ? slots.default({}) : ``}</ol></nav>`}`;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "isCurrentPage"]);
  let { href = void 0 } = $$props;
  let { isCurrentPage = false } = $$props;
  setContext("BreadcrumbItem", {});
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.isCurrentPage === void 0 && $$bindings.isCurrentPage && isCurrentPage !== void 0)
    $$bindings.isCurrentPage(isCurrentPage);
  return `
<li${spread([escape_object($$restProps)], {
    classes: "bx--breadcrumb-item " + (isCurrentPage && $$restProps["aria-current"] !== "page" ? "bx--breadcrumb-item--current" : "")
  })}>${href ? `${validate_component(Link, "Link").$$render($$result, {
    href,
    "aria-current": $$restProps["aria-current"]
  }, {}, {
    default: () => {
      return `${slots.default ? slots.default({
        props: {
          "aria-current": $$restProps["aria-current"],
          class: "bx--link"
        }
      }) : ``}`;
    }
  })}` : `${slots.default ? slots.default({
    props: {
      "aria-current": $$restProps["aria-current"],
      class: "bx--link"
    }
  }) : ``}`}</li>`;
});
const Tile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["light"]);
  let { light = false } = $$props;
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  return `
<div${spread([escape_object($$restProps)], {
    classes: "bx--tile " + (light ? "bx--tile--light" : "")
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { Breadcrumb as B, Tile as T, BreadcrumbItem as a };
