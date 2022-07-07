import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { transformSync } from 'esbuild';

export default defineConfig(
    {
        plugins: [
            svelte(
                {
                    preprocess: [
                        {
                            script({ content }) {
                                return { code: transformSync(content, { loader: 'ts' }).code };
                            }
                        }
                    ]
                }
            )
        ],
        preview: { port: 3000 },
        server: { proxy: { '/api': { secure: false, target: 'http://127.0.0.1:5000' } } }
    }
);
