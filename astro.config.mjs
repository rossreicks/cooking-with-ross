// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cookingwith.rossreicks.com',
  markdown: {
    shikiConfig: {
      theme: 'nord',
    },
  },
});
