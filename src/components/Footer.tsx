import { Box, type BoxProps, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { CgExternal } from "react-icons/cg";

export default function Footer(
  props: React.PropsWithChildren & BoxProps,
): React.ReactElement {
  return (
    <FooterUI {...props}>
      {props.children != null ? (
        props.children
      ) : (
        <>
          <HStack justifyContent="space-between">
            <Text>Juan Macedo</Text>
            <Text>© 2026 · Designed & built between commits</Text>
          </HStack>

          <Text mt="0.5rem" textStyle="sm">
            <Link
              target="_blank"
              href="https://github.com/Aspherioth/portfolio"
            >
              View Source Code{" "}
              <Icon size="md">
                <CgExternal />
              </Icon>
            </Link>
          </Text>
        </>
      )}
    </FooterUI>
  );
}

/**
 * Stylized Footer componenet.
 * @param children Content to be displayed within the footer.
 * @param props Additional props passed to the footer component.
 * @returns
 */
function FooterUI({
  children,
  ...props
}: React.PropsWithChildren & BoxProps): React.ReactElement {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      border="1px solid rgba(255, 255, 255, 0.2)"
      textAlign="center"
      padding="2rem"
      margin="0 auto"
      maxW="1200px"
      borderRadius="15px"
      color="text.primary"
      w="90vw"
      {...props}
    >
      {children}
    </Box>
  );
}
