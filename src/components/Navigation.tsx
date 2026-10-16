import { Box, chakra, Flex, HStack, Link } from '@chakra-ui/react'

import { useColorMode } from '@/components/ui/color-mode'

import type { ReactNode } from 'react'

type NavItem = {
  id: string
  label: string
  // Hidden on small screens to keep the bar on one line
  hideOnMobile?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience', hideOnMobile: true },
  { id: 'skills', label: 'Skills', hideOnMobile: true },
  { id: 'side-projects', label: 'Side projects', hideOnMobile: true },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation(): ReactNode {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      as='header'
      position='sticky'
      top='0'
      zIndex='sticky'
      bg='bg'
      borderBottom='1px solid'
      borderColor='border'
    >
      <Flex
        align='center'
        justify='space-between'
        gap='24px'
        maxW='1200px'
        mx='auto'
        px={{ base: '20px', md: '32px' }}
        py={{ base: '13px', md: '16px' }}
      >
        <Link
          href='#top'
          fontFamily='heading'
          fontSize={{ base: 'xl', md: 'logo' }}
          whiteSpace='nowrap'
          lineHeight='1'
          color='fg'
          textDecoration='none'
          _hover={{ textDecoration: 'none' }}
        >
          Juan Macedo
        </Link>

        <HStack
          as='nav'
          aria-label='Sections'
          gap={{ base: '14px', md: '24px' }}
        >
          {NAV_ITEMS.map(({ id, label, hideOnMobile }) => (
            <Link
              key={id}
              href={`#${id}`}
              hideBelow={hideOnMobile ? 'lg' : undefined}
              fontSize='body'
              fontWeight='medium'
              color='fg'
              textDecoration='none'
              _hover={{ color: 'primary' }}
            >
              {label}
            </Link>
          ))}
          <chakra.button
            type='button'
            onClick={toggleColorMode}
            flex='none'
            whiteSpace='nowrap'
            fontSize='sm'
            fontWeight='medium'
            color='fg.muted'
            borderLeft='1px solid'
            borderColor='border'
            pl={{ base: '14px', md: '18px' }}
            py='2px'
            cursor='pointer'
            _hover={{ color: 'fg' }}
          >
            {colorMode === 'dark' ? 'Light mode' : 'Dark mode'}
          </chakra.button>
        </HStack>
      </Flex>
    </Box>
  )
}
