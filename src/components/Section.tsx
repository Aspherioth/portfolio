import { Box } from '@chakra-ui/react'

import type { BoxProps } from '@chakra-ui/react'

type sectionProps = BoxProps & { children: React.ReactNode }

const Section = ({ children, ...props }: sectionProps): React.ReactElement => {
  return (
    <Box
      bg='bg.surface/95'
      m='2rem 0'
      p='2.5rem'
      borderRadius={20}
      boxShadow='section'
      {...props}
    >
      {children}
    </Box>
  )
}

export default Section

// background: rgba(255, 255, 255, 0.95);
// margin: 2rem 0;
// padding: 2.5rem;
// border-radius: 20px;
// box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
