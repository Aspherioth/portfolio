import { Stack } from "@chakra-ui/react";
import Hero from "@components/Hero.tsx";

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
      <Hero />
    </Stack>
  );
}
