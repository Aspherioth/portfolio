import { ChakraProvider, Flex } from "@chakra-ui/react";

import "./App.css";
import theme from "./theme.js";

import Footer from "@/components/Footer/Footer";
import Home from "@/pages/Home";
import Navigation from "@/components/Navigation/Navigation";
import { ColorModeProvider } from "@/components/ui/color-mode";

function App(): React.ReactElement {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider>
        <Flex
          direction="column"
          bg="bg"
          w="100%"
          h="100%"
          minW="sm"
          minH="100vh"
          pb="2rem"
        >
          <Navigation />
          <Home />
          <Footer />
        </Flex>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
