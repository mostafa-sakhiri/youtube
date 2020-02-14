import React from 'react'
import Routes from './config/routes'
import { ThemeProvider } from 'styled-components'

import theme from './config/theme'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
