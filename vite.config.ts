import { fileURLToPath, URL } from 'node:url'

import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv';
import path from 'path';
import VueRouter from 'unplugin-vue-router/vite'

const envPath = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
console.log(`The current NODE_ENV is: ${process.env.NODE_ENV}`);
dotenv.config({ path: envPath });
// console.log("Path: ", envPath)

// Custom plugin to inject environment variables into HTML
const injectHtmlPlugin: Plugin = {
  name: 'inject-html',
  transformIndexHtml(html) {
    return html.replace(
      '<!-- inject:env -->',
      `<script>
         ${process.env.VITE_APP_SCRIPT}
       </script>`
    );
  }
};


apiKeVITE_APP_SCRIPTy: process.env.VITE_APP_SCRIPT
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    injectHtmlPlugin
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


// console.log(`The current NODE_ENV is: ${process.env.NODE_ENV}`);