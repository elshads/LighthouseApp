import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape, v as validate_component, m as missing_component, f as escape_attribute_value, g as add_attribute, h as subscribe, i as add_classes, j as createEventDispatcher, k as each, l as set_store_value } from "../../chunks/index-167532fe.js";
import { s as session, p as page } from "../../chunks/stores-bb58c6e6.js";
import { t as theme, l as loading } from "../../chunks/appStore-11ae9d39.js";
import { w as writable } from "../../chunks/HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
import { L as Loading } from "../../chunks/Loading-30ee4581.js";
import { c as config } from "../../chunks/config-352e7003.js";
import { C as Close20 } from "../../chunks/Close20-f5e47c95.js";
import { C as ChevronDown16 } from "../../chunks/ChevronDown16-8933e66a.js";
import { N as Notification } from "../../chunks/Notification-50ae5ebb.js";
import "../../chunks/global-a1cc3230.js";
import "../../chunks/Button-d922f2a3.js";
const IconSkeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = 16 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `
<div${spread([
    escape_object($$restProps),
    {
      style: escape($$restProps.style) + "; width: " + escape(size) + "px; height: " + escape(size) + "px"
    }
  ], {
    classes: "bx--icon--skeleton"
  })}></div>`;
});
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["render", "skeleton"]);
  let { render = void 0 } = $$props;
  let { skeleton = false } = $$props;
  if ($$props.render === void 0 && $$bindings.render && render !== void 0)
    $$bindings.render(render);
  if ($$props.skeleton === void 0 && $$bindings.skeleton && skeleton !== void 0)
    $$bindings.skeleton(skeleton);
  return `${skeleton ? `${validate_component(IconSkeleton, "IconSkeleton").$$render($$result, Object.assign($$restProps), {}, {})}` : `${validate_component(render || missing_component, "svelte:component").$$render($$result, Object.assign($$restProps), {}, {})}`}`;
});
const Menu20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Menu20" },
    { xmlns: "http://www.w3.org/2000/svg" },
    { viewBox: "0 0 20 20" },
    { fill: "currentColor" },
    { width: "20" },
    { height: "20" },
    { class: escape_attribute_value(className) },
    { preserveAspectRatio: "xMidYMid meet" },
    { style: escape_attribute_value(style) },
    { id: escape_attribute_value(id) },
    escape_object(attributes)
  ], {})}><path d="${"M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const shouldRenderHamburgerMenu = writable(false);
const HamburgerMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ariaLabel", "isOpen", "iconMenu", "iconClose", "ref"]);
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { iconMenu = Menu20 } = $$props;
  let { iconClose = Close20 } = $$props;
  let { ref = null } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<button${spread([
    { type: "button" },
    { title: escape_attribute_value(ariaLabel) },
    {
      "aria-label": escape_attribute_value(ariaLabel)
    },
    escape_object($$restProps)
  ], {
    classes: "bx--header__action bx--header__menu-trigger bx--header__menu-toggle"
  })}${add_attribute("this", ref, 0)}>${validate_component((isOpen ? iconClose : iconMenu) || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</button>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let $$restProps = compute_rest_props($$props, [
    "expandedByDefault",
    "isSideNavOpen",
    "uiShellAriaLabel",
    "href",
    "company",
    "platformName",
    "persistentHamburgerMenu",
    "expansionBreakpoint",
    "ref",
    "iconMenu",
    "iconClose"
  ]);
  let $shouldRenderHamburgerMenu, $$unsubscribe_shouldRenderHamburgerMenu;
  $$unsubscribe_shouldRenderHamburgerMenu = subscribe(shouldRenderHamburgerMenu, (value) => $shouldRenderHamburgerMenu = value);
  let { expandedByDefault = true } = $$props;
  let { isSideNavOpen = false } = $$props;
  let { uiShellAriaLabel = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { company = void 0 } = $$props;
  let { platformName = "" } = $$props;
  let { persistentHamburgerMenu = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  let { ref = null } = $$props;
  let { iconMenu = Menu20 } = $$props;
  let { iconClose = Close20 } = $$props;
  let winWidth = void 0;
  if ($$props.expandedByDefault === void 0 && $$bindings.expandedByDefault && expandedByDefault !== void 0)
    $$bindings.expandedByDefault(expandedByDefault);
  if ($$props.isSideNavOpen === void 0 && $$bindings.isSideNavOpen && isSideNavOpen !== void 0)
    $$bindings.isSideNavOpen(isSideNavOpen);
  if ($$props.uiShellAriaLabel === void 0 && $$bindings.uiShellAriaLabel && uiShellAriaLabel !== void 0)
    $$bindings.uiShellAriaLabel(uiShellAriaLabel);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.company === void 0 && $$bindings.company && company !== void 0)
    $$bindings.company(company);
  if ($$props.platformName === void 0 && $$bindings.platformName && platformName !== void 0)
    $$bindings.platformName(platformName);
  if ($$props.persistentHamburgerMenu === void 0 && $$bindings.persistentHamburgerMenu && persistentHamburgerMenu !== void 0)
    $$bindings.persistentHamburgerMenu(persistentHamburgerMenu);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.iconMenu === void 0 && $$bindings.iconMenu && iconMenu !== void 0)
    $$bindings.iconMenu(iconMenu);
  if ($$props.iconClose === void 0 && $$bindings.iconClose && iconClose !== void 0)
    $$bindings.iconClose(iconClose);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    isSideNavOpen = expandedByDefault && winWidth >= expansionBreakpoint && !persistentHamburgerMenu;
    ariaLabel = company ? `${company} ` : "" + (uiShellAriaLabel || $$props["aria-label"] || platformName);
    $$rendered = `

<header${add_attribute("aria-label", ariaLabel, 0)}${add_classes("bx--header".trim())}>${slots["skip-to-content"] ? slots["skip-to-content"]({}) : ``}
  ${$shouldRenderHamburgerMenu && winWidth < expansionBreakpoint || persistentHamburgerMenu ? `${validate_component(HamburgerMenu, "HamburgerMenu").$$render($$result, {
      iconClose,
      iconMenu,
      isOpen: isSideNavOpen
    }, {
      isOpen: ($$value) => {
        isSideNavOpen = $$value;
        $$settled = false;
      }
    }, {})}` : ``}
  <a${spread([{ href: escape_attribute_value(href) }, escape_object($$restProps)], { classes: "bx--header__name" })}${add_attribute("this", ref, 0)}>${company ? `<span${add_classes("bx--header__name--prefix".trim())}>${escape(company)}\xA0</span>` : ``}
    ${slots.platform ? slots.platform({}) : `${escape(platformName)}`}</a>
  ${slots.default ? slots.default({}) : ``}</header>`;
  } while (!$$settled);
  $$unsubscribe_shouldRenderHamburgerMenu();
  return $$rendered;
});
const AppSwitcher20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "AppSwitcher20" },
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
  ], {})}><path d="${"M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
