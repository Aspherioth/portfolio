import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";

// className={styles.content}
export default function Home(): React.ReactElement {
  return (
    <Stack
      as="main"
      maxW="1200px"
      w="full"
      mx="auto"
      px={{ base: "20px", md: "32px" }}
      alignItems="center"
    >
      <Box
        as="section"
        padding={{ base: "58px 0 54px", md: "96px 0 84px" }}
        w="100%"
      >
        <Box
          color="text.primary.brand"
          fontSize="xs"
          fontFamily="mono"
          letterSpacing="3px"
          marginBottom="28px"
          textTransform="uppercase"
        >
          Senior Software Engineer &nbsp;·&nbsp; Games in the making
        </Box>
        <Heading
          as="h1"
          fontFamily="heading"
          fontSize="clamp(48px, 7.5vw, 104px)"
          lineHeight="1"
          marginBottom="34px"
        >
          <Text as="span" display="block">
            I build for the biggest
          </Text>
          <Text as="span" display="block">
            screen in the house.
          </Text>
          <Text as="span" display="block">
            Now,{" "}
            <Text as="span" color="text.primary.brand" fontStyle="italic">
              worlds of my own.
            </Text>
          </Text>
        </Heading>
        <Text
          color="text.muted"
          maxW="56ch"
          marginBottom="40px"
          fontFamily="note"
          fontSize="lg"
          lineHeight="1.65"
        >
          A decade shipping interfaces for smart TVs and living-room devices:
          fast, focused, and built to feel effortless from ten feet away. Off
          the clock, I'm turning that craft into games of my own.
        </Text>

        <HStack flexWrap="wrap" gap="18px">
          <Button borderRadius="11px" p="14px 22px">
            View selected work
          </Button>
          <Button borderRadius="11px" p="14px 22px">
            Get in touch
          </Button>
          <Text as="span" color="text.muted" fontFamily="mono" fontSize="xs">
            Exploring the wonders of Ruby on Rails
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
}
