import { Box, Container, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router'

import { ColorModeButton } from '@/components/ui/color-mode'

export default function Navigation(): React.ReactElement {
  return (
    <Box
      as='nav'
      backdropFilter='blur(12px)'
      bg='bg.nav/30'
      margin='0 25px 10px 25px'
      borderBottomWidth='2px'
      borderColor='bg.nav/30'
      borderRadius='10vh'
      py={4}
      position='sticky'
      top='10px'
      zIndex={10}
    >
      <Container maxW='container.xl'>
        <Flex justify='space-between' align='center'>
          <Heading
            size='md'
            color='text.primary'
            font='{fonts.heading}'
            fontWeight='bold'
          >
            Wizard of Pages
          </Heading>
          <HStack gap={4}>
            <NavLink to='/portfolio' end>
              <Text color='text.primary' fontWeight='bold'>Home</Text>
            </NavLink>
            <NavLink to='/portfolio/games' end>
              <Text color='text.primary' fontWeight='bold'>Games</Text>
            </NavLink>
            <NavLink to='/portfolio/theme' end>
              <Text color='text.primary' fontWeight='bold'>Theme Preview</Text>
            </NavLink>
            <ColorModeButton _hover={{ bg: 'bg.nav' }} color='text.primary' />
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
