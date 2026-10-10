import { ChakraProvider, Flex } from '@chakra-ui/react'
import Footer from '@components/Footer.tsx'
import Navigation from '@components/Navigation.tsx'

import theme from './theme.js'

import type { ReactNode } from 'react'

import { ColorModeProvider } from '@/components/ui/color-mode'
import Home from '@/pages/Home'

function App(): ReactNode {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        <Flex
          direction='column'
          bg='bg'
          w='100%'
          h='100%'
          minW='sm'
          minH='100vh'
        >
          <Navigation />
          <Home />
          <Footer />
        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default App
