import { space } from './../../../tokens/src/space'
import { radii } from './../../../tokens/src/radii'
import { lineHeights } from './../../../tokens/src/line-heights'
import { fonts } from './../../../tokens/src/fonts'
import { fontWeights } from './../../../tokens/src/font-weights'
import { fontSizes } from './../../../tokens/src/font-sizes'
import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors } from '../../../tokens/src/colors'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
