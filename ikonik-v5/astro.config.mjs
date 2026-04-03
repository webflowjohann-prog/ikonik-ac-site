// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ikonik-v5.netlify.app',
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
