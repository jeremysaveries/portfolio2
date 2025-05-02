import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/portfolio2" : "",
    },
    // utile pour GitHub Pages si tu utilises des routes SPA
    prerender: {
      default: true,
    },
  },
};

export default config;
