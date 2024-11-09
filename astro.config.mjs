import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import deno from '@deno/astro-adapter';

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind()],
  output: 'server',
  adapter: deno()
});