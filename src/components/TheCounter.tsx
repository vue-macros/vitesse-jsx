/**
 * ## The Counter
 */
export default defineComponent(({
  initial = undefined as undefined | number,
}) => {
  const { count, inc, dec } = useCounter(initial)

  const color = computed(() => (index: number) => (
    index
      ? count.value >= index
      : count.value <= index)
    ? 'green'
    : 'red',
  )

  const styles = defineStyle(`
    .inc, .dec {
      @apply px3 b-(2 solid rounded [${color.value(1)}]);
    }
    .dec {
      @apply b-[${color.value(0)}];
    }
  `)

  const slots = defineSlots({
    default: ({ value }: { value: number }) => <div class={styles.inc}>{value}</div>,
  })

  return () => (
    <div gap3 mb3 flex="~ justify-center">

      <slots.default value={count.value} />

      <button class={styles.inc} onClick={() => inc()}>
        +
      </button>
      <button class={styles.dec} onClick={() => dec()}>
        -
      </button>
    </div>
  )
})
