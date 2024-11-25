import ignoreAttributes from 'volar-plugin-ignore-attributes'
import { shortcuts } from './uno.config'

export default {
  plugins: [
    ignoreAttributes({
      include: shortcuts.map(([name]) => name),
    }),
  ],
}
