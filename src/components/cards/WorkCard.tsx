import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Span,
  Stack,
  Text,
} from "@chakra-ui/react";
import Card from "./Card";

export type WorkCardProps = {
  img?: string;
  context: string[];
  name: string;
  description: string;
  tags: string[];
};

export default function WorkCard({
  img,
  context,
  name,
  description,
  tags,
}: WorkCardProps) {
  return (
    <Card>
      <Stack gap="16px" h="100%">
        <Box
          h="188px"
          border="1px solid"
          borderColor="border.primary"
          borderRadius="16px"
          justifyContent="center"
          overflow="hidden"
        >
          {img !== undefined && (
            <Image src={img} alt={`${name} preview`} w="stretch" h="auto" />
          )}
        </Box>
        <HStack
          color="text.muted"
          fontFamily="mono"
          fontSize="11px"
          justifyContent="space-between"
          textTransform="uppercase"
        >
          {context.map((c, i) => (
            <Text key={i}>{c}</Text>
          ))}
        </HStack>
        <Heading as="h3" color="text" fontSize="26px" lineHeight="1.1">
          {name}
        </Heading>
        <Text
          color="text.muted"
          fontFamily="note"
          fontSize="15px"
          lineHeight="1.6"
        >
          {description}
        </Text>
        <Flex
          mt="auto"
          gap="7px"
          color="text"
          fontFamily="mono"
          fontSize="11px"
        >
          {tags.map((t, i) => (
            <Span
              key={i}
              bgColor="bg.primary.soft"
              borderRadius="6px"
              p="5px 9px"
            >
              {t}
            </Span>
          ))}
        </Flex>
      </Stack>
    </Card>
  );
}
