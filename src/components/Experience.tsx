import { Box, Heading, Link, List, Stack, Text } from '@chakra-ui/react'

import RowGrid from '@/components/RowGrid'
import Section from '@/components/Section'
import { CV_URL, experience } from '@/data/content'

import type { ReactNode } from 'react'

export default function Experience(): ReactNode {
  return (
    <Section
      id='experience'
      title='Experience'
      aside={
        <Link
          href={CV_URL}
          download
          fontSize='body'
          fontWeight='semibold'
          color='primary'
          textDecoration='underline'
          textUnderlineOffset='4px'
          _hover={{ color: 'fg' }}
        >
          Full CV (PDF)
        </Link>
      }
    >
      <Stack gap='0' mt='-20px'>
        {experience.map((entry, i) => (
          <RowGrid
            key={entry.title}
            py='26px'
            borderBottomWidth={i === experience.length - 1 ? '0' : '1px'}
          >
            <Text fontSize='label' lineHeight='1.7' color='fg.muted'>
              {entry.dates}
              {entry.place && (
                <>
                  <br />
                  {entry.place}
                </>
              )}
            </Text>
            <Box>
              <Heading as='h3' fontSize='lead' fontWeight='semibold' mb='4px'>
                {entry.title}
              </Heading>
              <Text fontSize='md' color='fg.muted'>
                {entry.org}
              </Text>
              {entry.points.length > 0 && (
                <List.Root
                  display='grid'
                  gap='7px'
                  mt='14px'
                  ps='18px'
                  listStyleType='disc'
                  maxW='70ch'
                  fontSize='body'
                  lineHeight='1.6'
                  color='fg.muted'
                >
                  {entry.points.map((point) => (
                    <List.Item key={point}>{point}</List.Item>
                  ))}
                </List.Root>
              )}
            </Box>
          </RowGrid>
        ))}
      </Stack>
    </Section>
  )
}
