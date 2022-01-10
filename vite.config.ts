import { defineConfig } from 'vite';
import { vitePlugin as malinaPlugin } from 'malinajs-unplugin';

export default defineConfig({
  plugins: [
    malinaPlugin({
      plugins: [],
    }),
  ],
});


