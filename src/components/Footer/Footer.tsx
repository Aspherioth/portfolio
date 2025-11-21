import { Box, Text } from '@chakra-ui/react'

import styles from './Footer.module.css'

export default function Footer(): React.ReactElement {
  return (
    <Box className={styles.footer}>
      <Text color='text.primary' > © {new Date().getFullYear()} Wizard of Pages</Text>
    </Box>
  )
}
