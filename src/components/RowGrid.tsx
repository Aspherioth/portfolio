import { Grid } from '@chakra-ui/react'

import type { GridProps } from '@chakra-ui/react'
import type { ReactNode } from 'react'

export type RowGridProps = GridProps

// Label column on the left, content on the right; stacks on small screens
export default function RowGrid({
  children,
  ...props
}: RowGridProps): ReactNode {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: '210px minmax(0, 1fr)' }}
      gap={{ base: '6px', md: '32px' }}
      borderBottom='1px solid'
      borderColor='border'
      {...props}
    >
      {children}
    </Grid>
  )
}
