import { ChakraProvider, Flex } from '@chakra-ui/react'

import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { ColorModeProvider } from '@/components/ui/color-mode'
import Home from '@/pages/Home'

import theme from './theme'

import type { ReactNode } from 'react'

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
