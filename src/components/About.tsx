import { Box, Grid, Image, Text } from '@chakra-ui/react'

import portrait from '@/assets/portrait.webp'
import Section from '@/components/Section'

import type { ReactNode } from 'react'

const PARAGRAPHS = [
  'Since 2017 I’ve shipped interfaces for smart TVs and streaming platforms: constrained hardware, remote-control navigation, and audiences of every ability. Making that feel instant taught me to care about every millisecond and every focus state.',
  'Those habits carry straight over to the web: every element reachable by keyboard, focus states you can actually see, and pages that stay fast on a cheap phone.',
  'Right now I’m learning Ruby on Rails, building small games, and getting deliberate about AI-assisted development.',
  'Off the clock I play automation games: Shapez 2, modded Minecraft, Melvor Idle. They scratch the same itch as performance work: find the bottleneck, fix it, watch the line move faster.',
]

const FACTS = [
  { term: 'Based in', value: 'Madeira, Portugal' },
  { term: 'Languages', value: 'Portuguese (native), English (professional)' },
]

export default function About(): ReactNode {
  return (
    <Section id='about' title='About'>
      <Grid
        templateColumns={{ base: '1fr', lg: '300px minmax(0, 1fr)' }}
        gap={{ base: '32px', lg: '52px' }}
        alignItems='start'
      >
        <Image
          src={portrait}
          alt='Portrait of Juan Macedo'
          loading='lazy'
          w='full'
          maxW={{ base: '320px', lg: 'none' }}
          aspectRatio='4/5'
          objectFit='cover'
          borderRadius='3px'
        />

        <Box maxW='62ch'>
          <Text
            fontFamily='heading'
            fontSize='intro'
            lineHeight='1.25'
            mb='24px'
            textWrap='pretty'
          >
            I learned frontend on the hardest screens to build for, and it made
            me obsessive about speed and access.
          </Text>
          {PARAGRAPHS.map((paragraph) => (
            <Text
              key={paragraph}
              mb='16px'
              fontSize='prose'
              lineHeight='1.7'
              color='fg.muted'
              textWrap='pretty'
            >
              {paragraph}
            </Text>
          ))}
          <Grid
            as='dl'
            templateColumns='repeat(2, minmax(0, 1fr))'
            gap='16px 28px'
            mt='30px'
            pt='20px'
            borderTop='1px solid'
            borderColor='border'
          >
            {FACTS.map(({ term, value }) => (
              <div key={term}>
                <Box as='dt' fontSize='sm' fontWeight='semibold' mb='4px'>
                  {term}
                </Box>
                <Box as='dd' fontSize='body' color='fg.muted'>
                  {value}
                </Box>
              </div>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Section>
  )
}