const css$1 = {
  code: ".action-text.svelte-19vx6se.svelte-19vx6se{font-size:16px;line-height:20px;text-decoration:none;color:#fff;width:100%;padding:0 1rem}.action-text.svelte-19vx6se>span.svelte-19vx6se{margin-left:0.75rem;vertical-align:top}",
  map: null
};
const HeaderAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isOpen", "icon", "closeIcon", "text", "ref", "transition"]);
  let { isOpen = false } = $$props;
  let { icon = AppSwitcher20 } = $$props;
  let { closeIcon = Close20 } = $$props;
  let { text = void 0 } = $$props;
  let { ref = null } = $$props;
  let { transition = { duration: 200 } } = $$props;
  createEventDispatcher();
  let refPanel = null;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.closeIcon === void 0 && $$bindings.closeIcon && closeIcon !== void 0)
    $$bindings.closeIcon(closeIcon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  $$result.css.add(css$1);
  return `

<div><button${spread([{ type: "button" }, escape_object($$restProps)], {
    classes: "bx--header__action " + (isOpen ? "bx--header__action--active" : "") + " " + (text ? "action-text" : "") + " svelte-19vx6se"
  })}${add_attribute("this", ref, 0)}>${validate_component(Icon, "Icon").$$render($$result, {
    render: icon,
    style: isOpen ? "display: none" : ""
  }, {}, {})}
    ${validate_component(Icon, "Icon").$$render($$result, {
    render: closeIcon,
    style: !isOpen ? "display: none" : ""
  }, {}, {})}
    ${slots.text ? slots.text({}) : `
      ${text ? `<span class="${"svelte-19vx6se"}">${escape(text)}</span>` : ``}
    `}</button>
  ${isOpen ? `<div${add_classes("bx--header-panel bx--header-panel--expanded".trim())}${add_attribute("this", refPanel, 0)}>${slots.default ? slots.default({}) : ``}</div>` : ``}
</div>`;
});
const css = {
  code: ".subject-divider.svelte-298l2.svelte-298l2{color:#525252;padding-bottom:4px;border-bottom:1px solid #525252;margin:32px 1rem 8px}.subject-divider.svelte-298l2 span.svelte-298l2{font-size:0.75rem;font-weight:400;line-height:1rem;letter-spacing:0.32px;color:#c6c6c6}",
  map: null
};
const HeaderPanelDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<li class="${"subject-divider svelte-298l2"}"><span class="${"svelte-298l2"}">${slots.default ? slots.default({}) : ``}</span>
</li>`;
});
const HeaderPanelLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "ref"]);
  let { href = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--switcher__item".trim())}><a${spread([
    { href: escape_attribute_value(href) },
    {
      rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
    },
    escape_object($$restProps)
  ], {
    classes: "bx--switcher__item-link"
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</a></li>`;
});
const HeaderPanelLinks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--switcher__item".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const HeaderUtilities = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_classes("bx--header__global".trim())}>${slots.default ? slots.default({}) : ``}</div>`;
});
const SideNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fixed", "rail", "ariaLabel", "isOpen", "expansionBreakpoint"]);
  let { fixed = false } = $$props;
  let { rail = false } = $$props;
  let { ariaLabel = void 0 } = $$props;
  let { isOpen = false } = $$props;
  let { expansionBreakpoint = 1056 } = $$props;
  const dispatch = createEventDispatcher();
  let winWidth = void 0;
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.rail === void 0 && $$bindings.rail && rail !== void 0)
    $$bindings.rail(rail);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.expansionBreakpoint === void 0 && $$bindings.expansionBreakpoint && expansionBreakpoint !== void 0)
    $$bindings.expansionBreakpoint(expansionBreakpoint);
  {
    dispatch(isOpen ? "open" : "close");
  }
  return `

${!fixed ? `<div${add_classes(("bx--side-nav__overlay " + (isOpen ? "bx--side-nav__overlay-active" : "")).trim())}></div>` : ``}
<nav${spread([
    {
      "aria-hidden": escape_attribute_value(!isOpen)
    },
    {
      "aria-label": escape_attribute_value(ariaLabel)
    },
    escape_object($$restProps)
  ], {
    classes: "bx--side-nav__navigation bx--side-nav bx--side-nav--ux " + ((rail && winWidth >= expansionBreakpoint ? false : isOpen) ? "bx--side-nav--expanded" : "") + " " + (!isOpen && !rail ? "bx--side-nav--collapsed" : "") + " " + (rail ? "bx--side-nav--rail" : "")
  })}>${slots.default ? slots.default({}) : ``}</nav>`;
});
const SideNavItems = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<ul${add_classes("bx--side-nav__items".trim())}>${slots.default ? slots.default({}) : ``}</ul>`;
});
const SideNavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isSelected", "href", "text", "icon", "ref"]);
  let { isSelected = false } = $$props;
  let { href = void 0 } = $$props;
  let { text = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes("bx--side-nav__item".trim())}><a${spread([
    {
      "aria-current": escape_attribute_value(isSelected ? "page" : void 0)
    },
    { href: escape_attribute_value(href) },
    {
      rel: escape_attribute_value($$restProps.target === "_blank" ? "noopener noreferrer" : void 0)
    },
    escape_object($$restProps)
  ], {
    classes: "bx--side-nav__link " + (isSelected ? "bx--side-nav__link--current" : "")
  })}${add_attribute("this", ref, 0)}>${icon ? `<div${add_classes("bx--side-nav__icon bx--side-nav__icon--small".trim())}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}
    <span${add_classes("bx--side-nav__link-text".trim())}>${escape(text)}</span></a></li>`;
});
const SideNavMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["expanded", "text", "icon", "ref"]);
  let { expanded = false } = $$props;
  let { text = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.expanded === void 0 && $$bindings.expanded && expanded !== void 0)
    $$bindings.expanded(expanded);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<li${add_classes(("bx--side-nav__item " + (icon ? "bx--side-nav__item--icon" : "")).trim())}><button${spread([
    { type: "button" },
    {
      "aria-expanded": escape_attribute_value(expanded)
    },
    escape_object($$restProps)
  ], {
    classes: "bx--side-nav__submenu"
  })}${add_attribute("this", ref, 0)}>${icon ? `<div${add_classes("bx--side-nav__icon".trim())}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>` : ``}
    <span${add_classes("bx--side-nav__submenu-title".trim())}>${escape(text)}</span>
    <div${add_classes("bx--side-nav__icon bx--side-nav__icon--small bx--side-nav__submenu-chevron".trim())}>${validate_component(ChevronDown16 || missing_component, "svelte:component").$$render($$result, { title: "Open Menu", tabindex: "0" }, {}, {})}</div></button>
  <ul role="${"menu"}"${add_classes("bx--side-nav__menu".trim())}>${slots.default ? slots.default({}) : ``}</ul></li>`;
});
const SkipToContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "tabindex"]);
  let { href = "#main-content" } = $$props;
  let { tabindex = "0" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  return `<a${spread([
    { href: escape_attribute_value(href) },
    {
      tabindex: escape_attribute_value(tabindex)
    },
    escape_object($$restProps)
  ], {
    classes: "bx--skip-to-content"
  })}>${slots.default ? slots.default({}) : `Skip to main content`}</a>`;
});
const HeaderGlobalAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isActive", "icon", "ref"]);
  let { isActive = false } = $$props;
  let { icon = void 0 } = $$props;
  let { ref = null } = $$props;
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  return `<button${spread([{ type: "button" }, escape_object($$restProps)], {
    classes: "bx--header__action " + (isActive ? "bx--header__action--active" : "")
  })}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : `
    ${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
  `}</button>`;
});
const UserAvatarFilledAlt20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      "data-carbon-icon": "UserAvatarFilledAlt20"
    },
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
  ], {})}><path d="${"M16,8a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z"}"></path><path d="${"M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2Zm7.9925,22.9258A5.0016,5.0016,0,0,0,19,20H13a5.0016,5.0016,0,0,0-4.9925,4.9258,12,12,0,1,1,15.985,0Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var UserAvatarFilledAlt20$1 = UserAvatarFilledAlt20;
