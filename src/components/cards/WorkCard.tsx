import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Span,
  Stack,
  Text,
} from '@chakra-ui/react'

import Card from './Card'

import type { ReactNode } from 'react'

export type WorkCardProps = {
  img?: string
  context: string[]
  name: string
  description: string
  tags: string[]
}

export default function WorkCard({
  img,
  context,
  name,
  description,
  tags,
}: WorkCardProps): ReactNode {
  return (
    <Card>
      <Stack gap='16px' h='100%'>
        <Box
          h='188px'
          border='1px solid'
          borderColor='border.primary'
          borderRadius='16px'
          justifyContent='center'
          overflow='hidden'
        >
          {img !== undefined && (
            <Image src={img} alt={`${name} preview`} w='stretch' h='auto' />
          )}
        </Box>
        <HStack
          color='text.muted'
          fontFamily='mono'
          fontSize='label'
          justifyContent='space-between'
          textTransform='uppercase'
        >
          {context.map((c, i) => (
            <Text key={i}>{c}</Text>
          ))}
        </HStack>
        <Heading
          as='h3'
          color='text.primary'
          fontSize='cardTitle'
          lineHeight='1.1'
        >
          {name}
        </Heading>
        <Text
          color='text.muted'
          fontFamily='note'
          fontSize='body'
          lineHeight='1.6'
        >
          {description}
        </Text>
        <Flex
          mt='auto'
          gap='7px'
          color='text.primary'
          fontFamily='mono'
          fontSize='label'
        >
          {tags.map((t, i) => (
            <Span
              key={i}
              bgColor='bg.primary.soft'
              borderRadius='6px'
              p='5px 9px'
            >
              {t}
            </Span>
          ))}
        </Flex>
      </Stack>
    </Card>
  )
}
