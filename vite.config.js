const { appConfig } = require('./package.json')
const viteMainJs = require('vite-main-js')
const { svelte } = require('@sveltejs/vite-plugin-svelte')
const {VitePWA} = require('vite-plugin-pwa')
const { port } = appConfig
const production = process.env.NODE_ENV === 'production'
module.exports = {
  server: {
    port: port,
  },
  build: {
    cssCodeSplit: false,
  },
  optimizeDeps: {
    exclude: ['@roxi/routify'],
  },
  resolve: {
    dedupe: ['@roxi/routify'],
  },
  plugins: [
    viteMainJs(),
    VitePWA({
      manifest: {
        display: 'minimal-ui',
        icons: [
          {
            src: '/logo.jpg',
            sizes: '758x758',
            type: 'image/jpg'
          }
        ]
      }
    }),
    svelte({
      preprocess: [],
      emitCss: true,
      hot: !production,
    }),
  ],
}
