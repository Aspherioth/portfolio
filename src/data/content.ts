import eurovisionHome from '@/assets/side-projects/eurovision-home.webp'
import eurovisionScoring from '@/assets/side-projects/eurovision-scoring.webp'
import eurovisionWelcome from '@/assets/side-projects/eurovision-welcome.webp'
import triviaCategories from '@/assets/side-projects/trivia-categories.webp'
import triviaLobby from '@/assets/side-projects/trivia-lobby.webp'
import triviaPlayOrder from '@/assets/side-projects/trivia-play-order.webp'

export const CV_URL = `${import.meta.env.BASE_URL}Juan-Macedo-CV.pdf`
export const EMAIL = 'juan.macedo.dev@proton.me'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/juan-macedo-69260a91/'
export const GITHUB_URL = 'https://github.com/Aspherioth'
export const COFFEE_URL = 'https://www.buymeacoffee.com/juanmpmaceh'

export type ProjectImage = {
  src: string
  alt: string
  // Phone screenshots are contained, desktop ones fill the frame
  fit?: 'contain' | 'cover'
}

export type ProjectCover = {
  word: string
  kicker: string
}

export type ProjectLink = {
  label: string
  // No url yet means "coming soon"
  url?: string
}

export type WorkProject = {
  id: string
  role: string
  meta: string
  title: string
  problem: string
  did: string
  outcome: string
  tags: string[]
  cover: ProjectCover
  images: ProjectImage[]
  links: ProjectLink[]
}

export type SideProject = {
  id: string
  kind: string
  status: string
  title: string
  blurb: string
  cover: ProjectCover
  images: ProjectImage[]
}

export type ExperienceEntry = {
  dates: string
  place?: string
  title: string
  org: string
  points: string[]
}

export type ToolboxGroup = {
  label: string
  items: string[]
}

export const workProjects: WorkProject[] = [
  {
    id: 'beacon',
    role: 'Senior Engineer',
    meta: 'Brightcove · 2023–25',
    title: 'Beacon: React migration',
    problem:
      'A large legacy vanilla JS streaming platform that was getting slow to extend.',
    did: 'Helped lead an incremental move to React components running alongside the old code, with no big-bang rewrite.',
    outcome:
      'New features ship in React while the platform stays live for publishers.',
    tags: ['React', 'Incremental migration', 'Performance'],
    cover: { word: 'Beacon', kicker: 'React, streaming' },
    images: [],
    links: [],
  },
  {
    id: 'firetv',
    role: 'Lead Developer',
    meta: 'Brightcove',
    title: 'Player SDK for Fire TV',
    problem:
      'App developers on new Fire TV devices needed reliable playback tied to Brightcove’s backend.',
    did: 'Led development of a React Native + TypeScript SDK integrated with Brightcove’s streaming services.',
    outcome:
      'One drop-in SDK for consistent, high-performance playback on Fire TV.',
    tags: ['React Native', 'TypeScript', 'Playback'],
    cover: { word: 'Fire TV', kicker: 'React Native SDK' },
    images: [],
    links: [],
  },
  {
    id: 'finwise',
    role: 'Personal project',
    meta: '2025',
    title: 'Finwise',
    problem: 'I wanted a real-world testbed for modern Next.js patterns.',
    did: 'Built a finance tracker on the App Router: dashboard, filterable transactions, Server and Client Components.',
    outcome: 'Fully typed and tested with Vitest and React Testing Library.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Vitest'],
    cover: { word: 'Finwise', kicker: 'Next.js, TypeScript' },
    images: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/Aspherioth/finwise' },
      { label: 'Live demo' },
    ],
  },
]

export const sideProjects: SideProject[] = [
  {
    id: 'trivia',
    kind: 'Board game companion, mobile web',
    status: 'In development',
    title: 'Trivia Companion',
    blurb:
      'A companion for your favourite trivia board game. The host picks tonight’s categories, a wheel decides who goes first, and new questions come on demand so game night never runs out of cards.',
    cover: { word: 'Trivia', kicker: 'Mobile web, in development' },
    images: [
      {
        src: triviaLobby,
        alt: 'Trivia Companion lobby with party code and joined players',
        fit: 'contain',
      },
      {
        src: triviaCategories,
        alt: 'Host setup: choosing the six categories',
        fit: 'contain',
      },
      {
        src: triviaPlayOrder,
        alt: 'Spinning wheel deciding who plays first',
        fit: 'contain',
      },
    ],
  },
  {
    id: 'eurovision',
    kind: 'Eurovision watch party, web app',
    status: 'Prototype',
    title: 'Eurovision Party',
    blurb:
      'A private scoring desk for a living-room jury. Friends join over WebRTC, rate every act, and lock in one winner. The results stay hidden until the show ends.',
    cover: { word: 'Eurovision', kicker: 'WebRTC, prototype' },
    images: [
      {
        src: eurovisionHome,
        alt: 'Eurovision Party home with scorecard and party activity',
      },
      { src: eurovisionScoring, alt: 'Act dossier with the scoring desk' },
      {
        src: eurovisionWelcome,
        alt: 'Welcome screen where a juror enters their name',
      },
    ],
  },
]

export const experience: ExperienceEntry[] = [
  {
    dates: 'Aug 2019 – May 2025',
    place: 'Funchal, Portugal',
    title: 'Senior Software Engineer',
    org: 'Brightcove',
    points: [
      'Helped lead the incremental migration of the Beacon streaming platform from legacy vanilla JS to React, with new components running alongside the existing code.',
      'Lead developer on the React Native + TypeScript player SDK for Amazon Fire TV.',
      'Improved load and runtime performance with code splitting and lazy loading.',
    ],
  },
  {
    dates: 'May 2017 – Aug 2019',
    place: 'Acquired by Brightcove',
    title: 'Software Engineer',
    org: 'TV App Agency',
    points: [
      'Built smart TV apps for Tizen, webOS and Android TV.',
      'Moved the team from SVN to Git and introduced SASS.',
    ],
  },
  {
    dates: '2011 – 2015',
    title: 'B.Sc. Computer Science',
    org: 'Universidade da Madeira',
    points: [],
  },
]

export const toolbox: ToolboxGroup[] = [
  {
    label: 'Core',
    items: [
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'React',
      'Next.js',
      'React Native',
    ],
  },
  { label: 'Styling', items: ['SASS', 'Tailwind', 'Chakra UI'] },
  {
    label: 'Quality',
    items: [
      'Vitest',
      'React Testing Library',
      'WCAG accessibility',
      'Performance',
    ],
  },
  {
    label: 'Practices',
    items: [
      'Component-driven development',
      'Legacy migration',
      'Code reviews',
      'Agile',
    ],
  },
  {
    label: 'Also',
    items: [
      'Node.js',
      'MongoDB',
      'Redux',
      'Angular',
      'AI-assisted development',
    ],
  },
]