const Logout20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Logout20" },
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
  ], {})}><path d="${"M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z"}"></path><path d="${"M20.586 20.586L24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Logout20$1 = Logout20;
const BrightnessContrast20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      "data-carbon-icon": "BrightnessContrast20"
    },
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
  ], {})}><path d="${"M15 2H17V5H15zM27 15H30V17H27zM15 27H17V30H15zM2 15H5V17H2z"}"></path><path d="${"M6.22 5.73H8.219999999999999V8.73H6.22z"}" transform="${"rotate(-45 7.227 7.236)"}"></path><path d="${"M23.27 6.23H26.27V8.23H23.27z"}" transform="${"rotate(-45 24.766 7.232)"}"></path><path d="${"M23.77 23.27H25.77V26.27H23.77z"}" transform="${"rotate(-45 24.77 24.77)"}"></path><path d="${"M5.47 25.13L7.59 23 9 24.42 6.88 26.54 5.47 25.13zM16 8a8 8 0 108 8A8 8 0 0016 8zm0 14a6 6 0 010-12z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var BrightnessContrast20$1 = BrightnessContrast20;
const Badge20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Badge20" },
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
  ], {})}><path d="${"M23 2L24.593 5 28 5.414 25.5 7.667 26 11 23 9.125 20 11 20.5 7.667 18 5.414 21.5 5 23 2z"}"></path><path d="${"M22.7168,13.249l-1.9375-.498A6.9942,6.9942,0,1,1,15.7505,4.22l.499-1.9365A8.99,8.99,0,0,0,8,17.689V30l6-4,6,4V17.7078A8.9627,8.9627,0,0,0,22.7168,13.249ZM18,26.2627l-4-2.6665-4,2.6665V19.05a8.9238,8.9238,0,0,0,8,.0062Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Badge20$1 = Badge20;
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  let $$unsubscribe_theme;
  $$unsubscribe_session = subscribe(session, (value) => value);
  $$unsubscribe_theme = subscribe(theme, (value) => value);
  let { isSideNavOpen = false } = $$props;
  let isOpen1 = false;
  if ($$props.isSideNavOpen === void 0 && $$bindings.isSideNavOpen && isSideNavOpen !== void 0)
    $$bindings.isSideNavOpen(isSideNavOpen);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Header, "Header").$$render($$result, { href: "/", isSideNavOpen }, {
      isSideNavOpen: ($$value) => {
        isSideNavOpen = $$value;
        $$settled = false;
      }
    }, {
      "skip-to-content": () => {
        return `${validate_component(SkipToContent, "SkipToContent").$$render($$result, {}, {}, {})}
	`;
      },
      default: () => {
        return `<a href="${"/"}" class="${"app-header-name"}"><button class="${"app-header-button"}"><img src="${"img/logo.png"}" alt="${"logo"}" height="${"32"}" class="${"mr-4"}">
			<span>${escape(config.appname)}</span></button></a>
	
	${validate_component(HeaderUtilities, "HeaderUtilities").$$render($$result, {}, {}, {
          default: () => {
            return `<a href="${"/profile"}" class="${"app-header-name"}"><button class="${"app-header-button"}">${validate_component(Badge20$1, "Badge20").$$render($$result, {}, {}, {})}
				<span class="${"px-1 app-header-badge"}">768</span></button></a>
		${validate_component(HeaderGlobalAction, "HeaderGlobalAction").$$render($$result, {
              "aria-label": "Theme",
              icon: BrightnessContrast20$1
            }, {}, {})}
		${validate_component(HeaderAction, "HeaderAction").$$render($$result, {
              icon: UserAvatarFilledAlt20$1,
              closeIcon: UserAvatarFilledAlt20$1,
              isOpen: isOpen1
            }, {
              isOpen: ($$value) => {
                isOpen1 = $$value;
                $$settled = false;
              }
            }, {
              default: () => {
                return `${validate_component(HeaderPanelLinks, "HeaderPanelLinks").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(HeaderPanelDivider, "HeaderPanelDivider").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher subject 1`;
                      }
                    })}
				${validate_component(HeaderPanelLink, "HeaderPanelLink").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher item 1`;
                      }
                    })}
				${validate_component(HeaderPanelLink, "HeaderPanelLink").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher item 2`;
                      }
                    })}
				${validate_component(HeaderPanelLink, "HeaderPanelLink").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher item 3`;
                      }
                    })}
				${validate_component(HeaderPanelLink, "HeaderPanelLink").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher item 4`;
                      }
                    })}
				${validate_component(HeaderPanelDivider, "HeaderPanelDivider").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher subject 2`;
                      }
                    })}
				${validate_component(HeaderPanelLink, "HeaderPanelLink").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher item 1`;
                      }
                    })}
				${validate_component(HeaderPanelLink, "HeaderPanelLink").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher item 2`;
                      }
                    })}
				${validate_component(HeaderPanelDivider, "HeaderPanelDivider").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher subject 3`;
                      }
                    })}
				${validate_component(HeaderPanelLink, "HeaderPanelLink").$$render($$result, {}, {}, {
                      default: () => {
                        return `Switcher item 1`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}
		${validate_component(HeaderGlobalAction, "HeaderGlobalAction").$$render($$result, { "aria-label": "Logout", icon: Logout20$1 }, {}, {})}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_session();
  $$unsubscribe_theme();
  return $$rendered;
});
const User20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "User20" },
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
  ], {})}><path d="${"M16 4a5 5 0 11-5 5 5 5 0 015-5m0-2a7 7 0 107 7A7 7 0 0016 2zM26 30H24V25a5 5 0 00-5-5H13a5 5 0 00-5 5v5H6V25a7 7 0 017-7h6a7 7 0 017 7z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var User20$1 = User20;
