import { Flex, Link, Text } from '@chakra-ui/react'

import Section from '@/components/Section'
import {
  COFFEE_URL,
  CV_URL,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from '@/data/content'

import type { LinkProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

const linkStyle: LinkProps = {
  color: 'fg',
  textDecoration: 'underline',
  textUnderlineOffset: '4px',
  _hover: { color: 'primary' },
}

export default function Contact(): ReactNode {
  return (
    <Section id='contact' title='Contact' pb='100px'>
      <Text
        mt='-16px'
        mb='26px'
        maxW='52ch'
        fontSize='lead'
        lineHeight='1.55'
        color='fg.muted'
      >
        Hiring for a frontend role? Email is the fastest way to reach me.
      </Text>
      <Link
        href={`mailto:${EMAIL}`}
        fontFamily='heading'
        fontSize='callout'
        lineHeight='1.1'
        color='fg'
        textDecoration='underline'
        textDecorationColor='primary'
        textDecorationThickness='2px'
        textUnderlineOffset='10px'
        overflowWrap='anywhere'
        _hover={{ color: 'primary' }}
      >
        {EMAIL}
      </Link>
      <Flex
        gap='28px'
        wrap='wrap'
        mt='40px'
        fontSize='md'
        fontWeight='semibold'
      >
        <Link href={LINKEDIN_URL} target='_blank' rel='noopener' {...linkStyle}>
          LinkedIn ↗
        </Link>
        <Link href={GITHUB_URL} target='_blank' rel='noopener' {...linkStyle}>
          GitHub ↗
        </Link>
        <Link href={CV_URL} download {...linkStyle}>
          Download CV
        </Link>
      </Flex>
      <Text mt='32px' fontSize='body' color='fg.muted'>
        Like the side projects?{' '}
        <Link href={COFFEE_URL} target='_blank' rel='noopener' {...linkStyle}>
          Buy me a coffee
        </Link>
        .
      </Text>
    </Section>
  )
}
