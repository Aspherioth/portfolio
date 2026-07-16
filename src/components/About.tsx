import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  Span,
  Text,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box id="about" p="40px 0px 90px">
      <HStack
        borderTop="1px solid"
        borderColor="border.primary"
        justifyContent="space-between"
        flexWrap="wrap"
        mb="40px"
        pt="26px"
      >
        <Heading as="h2" fontSize="clamp(30px, 4vw, 46px)" lineHeight="1">
          <Span
            color="text.muted"
            fontFamily="mono"
            fontSize="14px"
            fontWeight="normal"
            mr="14px"
            verticalAlign="6px"
          >
            03
          </Span>
          About
        </Heading>
      </HStack>

      <Grid gap="54px" templateColumns={{ base: "1fr", md: "0.85fr 1.15fr" }}>
        {/*Image*/}
        <GridItem h="fit-content" position={{ md: "sticky" }} top="100px">
          <Box
            w="full"
            border="1px solid"
            borderColor="border.primary"
            borderRadius="16px"
            aspectRatio="4/5"
            bg="url('https://avatars.githubusercontent.com/u/5093062?s=400&u=84325c807d9502985f1af7a94a0f0b5b60e00a69&v=4')"
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            p="14px"
          ></Box>
        </GridItem>

        {/*Description*/}
        <GridItem>
          <Text
            fontFamily="heading"
            fontSize="clamp(26px, 3vw, 38px)"
            lineHeight="1.28"
            m="0px 0px 26px"
          >
            I'm Juan, an engineer who's spent ten years making technology
            disappear so the experience can take over.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.7"
            color="text.muted"
            maxW="60ch"
            m="0px 0px 18px"
          >
            Most of my career has lived inside smart TVs and set-top boxes:
            constrained hardware, demanding users, and interfaces that have to
            feel instant from across the room. It taught me to care about the
            millisecond and the moment in equal measure.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.7"
            color="text.muted"
            maxW="60ch"
            m="0px 0px 34px"
          >
            Now I'm pointing that same obsession at games: designing small
            worlds, writing my own engines, and learning the parts of the craft
            no platform handed me. This page is where that journey gets
            documented.
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap="18px 28px">
            <GridItem>
              <AboutCell
                category="Last Adventure"
                value="Senior Software Engineer · Smart TV"
              />
            </GridItem>
            <GridItem>
              <AboutCell
                category="Current Focus"
                value="Building games, solo"
              />
            </GridItem>
            <GridItem>
              <AboutCell category="Main Toolbox" value="JS / TS · Godot" />
            </GridItem>
            <GridItem>
              <AboutCell
                category="General Mindset"
                value="Performance & polish"
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

function AboutCell({ category, value }: { category: string; value: string }) {
  return (
    <>
      <Box
        color="text.muted"
        fontFamily="mono"
        fontSize="11px"
        letterSpacing="1"
        mb="6px"
        textTransform="uppercase"
      >
        {category}
      </Box>
      <Box color="text.primary" fontFamily="note" fontSize="15px">
        {value}
      </Box>
    </>
  );
}
