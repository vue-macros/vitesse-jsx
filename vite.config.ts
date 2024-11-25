/// <reference types="vitest" />

import path from 'node:path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueJsxMacros from '@vue-macros/jsx/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components-jsx/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // https://github.com/vue-macros/vue-macros
    VueJsxMacros({
      jsxMacros: true,
    }),

    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx
    vueJsx(),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.tsx', '.jsx'],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      extensions: ['tsx', 'jsx'],
      include: [/\.[jt]sx?/],
      types: [{
        from: 'vue-router/auto',
        names: ['RouterLink', 'RouterView'],
      }],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    // https://github.com/antfu-collective/vite-plugin-inspect
    Inspect(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
