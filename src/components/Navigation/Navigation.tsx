import {
  Collapsible,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
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
      borderBottomWidth="1px"
      borderBottomColor="border"
      px="10px"
      py={4}
      position="sticky"
      top="0"
      w="100%"
      min-height="70px"
      zIndex={100}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
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
            <Text
              as="span"
              color="text.muted"
              fontSize="2xs"
              fontFamily="mono"
              letterSpacing="2px"
              textTransform="uppercase"
            >
              Software Engineer
            </Text>
          </Stack>

          <HStack gap={4} hideBelow="md">
            <ColorModeButton
              colorPalette="teal"
              color="text.primary"
              aspectRatio={1}
              borderRadius="70px"
            />
            <Text color="text.primary" fontWeight="bold">
              Home
            </Text>
            <Text color="text.primary" fontWeight="bold">
              Games
            </Text>
            {/* !!!Theme will be added back when the page gets converted to Chakra UI!!! */}
            {/*<NavLink to='/portfolio/theme' end>
      <Text color='text.primary' fontWeight='bold'>Theme Preview</Text>
      </NavLink>*/}
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
                <Text color="text.primary" fontWeight="bold">
                  Home
                </Text>
                <Text color="text.primary" fontWeight="bold">
                  Games
                </Text>
                {/* !!!Theme will be added back when the page gets converted to Chakra UI!!! */}
                {/*<NavLink to='/portfolio/theme' end onClick={() => setIsOpen(false)}>
        <Text color='text.primary' fontWeight='bold'>Theme Preview</Text>
        </NavLink>*/}
              </VStack>
            </Collapsible.Content>
          </VStack>
        </Flex>
      </Container>
    </Collapsible.Root>
  );
}
