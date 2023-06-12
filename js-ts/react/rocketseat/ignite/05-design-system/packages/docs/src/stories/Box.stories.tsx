import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps } from '@dbrito-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando elemento Box</span>
      </>
    )
  }
} as Meta

export const Primary: StoryObj<BoxProps> = {
}

