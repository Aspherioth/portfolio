import { Box, chakra, Flex, Image, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react'

import type { ProjectCover, ProjectImage } from '@/data/content'
import type { ReactNode, TouchEvent } from 'react'

export type ProjectMediaProps = {
  title: string
  cover: ProjectCover
  images: ProjectImage[]
}

const SWIPE_THRESHOLD = 40

// A typographic cover when there are no screenshots, otherwise a small carousel
export default function ProjectMedia({
  title,
  cover,
  images,
}: ProjectMediaProps): ReactNode {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const count = images.length
  const current = images[index]

  const go = (next: number): void => setIndex((next + count) % count)

  const onTouchStart = (e: TouchEvent): void => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: TouchEvent): void => {
    if (touchStartX.current === null || count < 2) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(index + (dx < 0 ? 1 : -1))
    touchStartX.current = null
  }

  return (
    <Box
      position='relative'
      aspectRatio='16/10'
      overflow='hidden'
      bg='bg.soft'
      border='1px solid'
      borderColor='border'
      borderRadius='3px'
      touchAction='pan-y'
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {current ? (
        <Image
          src={current.src}
          alt={current.alt}
          loading='lazy'
          w='full'
          h='full'
          objectFit={current.fit ?? 'cover'}
          objectPosition='top'
          p={current.fit === 'contain' ? '4% 0 8%' : undefined}
        />
      ) : (
        <Flex
          direction='column'
          justify='flex-end'
          gap='6px'
          position='absolute'
          inset='0'
          p='18px 20px'
          aria-hidden
        >
          <Text
            fontFamily='heading'
            fontSize='cover'
            lineHeight='0.95'
            color='fg'
          >
            {cover.word}
          </Text>
          <Text fontSize='label' color='fg.muted'>
            {cover.kicker}
          </Text>
        </Flex>
      )}

      {count > 1 && (
        <Flex
          role='group'
          aria-label={`${title} screenshots`}
          align='center'
          position='absolute'
          left='50%'
          bottom='10px'
          transform='translateX(-50%)'
          bg='bg'
          border='1px solid'
          borderColor='border'
          borderRadius='3px'
          px='2px'
        >
          <ArrowButton label='Previous image' onClick={() => go(index - 1)}>
            ‹
          </ArrowButton>
          {images.map((image, i) => (
            <chakra.button
              key={image.src}
              type='button'
              aria-label={`Show image ${i + 1} of ${count}`}
              aria-current={i === index}
              onClick={() => go(i)}
              display='flex'
              alignItems='center'
              p='12px 4px'
              cursor='pointer'
            >
              <Box
                h='6px'
                w={i === index ? '18px' : '6px'}
                borderRadius='1px'
                bg={i === index ? 'fg' : 'fg/30'}
                transition='width 0.25s ease, background 0.25s ease'
                _motionReduce={{ transition: 'none' }}
              />
            </chakra.button>
          ))}
          <ArrowButton label='Next image' onClick={() => go(index + 1)}>
            ›
          </ArrowButton>
        </Flex>
      )}
    </Box>
  )
}

type ArrowButtonProps = {
  label: string
  onClick: () => void
  children: ReactNode
}

function ArrowButton({
  label,
  onClick,
  children,
}: ArrowButtonProps): ReactNode {
  return (
    <chakra.button
      type='button'
      aria-label={label}
      onClick={onClick}
      color='fg.muted'
      fontSize='lg'
      lineHeight='1'
      p='6px 8px'
      cursor='pointer'
      _hover={{ color: 'fg' }}
    >
      {children}
    </chakra.button>
  )
}
