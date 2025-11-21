import { Box, ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router'

import './App.css'
import theme from './theme.js'

import Footer from '@/components/Footer/Footer'
import Navigation from '@/components/Navigation/Navigation'
import { ColorModeProvider } from '@/components/ui/color-mode'

function App(): React.ReactElement {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        <Box bg='bg' pt='10px'>
          {/*<div className='wop theme-auto'>*/}
          <Navigation />
          <Outlet />
          <Footer />
          {/*</div>*/}
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default App
