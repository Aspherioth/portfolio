import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'

import { CV_URL } from '@/data/content'

import type { ReactNode } from 'react'

// Staggered entrance, skipped for people who prefer reduced motion
const fadeUp = (delay: number) => ({
  animation: `fadeUp 0.7s ease ${delay}s both`,
  _motionReduce: { animation: 'none' },
})

export default function Hero(): ReactNode {
  return (
    <Box
      as='section'
      pt={{ base: '56px', md: '92px' }}
      pb={{ base: '50px', md: '80px' }}
    >
      <Heading
        as='h1'
        fontFamily='heading'
        fontSize='display'
        fontWeight='normal'
        lineHeight='1.02'
        letterSpacing='-0.01em'
        maxW='17ch'
        textWrap='balance'
        {...fadeUp(0.05)}
      >
        Fast, accessible interfaces, from the phone to the biggest screen in the
        house.
      </Heading>
      <Text
        maxW='56ch'
        mt='32px'
        fontSize='lead'
        lineHeight='1.6'
        color='fg.muted'
        textWrap='pretty'
        {...fadeUp(0.15)}
      >
        I'm Juan, a frontend engineer working in React and TypeScript. Since
        2017 I've built web and smart TV interfaces for clients like Manchester
        City, TV Asahi and San Francisco Opera.
      </Text>
      <Flex align='center' gap='14px' wrap='wrap' mt='38px' {...fadeUp(0.25)}>
        <Link
          href={CV_URL}
          download
          bg='primary'
          color='primary.contrast'
          borderRadius='4px'
          p='14px 22px'
          fontSize='body'
          fontWeight='semibold'
          textDecoration='none'
          _hover={{ bg: 'fg', color: 'bg', textDecoration: 'none' }}
        >
          Download CV
        </Link>
        <Link
          href='#contact'
          color='fg'
          border='1px solid'
          borderColor='fg'
          borderRadius='4px'
          p='13px 21px'
          fontSize='body'
          fontWeight='semibold'
          textDecoration='none'
          _hover={{ bg: 'fg', color: 'bg', textDecoration: 'none' }}
        >
          Get in touch
        </Link>
      </Flex>
      <Text mt='24px' fontSize='body' color='fg.muted' {...fadeUp(0.3)}>
        Based in Madeira, Portugal. Open to remote frontend roles.
      </Text>
    </Box>
  )
}
