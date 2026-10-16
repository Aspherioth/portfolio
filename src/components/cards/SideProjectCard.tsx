import { Flex, Heading, Stack, Text } from '@chakra-ui/react'

import ProjectMedia from '@/components/cards/ProjectMedia'

import type { SideProject } from '@/data/content'
import type { ReactNode } from 'react'

export type SideProjectCardProps = {
  project: SideProject
}

export default function SideProjectCard({
  project,
}: SideProjectCardProps): ReactNode {
  const { kind, status, title, blurb } = project

  return (
    <Stack
      as='article'
      gap='10px'
      bg='bg.surface'
      border='1px solid'
      borderColor='border'
      borderRadius='3px'
      p='14px 14px 24px'
    >
      <ProjectMedia
        title={title}
        cover={project.cover}
        images={project.images}
      />

      <Stack gap='10px' px='10px' pt='8px' flex='1'>
        <Flex justify='space-between' gap='12px' fontSize='sm' color='fg.muted'>
          <Text>{kind}</Text>
          <Text fontWeight='semibold' color='fg'>
            {status}
          </Text>
        </Flex>
        <Heading
          as='h3'
          fontFamily='heading'
          fontSize='cardTitle'
          fontWeight='normal'
          lineHeight='1.05'
        >
          {title}
        </Heading>
        <Text fontSize='body' lineHeight='1.6' color='fg.muted'>
          {blurb}
        </Text>
        <Text mt='auto' pt='8px' fontSize='body' color='fg.muted'>
          Play and source (coming soon)
        </Text>
      </Stack>
    </Stack>
  )
}