const SecurityServices20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "SecurityServices20" },
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
  ], {})}><path d="${"M30,24V22H27.8989a4.9678,4.9678,0,0,0-.7319-1.7529l1.49-1.49-1.414-1.414-1.49,1.49A4.9678,4.9678,0,0,0,24,18.1011V16H22v2.1011a4.9678,4.9678,0,0,0-1.7529.7319l-1.49-1.49-1.414,1.414,1.49,1.49A4.9678,4.9678,0,0,0,18.1011,22H16v2h2.1011a4.9678,4.9678,0,0,0,.7319,1.7529l-1.49,1.49,1.414,1.414,1.49-1.49A4.9678,4.9678,0,0,0,22,27.8989V30h2V27.8989a4.9678,4.9678,0,0,0,1.7529-.7319l1.49,1.49,1.414-1.414-1.49-1.49A4.9678,4.9678,0,0,0,27.8989,24Zm-7,2a3,3,0,1,1,3-3A3.0033,3.0033,0,0,1,23,26Z"}"></path><path d="${"M14,26.667l-3.2344-1.7246A8.9858,8.9858,0,0,1,6,17V4H26V14h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V17a10.9814,10.9814,0,0,0,5.8242,9.707L14,28.9336Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var SecurityServices20$1 = SecurityServices20;
