export const manifest = {
	appDir: "_app",
	assets: new Set(["css/all.css","css/bootstrap-icons/bootstrap-icons.css","css/bootstrap-icons/fonts/bootstrap-icons.woff","css/bootstrap-icons/fonts/bootstrap-icons.woff2","css/charts/styles-g100.min.css","css/charts/styles.min.css","css/fonts/JetBrainsMono-Regular.woff2","css/global.css","css/tiptap.css","img/company-logo.png","img/favicon.png","img/logo.png","img/logo_orig.png"]),
	_: {
		mime: {".css":"text/css",".woff":"font/woff",".woff2":"font/woff2",".png":"image/png"},
		entry: {"file":"start-8a4f8e5c.js","js":["start-8a4f8e5c.js","chunks/vendor-cf8775f0.js","chunks/singletons-d1fb5791.js"],"css":["assets/vendor-5f558de4.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "sessioncategory",
				pattern: /^\/sessioncategory\/?$/,
				params: null,
				path: "/sessioncategory",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/sessioncategory\/infex\/?$/,
				params: null,
				load: () => import('./entries/endpoints/sessioncategory/infex.js')
			},
			{
				type: 'page',
				key: "path-notfound",
				pattern: /^\/path-notfound\/?$/,
				params: null,
				path: "/path-notfound",
				shadow: null,
				a: [4,5],
				b: []
			},
			{
				type: 'page',
				key: "activities",
				pattern: /^\/activities\/?$/,
				params: null,
				path: "/activities",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				key: "lecturers",
				pattern: /^\/lecturers\/?$/,
				params: null,
				path: "/lecturers",
				shadow: () => import('./entries/endpoints/lecturers/index.js'),
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				key: "workshops",
				pattern: /^\/workshops\/?$/,
				params: null,
				path: "/workshops",
				shadow: () => import('./entries/endpoints/workshops/index.js'),
				a: [0,8],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/workshops\/test\/?$/,
				params: null,
				load: () => import('./entries/endpoints/workshops/test.js')
			},
			{
				type: 'page',
				key: "content",
				pattern: /^\/content\/?$/,
				params: null,
				path: "/content",
				shadow: () => import('./entries/endpoints/content/index.js'),
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				key: "content/[id]",
				pattern: /^\/content\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: () => import('./entries/endpoints/content/_id_.js'),
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				key: "profile",
				pattern: /^\/profile\/?$/,
				params: null,
				path: "/profile",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				key: "users",
				pattern: /^\/users\/?$/,
				params: null,
				path: "/users",
				shadow: () => import('./entries/endpoints/users/index.js'),
				a: [0,12],
				b: [1]
			},
			{
				type: 'page',
				key: "users/[id]",
				pattern: /^\/users\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: null,
				a: [0,13],
				b: [1]
			},
			{
				type: 'page',
				key: "auth/restorepassword",
				pattern: /^\/auth\/restorepassword\/?$/,
				params: null,
				path: "/auth/restorepassword",
				shadow: () => import('./entries/endpoints/auth/restorepassword/index.js'),
				a: [14,15],
				b: []
			},
			{
				type: 'page',
				key: "auth/confirmation",
				pattern: /^\/auth\/confirmation\/?$/,
				params: null,
				path: "/auth/confirmation",
				shadow: () => import('./entries/endpoints/auth/confirmation/index.js'),
				a: [14,16],
				b: []
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/confirmation\/([^/]+?)\.json$/,
				params: (m) => ({ token: m[1]}),
				load: () => import('./entries/endpoints/auth/confirmation/_token_.json.js')
			},
			{
				type: 'page',
				key: "auth/confirmation/[token]",
				pattern: /^\/auth\/confirmation\/([^/]+?)\/?$/,
				params: (m) => ({ token: m[1]}),
				path: null,
				shadow: null,
				a: [14,17],
				b: []
			},
			{
				type: 'page',
				key: "auth/register",
				pattern: /^\/auth\/register\/?$/,
				params: null,
				path: "/auth/register",
				shadow: () => import('./entries/endpoints/auth/register/index.js'),
				a: [14,18],
				b: []
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/logout\/?$/,
				params: null,
				load: () => import('./entries/endpoints/auth/logout/index.js')
			},
			{
				type: 'page',
				key: "auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: null,
				path: "/auth/login",
				shadow: () => import('./entries/endpoints/auth/login/index.js'),
				a: [14,19],
				b: []
			}
		]
	}
};
