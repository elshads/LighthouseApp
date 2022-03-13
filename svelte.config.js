import adapter from '@sveltejs/adapter-auto';

// added by Elshad
const production = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),

        // added by Elshad
        vite: {
            optimizeDeps: {
                include: ['@carbon/charts'],
            },
            ssr: {
                noExternal: [production && '@carbon/charts'].filter(Boolean),
            },
        },
    }
};

export default config;