const Event20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Event20" },
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
  ], {})}><path d="${"M28,6a2,2,0,0,0-2-2H22V2H20V4H12V2H10V4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2h4V26H6V6h4V8h2V6h8V8h2V6h4v6h2Z"}"></path><path d="${"M21 15L23.549 19.938 29 20.729 25 24.573 26 30 21 27.438 16 30 17 24.573 13 20.729 18.6 19.938 21 15z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Event20$1 = Event20;
const Query20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Query20" },
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
  ], {})}><circle cx="${"11"}" cy="${"15.5"}" r="${"1.5"}"></circle><path d="${"M12,12H10V8h2a2,2,0,0,0,0-4H10A2.0023,2.0023,0,0,0,8,6v.5H6V6a4.0045,4.0045,0,0,1,4-4h2a4,4,0,0,1,0,8Z"}"></path><path d="${"M22.4479,21.0337A10.971,10.971,0,0,0,19.9211,4.7446l-.999,1.73A8.9967,8.9967,0,1,1,5,14H3a10.9916,10.9916,0,0,0,18.0338,8.4478L28.5859,30,30,28.5859Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Query20$1 = Query20;
const Launch20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Launch20" },
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
  ], {})}><path d="${"M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"}"></path><path d="${"M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Launch20$1 = Launch20;
const Portfolio20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Portfolio20" },
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
  ], {})}><path d="${"M28,10H22V6a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v4H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V12A2,2,0,0,0,28,10ZM12,6h8v4H12ZM4,26V12H28V26Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Portfolio20$1 = Portfolio20;
const Course20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Course20" },
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
  ], {})}><path d="${"M24,30H8a2.0023,2.0023,0,0,1-2-2V4A2.002,2.002,0,0,1,8,2H24a2.0023,2.0023,0,0,1,2,2V20.6182l-5-2.5-5,2.5V4H8V28H24V24h2v4A2.0027,2.0027,0,0,1,24,30ZM21,15.8818l3,1.5V4H18V17.3818Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Course20$1 = Course20;
const EventSchedule20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "EventSchedule20" },
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
  ], {})}><path d="${"M21,30a8,8,0,1,1,8-8A8,8,0,0,1,21,30Zm0-14a6,6,0,1,0,6,6A6,6,0,0,0,21,16Z"}"></path><path d="${"M22.59 25L20 22.41 20 18 22 18 22 21.59 24 23.59 22.59 25z"}"></path><path d="${"M28,6a2,2,0,0,0-2-2H22V2H20V4H12V2H10V4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2h4V26H6V6h4V8h2V6h8V8h2V6h4v6h2Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var EventSchedule20$1 = EventSchedule20;
const GroupPresentation20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
      "data-carbon-icon": "GroupPresentation20"
    },
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
  ], {})}><path d="${"M10 30H8V27H4v3H2V27a2.0023 2.0023 0 012-2H8a2.0023 2.0023 0 012 2zM30 30H28V27H24v3H22V27a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2zM20 30H18V27H14v3H12V27a2.0023 2.0023 0 012-2h4a2.0023 2.0023 0 012 2z"}"></path><circle cx="${"16"}" cy="${"22"}" r="${"2"}"></circle><circle cx="${"6"}" cy="${"22"}" r="${"2"}"></circle><circle cx="${"26"}" cy="${"22"}" r="${"2"}"></circle><circle cx="${"21"}" cy="${"18"}" r="${"2"}"></circle><circle cx="${"11"}" cy="${"18"}" r="${"2"}"></circle><path d="${"M26,14H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2v8A2.0023,2.0023,0,0,1,26,14ZM6,4v8H26V4Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var GroupPresentation20$1 = GroupPresentation20;
const CalendarHeatMap20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "CalendarHeatMap20" },
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
  ], {})}><path d="${"M26,4H22V2H20V4H12V2H10V4H6A2.0025,2.0025,0,0,0,4,6V26a2.0025,2.0025,0,0,0,2,2H26a2.0025,2.0025,0,0,0,2-2V6A2.0025,2.0025,0,0,0,26,4ZM6,6h4V8h2V6h8V8h2V6h4l0,4H6Zm0,6h5v6H6ZM19,26H13V20h6Zm0-8H13V12h6Zm2,8V20h5l.0012,6Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var CalendarHeatMap20$1 = CalendarHeatMap20;
