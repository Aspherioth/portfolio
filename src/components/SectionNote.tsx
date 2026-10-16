import { Text } from '@chakra-ui/react'

import type { ReactNode } from 'react'

export type SectionNoteProps = {
  children: ReactNode
}

export default function SectionNote({ children }: SectionNoteProps): ReactNode {
  return (
    <Text maxW='44ch' color='fg.muted' fontSize='md' lineHeight='1.55'>
      {children}
    </Text>
  )
}
