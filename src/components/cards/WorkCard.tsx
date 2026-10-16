import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'

import ProjectMedia from '@/components/cards/ProjectMedia'

import type { WorkProject } from '@/data/content'
import type { ReactNode } from 'react'

export type WorkCardProps = {
  project: WorkProject
}

export default function WorkCard({ project }: WorkCardProps): ReactNode {
  const { role, meta, title, problem, did, outcome, tags, links } = project

  return (
    <Stack as='article' gap='16px'>
      <ProjectMedia
        title={title}
        cover={project.cover}
        images={project.images}
      />

      <Flex justify='space-between' gap='12px' fontSize='sm' color='fg.muted'>
        <Text fontWeight='semibold' color='fg'>
          {role}
        </Text>
        <Text>{meta}</Text>
      </Flex>
      <Heading
        as='h3'
        fontFamily='heading'
        fontSize='cardTitle'
        fontWeight='normal'
        lineHeight='1.08'
        mt='-6px'
      >
        {title}
      </Heading>

      <Box as='dl' display='grid' gap='12px'>
        <CaseStudyItem term='Problem'>{problem}</CaseStudyItem>
        <CaseStudyItem term='What I did'>{did}</CaseStudyItem>
        <CaseStudyItem term='Outcome' highlight>
          {outcome}
        </CaseStudyItem>
      </Box>

      <Text
        mt='auto'
        pt='12px'
        borderTop='1px solid'
        borderColor='border'
        fontSize='label'
        lineHeight='1.6'
        color='fg.muted'
      >
        {tags.join(', ')}
      </Text>

      {links.length > 0 && (
        <Flex wrap='wrap' gap='20px' mt='-4px' fontSize='body'>
          {links.map((link) =>
            link.url ? (
              <Link
                key={link.label}
                href={link.url}
                target='_blank'
                rel='noopener'
                color='primary'
                fontWeight='semibold'
                textDecoration='underline'
                textUnderlineOffset='4px'
                _hover={{ color: 'fg' }}
              >
                {link.label} ↗
              </Link>
            ) : (
              <Text key={link.label} color='fg.muted'>
                {link.label} (coming soon)
              </Text>
            ),
          )}
        </Flex>
      )}
    </Stack>
  )
}

type CaseStudyItemProps = {
  term: string
  highlight?: boolean
  children: ReactNode
}

function CaseStudyItem({
  term,
  highlight = false,
  children,
}: CaseStudyItemProps): ReactNode {
  return (
    <div>
      <Box as='dt' fontSize='sm' fontWeight='bold' mb='2px'>
        {term}
      </Box>
      <Box
        as='dd'
        fontSize='body'
        lineHeight='1.55'
        color={highlight ? 'fg' : 'fg.muted'}
      >
        {children}
      </Box>
    </div>
  )
}
