// @ts-check
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: "server",
  server: {
      host: true,
      port: 3000
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],
  adapter: cloudflare()
});