export default defineComponent(({
  initial = undefined as undefined | number,
}) => {
  const { count, inc, dec } = useCounter(initial)

  return () => (
    <div>
      { count.value }
      <button class="inc" onClick={() => inc()}>
        +
      </button>
      <button class="dec" onClick={() => dec()}>
        -
      </button>
    </div>
  )
})
