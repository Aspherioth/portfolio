import { Box, HStack, Span } from '@chakra-ui/react'

import type { ReactNode } from 'react'

export default function Footer(): ReactNode {
  return (
    <Box
      as='footer'
      borderTop='1px solid'
      borderColor='border.primary'
      w='full'
    >
      <HStack
        flexWrap='wrap'
        gap='20px'
        justifyContent='space-between'
        m='0 auto'
        maxW='1200px'
        p='26px 32px'
      >
        <Span color='text.primary' fontFamily='heading' fontSize='lg'>
          Juan Macedo
        </Span>
        <Span
          color='text.muted'
          fontFamily='mono'
          fontSize='label'
          letterSpacing='1px'
        >
          © 2026 · Designed & built between commits
        </Span>
      </HStack>
    </Box>
  )
}
