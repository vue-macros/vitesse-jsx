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
import Layouts from 'vite-plugin-vue-layouts'

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
      extensions: ['.jsx', '.tsx'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      extensions: ['jsx', 'tsx'],
    }),

    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router': ['useLink', 'RouterView', 'RouterLink'],
        },
        {
          from: 'vue',
          imports: [
            ['shallowRef', 'useRef'],
          ],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
    }),

    // https://github.com/unplugin/vite-plugin-components
    Components({
      dts: true,
      extensions: ['jsx', 'tsx'],
      include: [/\.[jt]sx?/],
      resolvers: [
        {
          type: 'component',
          resolve: (name) => {
            if (['RouterLink', 'RouterView'].includes(name)) {
              return {
                name,
                from: 'vue-router',
              }
            }
          },
        },
      ],
    }),

    // https://github.com/unocss/unocss
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
