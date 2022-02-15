const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\profile\\index.svelte"),
	() => import("..\\..\\src\\routes\\users\\index.svelte"),
	() => import("..\\..\\src\\routes\\users\\[id].svelte"),
	() => import("..\\..\\src\\routes\\auth\\__layout.reset.svelte"),
	() => import("..\\..\\src\\routes\\auth\\confirmation\\index.svelte"),
	() => import("..\\..\\src\\routes\\auth\\confirmation\\[token].svelte"),
	() => import("..\\..\\src\\routes\\auth\\register\\index.svelte"),
	() => import("..\\..\\src\\routes\\auth\\restore\\index.svelte"),
	() => import("..\\..\\src\\routes\\auth\\login\\index.svelte"),
	() => import("..\\..\\src\\routes\\[...path]\\__layout.reset.svelte"),
	() => import("..\\..\\src\\routes\\[...path]\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/profile/index.svelte
	[/^\/profile\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/users/index.svelte
	[/^\/users\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/users/[id].svelte
	[/^\/users\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/auth/confirmation/index.svelte
	[/^\/auth\/confirmation\/?$/, [c[6], c[7]], []],

	// src/routes/auth/confirmation/[token].svelte
	[/^\/auth\/confirmation\/([^/]+?)\/?$/, [c[6], c[8]], [], (m) => ({ token: d(m[1])})],

	// src/routes/auth/register/index.svelte
	[/^\/auth\/register\/?$/, [c[6], c[9]], []],

	// src/routes/auth/restore/index.svelte
	[/^\/auth\/restore\/?$/, [c[6], c[10]], []],

	// src/routes/auth/login/index.svelte
	[/^\/auth\/login\/?$/, [c[6], c[11]], []],

	// src/routes/[...path]/index.svelte
	[/^(?:\/(.*))?\/?$/, [c[12], c[13]], [], (m) => ({ path: d(m[1] || '')})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];