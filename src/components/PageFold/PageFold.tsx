import { Box } from '@chakra-ui/react'

import styles from './PageFold.module.css'

export type PageFoldProps = {
  children: React.ReactNode;
  customClasses?: string;
  bg?: string;
}

function PageFold({ children, customClasses, ...props }: PageFoldProps): React.ReactElement {
  return (
    <Box
      as='section'
      padding='2rem'
      paddingInline='5vw'
      textAlign='center'
      borderColor='border'
      _even={{ bg: 'card' }}
      _odd={{ bg: 'card.bold' }}
      color='text.primary'
      {...props}
      className={`card ${styles.fold} ${customClasses || ''}`}
    >
      {children != null && children}
    </Box>
  )
}

export default PageFold
