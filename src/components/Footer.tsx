import { Box, Text } from '@chakra-ui/react'

import type { ReactNode } from 'react'

export default function Footer(): ReactNode {
  return (
    <Box as='footer' borderTop='1px solid' borderColor='border'>
      <Text
        maxW='1200px'
        mx='auto'
        px={{ base: '20px', md: '32px' }}
        py='24px'
        fontSize='sm'
        color='fg.muted'
      >
        © {new Date().getFullYear()} Juan Macedo
      </Text>
    </Box>
  )
}
