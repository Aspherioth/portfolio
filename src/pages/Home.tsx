import {
  Box,
  Button,
  Carousel,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import Card from "@components/Card";
import Section from "@components/Section";
import { CgExternal } from "react-icons/cg";
import { LuChevronLeft, LuChevronRight, LuPause, LuPlay } from "react-icons/lu";

// className={styles.content}
export default function Home(): React.ReactElement {
  return (
    <Box as="main">
      <Box maxW={{ smDown: "sm", md: 1200 }} m="0 auto" p="2rem">
        <Box color="text.primary" p="4rem 2rem" textAlign="center">
          <Heading as="h1" fontSize="3.5rem" fontWeight="700" mb="1rem">
            Juan Macedo
          </Heading>

          <Text fontSize="1.3rem" marginBottom="1rem" opacity="0.95">
            Frontend Software Engineer
          </Text>

          <Text
            fontSize="1.1rem"
            opacity="0.85"
            max-width="600px"
            margin="auto auto 2.5rem"
          >
            Specializing in React & building responsive streaming platforms for
            millions of users worldwide
          </Text>

          <Flex
            gap="2rem"
            justifyContent="center"
            margin="3rem 0"
            hideBelow="md"
          >
            <Box
              background="rgba(255, 255, 255, 0.15)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.2)"
              padding="1.5rem 2rem"
              borderRadius="15px"
              textAlign="center"
            >
              <Text
                as="span"
                fontSize="2.5rem"
                fontWeight="700"
                display="block"
              >
                8+
              </Text>
              <Text fontSize="0.9rem" opacity="0.9" marginTop="0.5rem">
                Years Experience
              </Text>
            </Box>

            <Box
              background="rgba(255, 255, 255, 0.15)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.2)"
              padding="1.5rem 2rem"
              borderRadius="15px"
              textAlign="center"
            >
              <Text
                as="span"
                fontSize="2.5rem"
                fontWeight="700"
                display="block"
              >
                React
              </Text>
              <Text fontSize="0.9rem" opacity="0.9" marginTop="0.5rem">
                Specialist
              </Text>
            </Box>

            <Box
              background="rgba(255, 255, 255, 0.15)"
              backdropFilter="blur(10px)"
              border="1px solid rgba(255, 255, 255, 0.2)"
              padding="1.5rem 2rem"
              borderRadius="15px"
              textAlign="center"
            >
              <Text
                as="span"
                fontSize="2.5rem"
                fontWeight="700"
                display="block"
              >
                Multi
              </Text>
              <Text fontSize="0.9rem" opacity="0.9" marginTop="0.5rem">
                Platform Expert
              </Text>
            </Box>
          </Flex>

          <Carousel.Root
            autoplay={{ delay: 2000 }}
            slideCount={2}
            mx="auto"
            maxW="xl"
            hideFrom="md"
          >
            <Carousel.ItemGroup>
              <Carousel.Item index={0}>
                <Box
                  background="rgba(255, 255, 255, 0.15)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  padding="1.5rem 2rem"
                  borderRadius="15px"
                  minWidth="150px"
                  textAlign="center"
                >
                  <Text
                    as="span"
                    fontSize="2.5rem"
                    fontWeight="700"
                    display="block"
                  >
                    8+
                  </Text>
                  <Text fontSize="0.9rem" opacity="0.9" marginTop="0.5rem">
                    Years Experience
                  </Text>
                </Box>
              </Carousel.Item>

              <Carousel.Item index={1}>
                <Box
                  background="rgba(255, 255, 255, 0.15)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  padding="1.5rem 2rem"
                  borderRadius="15px"
                  minWidth="150px"
                  textAlign="center"
                >
                  <Text
                    as="span"
                    fontSize="2.5rem"
                    fontWeight="700"
                    display="block"
                  >
                    React
                  </Text>
                  <Text fontSize="0.9rem" opacity="0.9" marginTop="0.5rem">
                    Specialist
                  </Text>
                </Box>
              </Carousel.Item>

              <Carousel.Item index={2}>
                <Box
                  background="rgba(255, 255, 255, 0.15)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  padding="1.5rem 2rem"
                  borderRadius="15px"
                  minWidth="150px"
                  textAlign="center"
                >
                  <Text
                    as="span"
                    fontSize="2.5rem"
                    fontWeight="700"
                    display="block"
                  >
                    Multi
                  </Text>
                  <Text fontSize="0.9rem" opacity="0.9" marginTop="0.5rem">
                    Platform Expert
                  </Text>
                </Box>
              </Carousel.Item>
            </Carousel.ItemGroup>

            <Carousel.Control justifyContent="center" gap="4">
              <Carousel.PrevTrigger asChild>
                <IconButton size="xs" variant="ghost">
                  <LuChevronLeft />
                </IconButton>
              </Carousel.PrevTrigger>

              <Carousel.AutoplayTrigger asChild>
                <IconButton
                  aria-label="Toggle autoplay"
                  size="sm"
                  variant="ghost"
                >
                  <Carousel.AutoplayIndicator
                    paused={<LuPause />}
                    play={<LuPlay />}
                  />
                </IconButton>
              </Carousel.AutoplayTrigger>
              <Carousel.NextTrigger asChild>
                <IconButton size="xs" variant="ghost">
                  <LuChevronRight />
                </IconButton>
              </Carousel.NextTrigger>
            </Carousel.Control>
          </Carousel.Root>
        </Box>

        <Section as="section" color="text.primary/95">
          <Heading
            as="h2"
            borderBottomWidth="3px"
            borderBottomColor="border.teal"
            pb="0.6rem"
            fontFamily="heading"
            fontSize="3xl"
          >
            Featured Projects
          </Heading>

          <Grid
            templateColumns="repeat(auto-fit, minmax(150px, 300px))"
            gap="2rem"
            mt="2rem"
            justifyContent="center"
          >
            <GridItem>
              <Card h="100%" header="💼 Brightcove Beacon">
                <Text>
                  Led React migration for enterprise streaming platform serving
                  millions. Built responsive interfaces for Manchester City, TV
                  Asahi, and San Francisco Opera across devices from mobile to
                  4K displays.
                </Text>

                <Flex wrap="wrap" gap="4px">
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>React</Tag.Label>
                  </Tag.Root>
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>JavaScript ES6+</Tag.Label>
                  </Tag.Root>
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>REST APIs</Tag.Label>
                  </Tag.Root>
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>Performance Optimization</Tag.Label>
                  </Tag.Root>
                </Flex>
              </Card>
            </GridItem>

            <GridItem>
              <Card h="100%" header="🎮 Trivia Game" maxW="fit-content">
                <Text>
                  Interactive quiz game built with modern React patterns.
                  Features real-time scoring, multiple categories, and
                  responsive design for all devices.
                </Text>
                <Flex wrap="wrap" gap="4px">
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>React</Tag.Label>
                  </Tag.Root>
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>React Hooks</Tag.Label>
                  </Tag.Root>
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>CSS3</Tag.Label>
                  </Tag.Root>
                </Flex>
                {/*<Text style='margin-top: 1rem; font-style: italic; color: #999;'>Coming Soon</Text>*/}
              </Card>
            </GridItem>

            <GridItem>
              <Card h="100%" header="📺 Smart TV Applications">
                <Text>
                  Cross-platform TV apps for Samsung Tizen, LG webOS, and
                  Android TV. Custom UI components optimized for remote control
                  interaction.
                </Text>
                <Flex wrap="wrap" gap="4px">
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>JavaScript</Tag.Label>
                  </Tag.Root>
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>HTML5</Tag.Label>
                  </Tag.Root>
                  <Tag.Root bg="gray.400" size="xl" rounded="full">
                    <Tag.Label>CSS3/SASS</Tag.Label>
                  </Tag.Root>
                </Flex>
              </Card>
            </GridItem>
          </Grid>
        </Section>

        <Section as="section" color="text.primary/95" fontSize="lg">
          <Heading
            as="h2"
            borderBottomWidth="3px"
            borderBottomColor="border.teal"
            pb="0.6rem"
            fontFamily="heading"
            fontSize="3xl"
          >
            About Me
          </Heading>

          <Text m="2rem auto">
            Frontend engineer with 8+ years of experience building responsive
            web applications and smart TV interfaces. Currently specializing in
            React development with a proven track record of migrating legacy
            systems to modern architectures and delivering high-traffic
            applications for enterprise clients.
          </Text>

          <Text m="2rem auto">
            My journey started with cross-platform smart TV development using
            vanilla JavaScript, and evolved into leading React migrations for
            streaming platforms used by millions worldwide. I&apos;m passionate
            about creating accessible, performant user interfaces and
            continuously learning new technologies.
          </Text>
        </Section>

        <Section as="section" color="text.primary/95">
          <Heading
            as="h2"
            borderBottomWidth="3px"
            borderBottomColor="border.teal"
            pb="0.6rem"
            fontFamily="heading"
            fontSize="3xl"
          >
            Let&apos;s Connect
          </Heading>

          <Flex
            direction="column"
            alignItems="center"
            gap="2rem"
            mt="1rem"
            fontSize="lg"
          >
            <Text w="100%" textAlign="center">
              Interested in working together or discussing web development?
            </Text>
            <Button asChild variant="ghost" size="lg" rounded="full">
              <Link
                gap="2px"
                target="_blank"
                href="http://www.linkedin.com/in/juan-macedo-69260a91/"
              >
                LinkedIn{" "}
                <Icon size="xl">
                  <CgExternal />
                </Icon>
              </Link>
            </Button>
          </Flex>
        </Section>
      </Box>
    </Box>
  );
}
