import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: process.env.VERCEL_ENV === 'production' ? 'https://tristansweeney.com/' : process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/` : 'https://localhost:3000/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), mdx()],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});