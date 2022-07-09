import { join } from 'path';
import { readFileSync } from 'fs';

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { transformSync } from 'esbuild';

const tsConfig: Object = JSON.parse(readFileSync('tsconfig.json', 'utf-8'));

export default defineConfig(
    {
        clearScreen: false, optimizeDeps: { exclude: ['tinro'] },
        plugins: [
            svelte(
                {
                    preprocess: [
                        {
                            script({ content }) {
                                return {
                                    code: transformSync(
                                        content, { loader: 'ts', tsconfigRaw: tsConfig }
                                    ).code
                                };
                            }
                        }
                    ]
                }
            )
        ],
        preview: { port: 3000 }, resolve: { alias: { '$pages': join(__dirname, 'src', 'pages') } },
        server: { proxy: { '/api': { secure: false, target: 'http://127.0.0.1:5000' } } }
    }
);
