import {
  Collapsible,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Span,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

import { ColorModeButton } from '@/components/ui/color-mode'

import type { ReactNode } from 'react'

export default function Navigation(): ReactNode {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
      as='header'
      backdropFilter='saturate(140%) blur(12px)'
      bg='bg.nav'
      borderBottom='1px solid'
      borderColor='border.primary'
      position='sticky'
      top='0'
      w='100%'
      minH='68px'
      zIndex={100}
    >
      <Container maxW='1200px' px={{ base: '20px', md: '32px' }} py={4}>
        <Flex justify='space-between' align='center'>
          <Link href='#top' _hover={{ textDecoration: 'none' }}>
            <Stack gap='0'>
              <Text
                color='text.primary'
                letterSpacing='0.2px'
                lineHeight='1'
                fontFamily='heading'
                fontSize='logo'
                fontWeight='bold'
              >
                Juan Macedo
              </Text>
              <Span
                color='text.muted'
                fontSize='2xs'
                fontFamily='mono'
                letterSpacing='2px'
                textTransform='uppercase'
              >
                Software Engineer
              </Span>
            </Stack>
          </Link>

          <HStack gap={4} hideBelow='md'>
            <Link
              href='https://www.buymeacoffee.com/juanmpmaceh'
              target='_blank'
            >
              <Image
                src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                alt='Buy Me a Coffee'
                h='30px'
                //style="height: 60px !important;width: 217px !important;"
              />
            </Link>

            <ColorModeButton
              colorPalette='teal'
              color='text.muted'
              aspectRatio={1}
              borderRadius='70px'
            />
            <Link href='#work' color='text.muted' fontFamily='note'>
              Work
            </Link>
            <Link href='#games' color='text.muted' fontFamily='note'>
              Games
            </Link>
            <Link href='#about' color='text.muted' fontFamily='note'>
              About
            </Link>
          </HStack>

          <VStack gap={4} hideFrom='md' alignItems='end'>
            <HStack gap={4}>
              <Link
                href='https://www.buymeacoffee.com/juanmpmaceh'
                target='_blank'
              >
                <Image
                  src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
                  alt='Buy Me a Coffee'
                  h='25px'
                />
              </Link>

              <ColorModeButton
                colorPalette='teal'
                color='text.primary'
                aspectRatio={1}
                borderRadius='70px'
              />
              <Collapsible.Trigger asChild>
                <IconButton
                  colorPalette='teal'
                  color='text.muted'
                  variant='ghost'
                  aspectRatio={1}
                  borderRadius='70px'
                >
                  {isOpen ? <IoClose /> : <IoMenu />}
                </IconButton>
              </Collapsible.Trigger>
            </HStack>

            <Collapsible.Content>
              <VStack gap={4} alignItems='end'>
                <Link href='#work' color='text.muted' fontFamily='note'>
                  Work
                </Link>
                <Link href='#games' color='text.muted' fontFamily='note'>
                  Games
                </Link>
                <Link href='#about' color='text.muted' fontFamily='note'>
                  About
                </Link>
              </VStack>
            </Collapsible.Content>
          </VStack>
        </Flex>
      </Container>
    </Collapsible.Root>
  )
}
