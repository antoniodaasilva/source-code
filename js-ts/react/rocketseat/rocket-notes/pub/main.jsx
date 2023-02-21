import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme.jss'
import GlobalStyles from '../src/styles/global'
import { SignIn } from './pages/SignIn'
// import { Routes } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn/>
    </ThemeProvider>
  </React.StrictMode>
)
