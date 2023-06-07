import type { StoryObj, Meta } from '@storybook/react'

import { Button, ButtonProps } from '@dbrito-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  }
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  }
}

