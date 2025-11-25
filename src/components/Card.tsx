import { type CardRootProps, Card as ChakraCard, Text } from '@chakra-ui/react'

type CardProps = React.PropsWithChildren & CardRootProps & { header: string | null }

export default function Card({ children, ...props }: CardProps): React.ReactElement {
  return (
    <CardUI {...props}>
      {children ?? <Text />}
    </CardUI>
  )
}

function CardUI({ children, header, ...props }: CardProps) {
  return (
    <ChakraCard.Root
      color='text.primary'
      bg='bg.surface'
      padding='2rem'
      borderRadius='15px'
      transition='all 0.3s'
      boxShadow='0 2px 10px rgba(0,0,0,0.05)'
      {...props}
    >
      <ChakraCard.Header mb='0.8rem' fontFamily='card.header' fontSize='1.4rem' fontWeight='bold'>{header ?? ''}</ChakraCard.Header>
      <ChakraCard.Body>
        {children}
      </ChakraCard.Body>
      <ChakraCard.Footer />
    </ChakraCard.Root>
  )
}
