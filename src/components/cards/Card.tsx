import { Box, BoxProps, Text } from "@chakra-ui/react";

type CardProps = React.PropsWithChildren &
  BoxProps & { header?: string; footer?: string };

export default function Card({
  children,
  ...props
}: CardProps): React.ReactElement {
  return <CardUI {...props}>{children ?? <Text />}</CardUI>;
}

function CardUI({ children, header, footer, ...props }: CardProps) {
  return (
    <Box
      as="article"
      color="text.primary"
      bg="bg.surface"
      padding="16px"
      border="1px solid"
      borderColor="border.primary"
      borderRadius="16px"
      transition="all 0.3s"
      boxShadow="0 2px 10px rgba(0,0,0,0.05)"
      {...props}
    >
      {children}
    </Box>
  );
}