const Collaborate20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Collaborate20" },
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
  ], {})}><path d="${"M6 21V20H4v1a7 7 0 007 7h3V26H11A5 5 0 016 21zM24 11v1h2V11a7 7 0 00-7-7H16V6h3A5 5 0 0124 11zM11 11H5a3 3 0 00-3 3v2H4V14a1 1 0 011-1h6a1 1 0 011 1v2h2V14A3 3 0 0011 11zM8 10A4 4 0 104 6 4 4 0 008 10zM8 4A2 2 0 116 6 2 2 0 018 4zM27 25H21a3 3 0 00-3 3v2h2V28a1 1 0 011-1h6a1 1 0 011 1v2h2V28A3 3 0 0027 25zM20 20a4 4 0 104-4A4 4 0 0020 20zm6 0a2 2 0 11-2-2A2 2 0 0126 20z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Collaborate20$1 = Collaborate20;
const TableOfContents20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "TableOfContents20" },
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
  ], {})}><path d="${"M4 6H22V8H4zM4 12H22V14H4zM4 18H22V20H4zM4 24H22V26H4zM26 6H28V8H26zM26 12H28V14H26zM26 18H28V20H26zM26 24H28V26H26z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var TableOfContents20$1 = TableOfContents20;
const Education20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Education20" },
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
  ], {})}><path d="${"M26 30H24V27a5.0059 5.0059 0 00-5-5H13a5.0059 5.0059 0 00-5 5v3H6V27a7.0082 7.0082 0 017-7h6a7.0082 7.0082 0 017 7zM5 6A1 1 0 004 7v9H6V7A1 1 0 005 6z"}"></path><path d="${"M4,2V4H9v7a7,7,0,0,0,14,0V4h5V2Zm7,2H21V7H11Zm5,12a5,5,0,0,1-5-5V9H21v2A5,5,0,0,1,16,16Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Education20$1 = Education20;
