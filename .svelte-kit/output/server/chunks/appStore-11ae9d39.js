import { w as writable } from "./HeaderSearch.svelte_svelte_type_style_lang-41e053f4.js";
let loading = writable(false);
const storedTheme = typeof window !== "undefined" ? localStorage.theme : "white";
const theme = writable(storedTheme || "white");
theme.subscribe((value) => {
  if (typeof window !== "undefined") {
    localStorage.theme = value;
  }
});
let open = writable(false);
let inline = writable(true);
let kind = writable("error");
let subtitle = writable("");
let caption = writable("");
let actionButton = writable("");
let action = writable(null);
({
  subscribe: [
    open.subscribe,
    kind.subscribe,
    subtitle.subscribe,
    caption.subscribe,
    actionButton.subscribe,
    action.subscribe
  ],
  showNotification: (_open, _kind, _subtitle, _actionButton = "", _action = null) => {
    open.set(_open);
    inline.set(true);
    kind.set(_kind);
    subtitle.set(_subtitle);
    actionButton.set(_actionButton);
    action.set(_action);
  },
  showToast: (_open, _kind, _subtitle, _caption) => {
    open.set(_open);
    inline.set(false);
    kind.set(_kind);
    subtitle.set(_subtitle);
    caption.set(_caption);
  }
});
export { action as a, actionButton as b, caption as c, inline as i, kind as k, loading as l, open as o, subtitle as s, theme as t };
