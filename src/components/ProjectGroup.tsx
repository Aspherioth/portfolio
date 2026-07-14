import { Box, Heading, HStack, Span, Text } from "@chakra-ui/react";

export type ProjectGroupProps = {
  id?: string;
  index?: number | string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function ProjectGroup({
  id,
  index,
  title,
  description,
  children,
}: ProjectGroupProps) {
  return (
    <Box id={id} padding="40px 0px 30px" scrollMarginTop="90px">
      <HStack
        borderTop="1px solid"
        borderColor="border.primary"
        justifyContent="space-between"
        flexWrap="wrap"
        mb="40px"
        pt="26px"
      >
        <Heading as="h2" fontSize="clamp(30px, 4vw, 46px)" lineHeight="1">
          {index != undefined && (
            <Span
              color="text.muted"
              fontFamily="mono"
              fontSize="14px"
              fontWeight="normal"
              mr="14px"
              verticalAlign="6px"
            >
              {index}
            </Span>
          )}

          {title}
        </Heading>

        {description != undefined && (
          <Text color="text.muted" maxW="42ch" fontSize="15px" lineHeight="1.6">
            {description}
          </Text>
        )}
      </HStack>

      {children}
    </Box>
  );
}
