import { writable } from 'svelte/store';

export let loading = writable(false);
export let currentUser = writable({});
const storedTheme = typeof window !== 'undefined' ? localStorage.theme : "white";
export const theme = writable(storedTheme || "white");
theme.subscribe((value) => { if (typeof window !== 'undefined') { localStorage.theme = value } });


export let open = writable(false);
export let inline = writable(true);
export let kind = writable('error');
export let subtitle = writable('');
export let caption = writable('');
export let actionButton = writable('');
export let action = writable(null);

const notifications = {
    subscribe: [
        open.subscribe,
        kind.subscribe,
        subtitle.subscribe,
        caption.subscribe,
        actionButton.subscribe,
        action.subscribe
    ],
    showNotification: (_open, _kind, _subtitle, _actionButton = '', _action = null) => {
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
};

export default notifications;