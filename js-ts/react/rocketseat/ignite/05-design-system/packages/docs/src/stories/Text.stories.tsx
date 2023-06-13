import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@dbrito-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example text',
  },
} as Meta<TextProps>

// eslint-disable-next-line no-undef
export const Primary: StoryObj<TextProps> = {}
