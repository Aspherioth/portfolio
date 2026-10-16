import { Box, Grid } from '@chakra-ui/react'

import About from '@/components/About'
import SideProjectCard from '@/components/cards/SideProjectCard'
import WorkCard from '@/components/cards/WorkCard'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import SectionNote from '@/components/SectionNote'
import Toolbox from '@/components/Toolbox'
import { sideProjects, workProjects } from '@/data/content'

import type { ReactNode } from 'react'

export default function Home(): ReactNode {
  return (
    <Box
      as='main'
      id='top'
      maxW='1200px'
      w='full'
      mx='auto'
      px={{ base: '20px', md: '32px' }}
    >
      <Hero />

      <Section
        id='work'
        title='Selected work'
        pt='20px'
        aside={
          <SectionNote>
            Production React at Brightcove, plus one Next.js build of my own.
          </SectionNote>
        }
      >
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          }}
          gap='40px 28px'
        >
          {workProjects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </Grid>
      </Section>

      <Experience />
      <Toolbox />

      <Section
        id='side-projects'
        title='Side projects'
        aside={
          <SectionNote>
            Party apps I'm building for friends. Both are still in progress.
          </SectionNote>
        }
      >
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, minmax(0, 1fr))' }}
          gap='28px'
        >
          {sideProjects.map((project) => (
            <SideProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </Section>

      <About />
      <Contact />
    </Box>
  )
}
