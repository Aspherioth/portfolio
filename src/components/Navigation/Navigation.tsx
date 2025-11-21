import { Collapsible, Container, Flex, Heading, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { NavLink } from 'react-router'

import { ColorModeButton } from '@/components/ui/color-mode'

export default function Navigation(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}
      as='nav'
      backdropFilter='blur(12px)'
      bg='bg.nav/30'
      borderBottomWidth='2px'
      borderColor='bg.nav/30'
      borderRadius='35px'
      py={4}
      position='fixed'
      top={{ base: '25px', mdDown: '15px' }}
      left={{ base: '30px', mdDown: '20px' }}
      right={{ base: '30px', mdDown: '20px' }}
      min-height='70px'
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

          <HStack gap={4} hideBelow='md'>
            <ColorModeButton colorPalette='teal' color='text.primary' aspectRatio={1} borderRadius='70px' />
            <NavLink to='/portfolio' end>
              <Text color='text.primary' fontWeight='bold'>Home</Text>
            </NavLink>
            <NavLink to='/portfolio/games' end>
              <Text color='text.primary' fontWeight='bold'>Games</Text>
            </NavLink>
            {/* !!!Theme will be added back when the page gets converted to Chakra UI!!! */}
            {/*<NavLink to='/portfolio/theme' end>
              <Text color='text.primary' fontWeight='bold'>Theme Preview</Text>
            </NavLink>*/}
          </HStack>

          <VStack gap={4} hideFrom='md' alignItems='end'>
            <HStack gap={4}>
              <ColorModeButton colorPalette='teal' color='text.primary' aspectRatio={1} borderRadius='70px' />
              <Collapsible.Trigger asChild>
                <IconButton colorPalette='teal' color='text.primary' variant='ghost' aspectRatio={1} borderRadius='70px'>
                  {isOpen ? <IoClose /> : <IoMenu />}
                </IconButton>
              </Collapsible.Trigger>
            </HStack>

            <Collapsible.Content>
              <VStack gap={4} alignItems='end'>
                <NavLink to='/portfolio' end onClick={() => setIsOpen(false)}>
                  <Text color='text.primary' fontWeight='bold'>Home</Text>
                </NavLink>
                <NavLink to='/portfolio/games' end onClick={() => setIsOpen(false)}>
                  <Text color='text.primary' fontWeight='bold'>Games</Text>
                </NavLink>
                {/* !!!Theme will be added back when the page gets converted to Chakra UI!!! */}
                {/*<NavLink to='/portfolio/theme' end onClick={() => setIsOpen(false)}>
                  <Text color='text.primary' fontWeight='bold'>Theme Preview</Text>
                </NavLink>*/}
              </VStack>
            </Collapsible.Content>

          </VStack>
        </Flex>
      </Container>
    </Collapsible.Root>
  )
}
