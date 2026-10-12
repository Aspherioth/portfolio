import { Box, Heading, HStack, Link, Span, Text } from '@chakra-ui/react'

import type { ReactNode } from 'react'

export type HeroProps = {
  id?: string
}

export default function Hero({ id }: HeroProps): ReactNode {
  return (
    <Box
      id={id}
      as='section'
      p={{ base: '58px 0 54px', md: '96px 0 84px' }}
      w='100%'
      letterSpacing='-0.5px'
      scrollMarginTop='90px'
    >
      <Box
        color='text.primary.brand'
        fontSize='xs'
        fontFamily='mono'
        letterSpacing='3px'
        mb='28px'
        textTransform='uppercase'
        animation='0.7s ease 0.05s 1 normal both running fadeUp'
      >
        Senior Software Engineer &nbsp;·&nbsp; Games in the making
      </Box>
      <Heading
        as='h1'
        fontFamily='heading'
        fontSize='display'
        lineHeight='1'
        mb='34px'
      >
        <Span
          display='block'
          animation='0.7s ease 0.12s 1 normal both running fadeUp'
        >
          I build for the biggest
        </Span>
        <Span
          display='block'
          animation='0.7s ease 0.2s 1 normal both running fadeUp'
        >
          screen in the house.
        </Span>
        <Span
          display='block'
          animation='0.7s ease 0.28s 1 normal both running fadeUp'
        >
          Now,&nbsp;
          <Span color='text.primary.brand' fontStyle='italic'>
            worlds of my own.
          </Span>
        </Span>
      </Heading>
      <Text
        color='text.muted'
        maxW='56ch'
        mb='40px'
        fontFamily='note'
        fontSize='lg'
        lineHeight='1.65'
        animation='0.7s ease 0.36s 1 normal both running fadeUp'
      >
        A decade shipping interfaces for smart TVs and living-room devices:
        fast, focused, and built to feel effortless from ten feet away. Off the
        clock, I'm turning that craft into games of my own.
      </Text>

      <HStack
        flexWrap='wrap'
        gap='18px'
        animation='0.7s ease 0.44s 1 normal both running fadeUp'
      >
        <Link
          color='text.primary.contrast'
          _hover={{ textDecoration: 'none' }}
          bg='bg.primary'
          borderRadius='11px'
          p='14px 24px'
          href='#work'
        >
          View selected work
        </Link>
        <Link
          color='text.primary'
          _hover={{ textDecoration: 'none' }}
          border='1px solid'
          borderColor='border.primary'
          borderRadius='11px'
          href='#contact'
          p='14px 24px'
        >
          Get in touch
        </Link>
        <Span color='text.muted' fontFamily='mono' fontSize='xs'>
          Exploring the wonders of Ruby on Rails
        </Span>
      </HStack>
    </Box>
  )
}
