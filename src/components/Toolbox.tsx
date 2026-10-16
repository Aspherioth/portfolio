import { Box } from '@chakra-ui/react'

import RowGrid from '@/components/RowGrid'
import Section from '@/components/Section'
import { toolbox } from '@/data/content'

import type { ReactNode } from 'react'

export default function Toolbox(): ReactNode {
  return (
    <Section id='skills' title='Toolbox'>
      <Box as='dl' mt='-20px'>
        {toolbox.map((group) => (
          <RowGrid key={group.label} py='16px'>
            <Box as='dt' fontSize='body' fontWeight='semibold'>
              {group.label}
            </Box>
            <Box as='dd' fontSize='body' lineHeight='1.6' color='fg.muted'>
              {group.items.join(', ')}
            </Box>
          </RowGrid>
        ))}
      </Box>
    </Section>
  )
}
