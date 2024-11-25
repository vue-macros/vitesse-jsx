declare module 'vue' {
  interface ComponentCustomProps {
    'v-loading'?: boolean
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    layout?: string
  }
}

export {}
