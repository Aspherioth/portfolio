import { Box, Text } from '@chakra-ui/react'

import type { BoxProps } from '@chakra-ui/react'
import type { PropsWithChildren, ReactNode } from 'react'

export type CardProps = PropsWithChildren<BoxProps>

export default function Card({ children, ...props }: CardProps): ReactNode {
  return <CardUI {...props}>{children ?? <Text />}</CardUI>
}

function CardUI({ children, ...props }: CardProps): ReactNode {
  return (
    <Box
      as='article'
      color='text.primary'
      bg='bg.surface'
      p='16px'
      border='1px solid'
      borderColor='border.primary'
      borderRadius='16px'
      transition='all 0.3s'
      boxShadow='0 2px 10px rgba(0,0,0,0.05)'
      {...props}
    >
      {children}
    </Box>
  )
}
