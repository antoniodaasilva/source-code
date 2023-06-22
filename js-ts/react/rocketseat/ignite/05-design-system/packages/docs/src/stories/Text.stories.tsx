import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@dbrito-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [ 'xxs', 'xs ','sm ','md ','lg ','xl ','2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl',],
      control: {
        type: 'inline-radio',
      },
  }
} as Meta<TextProps>

// eslint-disable-next-line no-undef
export const Primary: StoryObj<TextProps> = {}
