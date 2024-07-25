const props = defineProps<{
  initial: number
}>()

const { count, inc, dec } = useCounter(props.initial)

export default (
  <div>
    { count }
    <button class="inc" onClick={() => inc()}>
      +
    </button>
    <button class="dec" onClick={() => dec()}>
      -
    </button>
  </div>
)
