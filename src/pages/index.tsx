export default defineComponent(() => {
  const name = ref('')

  const router = useRouter()
  function go() {
    if (name.value)
      router.push(`/hi/${encodeURIComponent(name.value)}`)
  }

  const route = useRoute('/')

  return () => (
    <div>
      <div i-carbon-campsite inline-block text-4xl />
      <p>
        <a rel="noreferrer" href="https://github.com/vue-macros/vitesse-jsx" target="_blank">
          Vitesse
          {' '}
          {route.meta.title}
        </a>
      </p>
      <p>
        <em text-sm op75>Opinionated Vite Starter Template</em>
      </p>

      <div py-4 />

      <TheInput
        v-model={name.value}
        placeholder="What's your name?"
        autocomplete="false"
        onKeydown_enter={go}
      />

      <div>
        <button
          class="m-3 text-sm btn"
          disabled={!name}
          onClick={go}
        >
          Go
        </button>
      </div>
    </div>
  )
})

definePage({
  meta: {
    layout: 'home',
  },
})
