import adapter from '@sveltejs/adapter-static';
import path from 'path';

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
            resolve: {
                alias: {
                    $src: path.resolve('./src'),
                }
            }
        },
    }
};

export default config;