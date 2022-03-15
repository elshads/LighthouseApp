import { c as create_ssr_component, w as onDestroy, g as add_attribute, b as spread, f as escape_attribute_value, e as escape_object, d as escape, v as validate_component, k as each } from "../../../chunks/index-167532fe.js";
import "../../../chunks/appStore-11ae9d39.js";
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
import { f as formatDateTime, a as formatTime } from "../../../chunks/global-a1cc3230.js";
import { A as Accordion, a as AccordionItem } from "../../../chunks/heatmap-7e194927.js";
import { T as Tile, B as Breadcrumb, a as BreadcrumbItem } from "../../../chunks/Tile-37411b40.js";
import { B as Button } from "../../../chunks/Button-d922f2a3.js";
import "../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { content } from "../../endpoints/workshops/test.js";
import "../../../chunks/ChevronRight16-1783b04e.js";
import "../../../chunks/Link-ce1e6dbc.js";
const Viewer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content: content2 } = $$props;
  let element;
  onDestroy(() => {
  });
  if ($$props.content === void 0 && $$bindings.content && content2 !== void 0)
    $$bindings.content(content2);
  return `<div><div class="${"tt-content"}"><div${add_attribute("this", element, 0)}></div></div></div>`;
});
const CircleFilled16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "CircleFilled16" },
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
  ], {})}><circle cx="${"16"}" cy="${"16"}" r="${"10"}"></circle><path d="${"M16,30A14,14,0,1,1,30,16,14.0158,14.0158,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12.0137,12.0137,0,0,0,16,4Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var CircleFilled16$1 = CircleFilled16;
const Time16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Time16" },
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
  ], {})}><path d="${"M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Z"}"></path><path d="${"M20.59 22L15 16.41 15 7 17 7 17 15.58 22 20.59 20.59 22z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Time16$1 = Time16;
const Badge16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Badge16" },
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
  ], {})}><path d="${"M23 2L24.593 5 28 5.414 25.5 7.667 26 11 23 9.125 20 11 20.5 7.667 18 5.414 21.5 5 23 2z"}"></path><path d="${"M22.7168,13.249l-1.9375-.498A6.9942,6.9942,0,1,1,15.7505,4.22l.499-1.9365A8.99,8.99,0,0,0,8,17.689V30l6-4,6,4V17.7078A8.9627,8.9627,0,0,0,22.7168,13.249ZM18,26.2627l-4-2.6665-4,2.6665V19.05a8.9238,8.9238,0,0,0,8,.0062Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Badge16$1 = Badge16;
const UserSpeaker16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "UserSpeaker16" },
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
  ], {})}><path d="${"M29.4146,19,27.7,17.2852A2.97,2.97,0,0,0,28,16a3,3,0,1,0-3,3,2.97,2.97,0,0,0,1.2864-.3L28,20.4141V28H22V25a7.0078,7.0078,0,0,0-7-7H9a7.008,7.008,0,0,0-7,7v5H30V20.4141A1.988,1.988,0,0,0,29.4146,19ZM4,25a5.006,5.006,0,0,1,5-5h6a5.0059,5.0059,0,0,1,5,5v3H4Z"}"></path><path d="${"M12,4A5,5,0,1,1,7,9a5,5,0,0,1,5-5m0-2a7,7,0,1,0,7,7A7,7,0,0,0,12,2Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var UserSpeaker16$1 = UserSpeaker16;
const Category16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Category16" },
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
  ], {})}><path d="${"M27,22.1414V18a2,2,0,0,0-2-2H17V12h2a2.0023,2.0023,0,0,0,2-2V4a2.0023,2.0023,0,0,0-2-2H13a2.002,2.002,0,0,0-2,2v6a2.002,2.002,0,0,0,2,2h2v4H7a2,2,0,0,0-2,2v4.1421a4,4,0,1,0,2,0V18h8v4.142a4,4,0,1,0,2,0V18h8v4.1414a4,4,0,1,0,2,0ZM13,4h6l.001,6H13ZM8,26a2,2,0,1,1-2-2A2.0023,2.0023,0,0,1,8,26Zm10,0a2,2,0,1,1-2-2A2.0027,2.0027,0,0,1,18,26Zm8,2a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,26,28Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Category16$1 = Category16;
