import { Box, Flex, Heading } from '@chakra-ui/react'

import type { BoxProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export type SectionProps = BoxProps & {
  id: string
  title: string
  // Shown opposite the title: a short description or a link
  aside?: ReactNode
}

export default function Section({
  id,
  title,
  aside,
  children,
  ...props
}: SectionProps): ReactNode {
  return (
    <Box
      as='section'
      id={id}
      aria-labelledby={`${id}-title`}
      scrollMarginTop='80px'
      pt='60px'
      pb='20px'
      {...props}
    >
      <Flex
        align='baseline'
        justify='space-between'
        wrap='wrap'
        gap='12px 24px'
        borderTop='1px solid'
        borderColor='fg'
        pt='22px'
        mb='32px'
      >
        <Heading
          as='h2'
          id={`${id}-title`}
          fontFamily='heading'
          fontSize='sectionTitle'
          fontWeight='normal'
          lineHeight='1'
        >
          {title}
        </Heading>
        {aside}
      </Flex>
      {children}
    </Box>
  )
}
