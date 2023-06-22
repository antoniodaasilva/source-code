import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@dbrito-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/antoniodebrito.png',
    alt: 'Antonio Brito',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

// eslint-disable-next-line no-undef
export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
