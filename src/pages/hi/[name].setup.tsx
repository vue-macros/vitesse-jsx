const params = useRoute('/hi/[name]').params
const router = useRouter()

export default (
  <div>
    <div i-carbon-pedestrian inline-block text-4xl />
    <p>
      Hi,
      {' '}
      { params.name }
    </p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button m-3 mt-8 text-sm class="btn" onClick={() => router.back()}>
        Back
      </button>
    </div>
  </div>
)
