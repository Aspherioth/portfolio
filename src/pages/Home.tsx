import { Box } from '@chakra-ui/react'
import PageFold from '@components/PageFold/PageFold'

import styles from './Home.module.css'

// className={styles.content}
export default function Home(): React.ReactElement {
  return (
    <Box as='main'>
      <PageFold customClasses={styles.fold}>
        <h2 className='h2'>Welcome!</h2>
        <p>
          The space is a bit of a mess right now, but make yourself at home!
        </p>
        <p>
          This is my little corner of the internet, created to help me log my
          development journey. I want to make this a place where I can share
          my knowledge and experiences, and hopefully help others.
        </p>
      </PageFold>

      <PageFold customClasses={styles.fold}>
        <h2 className='h2'>Core Skills</h2>
        <p>Under Construction</p>
      </PageFold>

      <PageFold customClasses={styles.fold}>
        <h2 className='h2'>Projects</h2>
        <p>Under Construction</p>
      </PageFold>

      <PageFold customClasses={styles.fold}>
        <h2 className='h2'>Contact</h2>
        <p>Under Construction</p>
      </PageFold>
    </Box>
  )
}