const navLinks = [
  {
    id: 200,
    text: "Activities",
    icon: Event20$1,
    href: null,
    newtab: false,
    parent_id: null,
    sequence: 1
  },
  {
    id: 201,
    text: "All Activities",
    icon: CalendarHeatMap20$1,
    href: "/activities",
    newtab: false,
    parent_id: 200,
    sequence: 2
  },
  {
    id: 202,
    text: "Workshops",
    icon: GroupPresentation20$1,
    href: "/workshops",
    newtab: false,
    parent_id: 200,
    sequence: 3
  },
  {
    id: 203,
    text: "Events",
    icon: EventSchedule20$1,
    href: "/events",
    newtab: false,
    parent_id: 200,
    sequence: 4
  },
  {
    id: 204,
    text: "Sessions",
    icon: Course20$1,
    href: "/sessions",
    newtab: false,
    parent_id: 200,
    sequence: 5
  },
  {
    id: 300,
    text: "Opportunities",
    icon: Portfolio20$1,
    href: null,
    newtab: false,
    parent_id: null,
    sequence: 6
  },
  {
    id: 301,
    text: "Job Fairs",
    icon: Query20$1,
    href: "/jobfairs",
    newtab: false,
    parent_id: 300,
    sequence: 7
  },
  {
    id: 302,
    text: "Careers Portal",
    icon: Launch20$1,
    href: "https://www.fh-swf.de/de/karriere/jobs_fuer_studierende_und_absolventinnen/index.php",
    newtab: true,
    parent_id: 300,
    sequence: 8
  },
  {
    id: 401,
    text: "Appointments",
    icon: Collaborate20$1,
    href: "/appointments",
    newtab: false,
    parent_id: null,
    sequence: 10
  },
  {
    id: 800,
    text: "Administration",
    icon: SecurityServices20$1,
    href: null,
    newtab: false,
    parent_id: null,
    sequence: 11
  },
  {
    id: 801,
    text: "Users",
    icon: User20$1,
    href: "/users",
    newtab: false,
    parent_id: 800,
    sequence: 12
  },
  {
    id: 802,
    text: "Lecturers",
    icon: Education20$1,
    href: "/lecturers",
    newtab: false,
    parent_id: 800,
    sequence: 13
  },
  {
    id: 803,
    text: "Content",
    icon: TableOfContents20$1,
    href: "/content",
    newtab: false,
    parent_id: 800,
    sequence: 14
  }
];
const Home20 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    { "data-carbon-icon": "Home20" },
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
  ], {})}><path d="${"M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"}"></path>${slots.default ? slots.default({}) : `
    ${title ? `<title>${escape(title)}</title>` : ``}
  `}</svg>`;
});
var Home20$1 = Home20;
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { isSideNavOpen = false } = $$props;
  function navChildren(navLink_id) {
    return navLinks.filter((e) => e.parent_id === navLink_id);
  }
  let currentPage = [];
  let currentPageParentId = 0;
  if ($$props.isSideNavOpen === void 0 && $$bindings.isSideNavOpen && isSideNavOpen !== void 0)
    $$bindings.isSideNavOpen(isSideNavOpen);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    currentPage = navLinks.filter((e) => $page.url.pathname.includes(e.href));
    currentPageParentId = currentPage.length > 0 ? currentPage[0].parent_id ? currentPage[0].parent_id : 0 : 0;
    $$rendered = `${validate_component(SideNav, "SideNav").$$render($$result, { rail: true, isOpen: isSideNavOpen }, {
      isOpen: ($$value) => {
        isSideNavOpen = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(SideNavItems, "SideNavItems").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(SideNavLink, "SideNavLink").$$render($$result, {
              icon: Home20$1,
              text: "Home",
              href: "/",
              isSelected: $page.url.pathname === "/"
            }, {}, {})}
		${each(navLinks, (navLink) => {
              return `${!navLink.parent_id && navChildren(navLink.id).length > 0 ? `${validate_component(SideNavMenu, "SideNavMenu").$$render($$result, {
                icon: navLink.icon,
                text: navLink.text,
                class: currentPageParentId === navLink.id ? "selectedmenu" : ""
              }, {}, {
                default: () => {
                  return `${each(navChildren(navLink.id), (child) => {
                    return `${validate_component(SideNavLink, "SideNavLink").$$render($$result, {
                      class: "submenu-item",
                      icon: child.icon,
                      text: child.text,
                      href: child.href,
                      target: child.newtab ? "_blank" : "",
                      isSelected: $page.url.pathname.includes(child.href)
                    }, {}, {})}`;
                  })}
				`;
                }
              })}` : `${!navLink.parent_id && navChildren(navLink.id).length === 0 ? `${validate_component(SideNavLink, "SideNavLink").$$render($$result, {
                icon: navLink.icon,
                text: navLink.text,
                href: navLink.href,
                target: navLink.newtab ? "_blank" : "",
                isSelected: $page.url.pathname.includes(navLink.href)
              }, {}, {})}` : ``}`}`;
            })}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
async function load({ session: session2 }) {
  if (!session2.authenticated) {
    return { status: 302, redirect: "/auth/login" };
  }
  return {};
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  let $theme, $$unsubscribe_theme;
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let isSideNavOpen = false;
  set_store_value(loading, $loading = true, $loading);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (typeof window !== "undefined") {
        document.documentElement.setAttribute("theme", $theme);
      }
    }
    {
      if (!$session.authenticated) {
        location.reload();
      }
    }
    $$rendered = `${$$result.head += `<meta content="${"noindex"}" data-svelte="svelte-1dimbmm"><link rel="${"stylesheet"}"${add_attribute("href", `/css/charts/styles${$theme === "g100" ? "-g100" : ""}.min.css`, 0)} data-svelte="svelte-1dimbmm">`, ""}

${validate_component(AppBar, "AppBar").$$render($$result, { isSideNavOpen }, {
      isSideNavOpen: ($$value) => {
        isSideNavOpen = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(NavBar, "NavBar").$$render($$result, { isSideNavOpen }, {
      isSideNavOpen: ($$value) => {
        isSideNavOpen = $$value;
        $$settled = false;
      }
    }, {})}

<div class="${"content"}">${slots.default ? slots.default({}) : ``}
	${validate_component(Notification, "Notification").$$render($$result, {}, {}, {})}</div>

${validate_component(Loading, "Loading").$$render($$result, { active: $loading }, {
      active: ($$value) => {
        $loading = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  $$unsubscribe_session();
  $$unsubscribe_theme();
  $$unsubscribe_loading();
  return $$rendered;
});
export { _layout as default, load };
