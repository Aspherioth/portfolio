import { Box, Grid, Stack } from "@chakra-ui/react";
import Hero from "@components/Hero.tsx";
import ProjectGroup from "@components/ProjectGroup.tsx";
import WorkCard from "@components/cards/WorkCard.tsx";
import About from "@components/About.tsx";

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
      <Hero id="top" />

      {/*Work*/}
      <ProjectGroup
        id="work"
        index="01"
        title="Selected Work"
        description="Production systems for the living room: platform UI, navigation, and playback at scale."
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="22px"
        >
          <WorkCard
            context={["SENIOR DEVELOPER", "BRIGHTCOVE"]}
            name="Beacon: Smart TV"
            description="The Smart TV client for Brightcove's Beacon platform, a build-your-own-streaming-app framework that brings publishers' branded video experiences to living-room devices."
            tags={["Smart TV", "Streaming", "JS · CSS"]}
          />

          <WorkCard
            context={["LEAD DEVELOPER", "BRIGHTCOVE"]}
            name="Player SDK for Fire TV"
            description="A React Native player SDK built at Brightcove for Amazon's latest Fire TV devices, integrating directly with Brightcove's streaming backend to deliver consistent, high-performance playback for the developers building apps on those devices."
            tags={["React Native", "Fire TV", "Playback"]}
          />
        </Grid>
      </ProjectGroup>

      {/*Games*/}
      <ProjectGroup
        id="games"
        index="02"
        title="Side Quests"
        description="Where the engineer goes to play. Small games, big experiments, lots of half-finished worlds."
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap="22px"
        >
          <WorkCard
            context={["TRIVIA COMPANION", "WEB APP"]}
            name="Eurovision Party"
            description="Friends join a room and lock in who they think will win Eurovision. Everyone commits before the reveal, then the room finds out together."
            tags={["JS · CSS", "WebRTC"]}
          />

          <WorkCard
            context={["LIVE PREDICTION PARTY", "WEB APP"]}
            name="Trivia Companion"
            description="A companion for your favorite trivia board game. Generates fresh questions on demand, so game night never runs out of cards."
            tags={["JS · CSS"]}
          />
        </Grid>
      </ProjectGroup>
      <About />
      <Box id="about"></Box>
    </Stack>
  );
}
