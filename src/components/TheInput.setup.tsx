const props = defineProps<{
  placeholder: string
  autocomplete: string
}>()

const modelValue = defineModel()

export default (
  <input
    {...props}
    id="input"
    v-model={modelValue.value}
    type="text"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
  />
)
