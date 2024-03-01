// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/Antil_test/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  modules: [
    'nuxt-typed-router',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  css: ['./assets/css/app.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
