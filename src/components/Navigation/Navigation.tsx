import {
  Collapsible,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Span,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import { ColorModeButton } from "@/components/ui/color-mode";

export default function Navigation(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
      as="header"
      backdropFilter="saturate(140%) blur(12px)"
      bg="bg.nav"
      borderBottom="1px solid"
      borderColor="border.primary"
      position="sticky"
      top="0"
      w="100%"
      min-height="68px"
      zIndex={100}
    >
      <Container maxW="1200px" px={{ base: "20px", md: "32px" }} py={4}>
        <Flex justify="space-between" align="center">
          <Link href="#top" _hover={{ textDecoration: "none" }}>
            <Stack gap="0">
              <Heading
                as="h1"
                color="text.primary"
                letterSpacing="0.2px"
                lineHeight="1"
                fontFamily="heading"
                fontSize="1.5xl"
                fontWeight="bold"
                size="sm"
              >
                Juan Macedo
              </Heading>
              <Span
                color="text.muted"
                fontSize="2xs"
                fontFamily="mono"
                letterSpacing="2px"
                textTransform="uppercase"
              >
                Software Engineer
              </Span>
            </Stack>
          </Link>

          <HStack gap={4} hideBelow="md">
            <ColorModeButton
              colorPalette="teal"
              color="text.primary"
              aspectRatio={1}
              borderRadius="70px"
            />
            <Link href="#work" color="text.primary" fontWeight="bold">
              Work
            </Link>
            <Link href="#games" color="text.primary" fontWeight="bold">
              Games
            </Link>
            <Link href="#about" color="text.primary" fontWeight="bold">
              About
            </Link>
          </HStack>

          <VStack gap={4} hideFrom="md" alignItems="end">
            <HStack gap={4}>
              <ColorModeButton
                colorPalette="teal"
                color="text.primary"
                aspectRatio={1}
                borderRadius="70px"
              />
              <Collapsible.Trigger asChild>
                <IconButton
                  colorPalette="teal"
                  color="text.primary"
                  variant="ghost"
                  aspectRatio={1}
                  borderRadius="70px"
                >
                  {isOpen ? <IoClose /> : <IoMenu />}
                </IconButton>
              </Collapsible.Trigger>
            </HStack>

            <Collapsible.Content>
              <VStack gap={4} alignItems="end">
                <Link href="#work" color="text.primary" fontWeight="bold">
                  Work
                </Link>
                <Link href="#games" color="text.primary" fontWeight="bold">
                  Games
                </Link>
                <Link href="#about" color="text.primary" fontWeight="bold">
                  About
                </Link>
              </VStack>
            </Collapsible.Content>
          </VStack>
        </Flex>
      </Container>
    </Collapsible.Root>
  );
}
