import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Span,
  Text,
} from "@chakra-ui/react";
import Card from "@components/cards/Card.tsx";

export default function Contact() {
  return (
    <Box
      as="section"
      id="contact"
      scrollMarginTop="90px"
      p="46px 0px 110px"
      w="full"
    >
      <Card
        w="full"
        maxW="1200px"
        p="clamp(40px, 6vw, 76px)"
        textAlign="center"
      >
        <Text
          color="text.primary.brand"
          fontFamily="mono"
          fontSize="12px"
          letterSpacing="3px"
          mb="22px"
        >
          Let's talk
        </Text>
        <Heading
          as="h2"
          fontSize="clamp(36px, 6vw, 72px)"
          lineHeight="1.02"
          m="0px auto 30px"
          maxW="16ch"
        >
          Let's make something worth{" "}
          <Span color="text.accent" fontStyle="italic">
            playing
          </Span>
          .
        </Heading>
        <Text
          color="text.muted"
          fontSize="17px"
          lineHeight="1.6"
          m="0px auto 40px"
          maxW="50ch"
        >
          Hiring, collaborating on a game, or just want to compare notes on
          living-room UX? My inbox is open.
        </Text>

        <HStack justify="center" gap="14px" mb="40px">
          <Link
            color="text.primary.contrast"
            _hover={{ textDecoration: "none" }}
            bg="bg.primary"
            borderRadius="11px"
            href="https://github.com/Aspherioth"
            p="14px 24px"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            color="text.primary"
            _hover={{ textDecoration: "none" }}
            border="1px solid"
            borderColor="border.primary"
            borderRadius="11px"
            href="https://www.linkedin.com/in/juan-macedo-69260a91/"
            p="14px 24px"
            target="_blank"
          >
            LinkedIn
          </Link>
        </HStack>

        <Text
          color="text.muted"
          fontSize="17px"
          lineHeight="1.6"
          m="0px auto 40px"
          maxW="50ch"
        >
          Not quite what you're looking for, but you'd still like to show some
          support? ♥️
        </Text>

        <Link href="https://www.buymeacoffee.com/juanmpmaceh" target="_blank">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me a Coffee"
            height="40px"
          />
        </Link>
      </Card>
    </Box>
  );
}
