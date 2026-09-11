import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dipanshu18.github.io',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
