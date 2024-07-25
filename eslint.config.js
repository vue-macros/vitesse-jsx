import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    jsx: true,
    rules: {
      'style/jsx-self-closing-comp': 'error',
    },
  },

)
