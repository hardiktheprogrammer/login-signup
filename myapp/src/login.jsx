import { Box, Heading, VStack } from "@chakra-ui/react";
import { BRANDLOGO } from "./signIn-logo";

export function Login() {
  return (
    <Box>
      <VStack as="header" spacing="6" mt="8">
        <BRANDLOGO />
        <Heading
          as="h1"
          fontWeight="300"
          fontSize="24px"
          letterSpacing="-0.5px"
        >
          Sign in to Zing
        </Heading>
      </VStack>
    </Box>
  );
}
