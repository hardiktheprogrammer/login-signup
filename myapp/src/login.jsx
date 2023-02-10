import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Card,
  HStack,
  Button,
} from "@chakra-ui/react";
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
      <Card bg="#FFFFF0 " variant="outline" borderColor="#4299E1 " maxW="380px">
        <FormControl>
          <FormLabel size="sm">UserName or Email address </FormLabel>
          <Input
            type="text"
            bg="Orange 50
"
            borderColor="#E6FFFA
"
            size="sm"
            borderRadius="10px"
          />
        </FormControl>
        <FormControl>
          <HStack>
            <FormLabel size="sm">UserName or Email address </FormLabel>
            <Button
              href="#"
              variant="link"
              size="xs"
              color="#3182CE
"
            >
              {" "}
              Forget Password?
            </Button>
          </HStack>
          <Input
            type="text"
            bg="Orange 50
"
            borderColor="#E6FFFA
"
            size="sm"
            borderRadius="10px"
          />
        </FormControl>
      </Card>
    </Box>
  );
}