const Location16 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Location16" },
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
  ], {})}><path d="${"M16,18a5,5,0,1,1,5-5A5.0057,5.0057,0,0,1,16,18Zm0-8a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,16,10Z"}"></path><path d="${"M16,30,7.5645,20.0513c-.0479-.0571-.3482-.4515-.3482-.4515A10.8888,10.8888,0,0,1,5,13a11,11,0,0,1,22,0,10.8844,10.8844,0,0,1-2.2148,6.5973l-.0015.0025s-.3.3944-.3447.4474ZM8.8125,18.395c.001.0007.2334.3082.2866.3744L16,26.9079l6.91-8.15c.0439-.0552.2783-.3649.2788-.3657A8.901,8.901,0,0,0,25,13,9,9,0,1,0,7,13a8.9054,8.9054,0,0,0,1.8125,5.395Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Location16$1 = Location16;
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".col-width.svelte-1iy5i3i{min-width:16.25rem}",
  map: null
};
const pageName = "Workshops";
const success = "#42be65";
const fail = "#da1e28";
const Workshops = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let workshopList = [
    {
      id: 1,
      title: "Workshop 1 Title",
      sessionstatus_id: 1,
      sessionstatus_name: "Registered",
      session_start: new Date("2022-02-23 15:00"),
      session_end: new Date("2022-02-23 16:30"),
      points: 90,
      sessioncategory_name: "Equality",
      location_name: "Online"
    },
    {
      id: 2,
      title: "Workshop 2 Title",
      sessionstatus_id: 0,
      sessionstatus_name: "Not Registered",
      session_start: new Date("2022-02-24 12:00"),
      session_end: new Date("2022-02-24 14:00"),
      points: 120,
      sessioncategory_name: "Career",
      location_name: "Online"
    }
  ];
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Lighthouse - ${escape(pageName)}</title>`, ""}`, ""}

${validate_component(Tile, "Tile").$$render($$result, { class: "tile" }, {}, {
    default: () => {
      return `${validate_component(Breadcrumb, "Breadcrumb").$$render($$result, { noTrailingSlash: true }, {}, {
        default: () => {
          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/" }, {}, {
            default: () => {
              return `Home`;
            }
          })}
		${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/workshops", isCurrentPage: true }, {}, {
            default: () => {
              return `Workshops`;
            }
          })}`;
        }
      })}`;
    }
  })}

<h1 class="${"pb-8"}">Workshops</h1>

${workshopList ? `${validate_component(Accordion, "Accordion").$$render($$result, { align: "start", size: "xl" }, {}, {
    default: () => {
      return `${each(workshopList, (item) => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, {}, {}, {
          title: () => {
            return `<div class="${"row between top"}"><h6 class="${"col-8"}">${escape(item.title)}</h6>
						<div class="${"col-4"}"><div class="${"row right"}"><h6 class="${"ml-2 mr-4"}">${escape(formatDateTime(item.session_start))}</h6>
								<h6 class="${"mr-4"}">${escape(item.sessionstatus_name)}</h6>
								${validate_component(CircleFilled16$1, "CircleFilled16").$$render($$result, {
              style: "fill: " + (item.sessionstatus_id > 0 ? success : fail)
            }, {}, {})}</div>
						</div></div>
				`;
          },
          default: () => {
            return `<div class="${"row between top"}"><div class="${"col-8"}">
						${validate_component(Viewer, "Viewer").$$render($$result, { content }, {}, {})}</div>
					<div class="${"col-4 col-width text-right svelte-1iy5i3i"}"><div class="${"d-flex right center-y"}"><p class="${"ml-2 mr-4"}">Duration: ${escape(formatTime(item.session_start))} - ${escape(formatTime(item.session_end))}</p>
							${validate_component(Time16$1, "Time16").$$render($$result, {}, {}, {})}</div>
						<div class="${"d-flex right center-y mt-2"}"><p class="${"ml-2 mr-4"}">Points: ${escape(item.points)}</p>
							${validate_component(Badge16$1, "Badge16").$$render($$result, {}, {}, {})}</div>
						<div class="${"d-flex right center-y mt-2"}"><p class="${"ml-2 mr-4"}">Category: ${escape(item.sessioncategory_name)}</p>
							${validate_component(Category16$1, "Category16").$$render($$result, {}, {}, {})}</div>
						<div class="${"d-flex right center-y mt-2"}"><p class="${"ml-2 mr-4"}">Location: ${escape(item.location_name)}</p>
							${validate_component(Location16$1, "Location16").$$render($$result, {}, {}, {})}</div>
						${item.lecturers ? `<div class="${"d-flex right center-y mt-2"}"><h6 class="${"ml-2 mr-4"}">Lecturer(s)</h6>
								${validate_component(UserSpeaker16$1, "UserSpeaker16").$$render($$result, {}, {}, {})}</div>
							${each(item.lecturers, (lecturer) => {
              return `<p class="${"mt-2 mr-8"}">${escape(lecturer)}</p>`;
            })}` : ``}
						<div class="${"right center-y mt-4"}">${validate_component(Button, "Button").$$render($$result, {
              kind: item.sessionstatus_id > 0 ? "danger" : "primary"
            }, {}, {
              default: () => {
                return `${escape(item.sessionstatus_id > 0 ? "Deregister" : "Register")}`;
              }
            })}</div>
					</div></div>
			`;
          }
        })}`;
      })}`;
    }
  })}` : ``}`;
});
export { Workshops as default };
