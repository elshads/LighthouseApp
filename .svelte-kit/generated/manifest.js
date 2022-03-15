const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\sessioncategory\\index.svelte"),
	() => import("..\\..\\src\\routes\\path-notfound\\__layout.reset.svelte"),
	() => import("..\\..\\src\\routes\\path-notfound\\index.svelte"),
	() => import("..\\..\\src\\routes\\activities\\index.svelte"),
	() => import("..\\..\\src\\routes\\lecturers\\index.svelte"),
	() => import("..\\..\\src\\routes\\workshops\\index.svelte"),
	() => import("..\\..\\src\\routes\\content\\index.svelte"),
	() => import("..\\..\\src\\routes\\content\\[id].svelte"),
	() => import("..\\..\\src\\routes\\profile\\index.svelte"),
	() => import("..\\..\\src\\routes\\users\\index.svelte"),
	() => import("..\\..\\src\\routes\\users\\[id].svelte"),
	() => import("..\\..\\src\\routes\\auth\\__layout.reset.svelte"),
	() => import("..\\..\\src\\routes\\auth\\restorepassword\\index.svelte"),
	() => import("..\\..\\src\\routes\\auth\\confirmation\\index.svelte"),
	() => import("..\\..\\src\\routes\\auth\\confirmation\\[token].svelte"),
	() => import("..\\..\\src\\routes\\auth\\register\\index.svelte"),
	() => import("..\\..\\src\\routes\\auth\\login\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/sessioncategory/index.svelte
	[/^\/sessioncategory\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/path-notfound/index.svelte
	[/^\/path-notfound\/?$/, [c[4], c[5]], []],

	// src/routes/activities/index.svelte
	[/^\/activities\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/lecturers/index.svelte
	[/^\/lecturers\/?$/, [c[0], c[7]], [c[1]], null, 'lecturers'],

	// src/routes/workshops/index.svelte
	[/^\/workshops\/?$/, [c[0], c[8]], [c[1]], null, 'workshops'],

	// src/routes/content/index.svelte
	[/^\/content\/?$/, [c[0], c[9]], [c[1]], null, 'content'],

	// src/routes/content/[id].svelte
	[/^\/content\/([^/]+?)\/?$/, [c[0], c[10]], [c[1]], (m) => ({ id: d(m[1])}), 'content/[id]'],

	// src/routes/profile/index.svelte
	[/^\/profile\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/users/index.svelte
	[/^\/users\/?$/, [c[0], c[12]], [c[1]], null, 'users'],

	// src/routes/users/[id].svelte
	[/^\/users\/([^/]+?)\/?$/, [c[0], c[13]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/auth/restorepassword/index.svelte
	[/^\/auth\/restorepassword\/?$/, [c[14], c[15]], [], null, 'auth/restorepassword'],

	// src/routes/auth/confirmation/index.svelte
	[/^\/auth\/confirmation\/?$/, [c[14], c[16]], [], null, 'auth/confirmation'],

	// src/routes/auth/confirmation/[token].svelte
	[/^\/auth\/confirmation\/([^/]+?)\/?$/, [c[14], c[17]], [], (m) => ({ token: d(m[1])})],

	// src/routes/auth/register/index.svelte
	[/^\/auth\/register\/?$/, [c[14], c[18]], [], null, 'auth/register'],

	// src/routes/auth/login/index.svelte
	[/^\/auth\/login\/?$/, [c[14], c[19]], [], null, 'auth/login']
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];