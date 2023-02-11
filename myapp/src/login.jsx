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
  Stack,
  CardBody,
  Link,
  Text,
  Center,
} from "@chakra-ui/react";
import { BRANDLOGO } from "./signIn-logo";

export function Login() {
  return (
    <Box>
      <Center>
        <Stack spacing="6">
          <VStack as="header" spacing="6" mt="16">
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

          <Card
            bg="#FFFFF0 "
            variant="outline"
            borderColor="#4299E1 "
            maxW="380px"
          >
            <CardBody>
              <form>
                <Stack spacing="2">
                  <FormControl>
                    <FormLabel size="sm">UserName or Email address </FormLabel>
                    <Input
                      type="text"
                      bg="Orange 50
"
                      borderColor="#b2a3bf
"
                      size="sm"
                      borderRadius="10px"
                    />
                  </FormControl>

                  <FormControl>
                    <HStack>
                      <FormLabel size="sm">Password</FormLabel>
                      <Button
                        as="a"
                        href="#"
                        variant="link"
                        size="xs"
                        color="#3182CE"
                        fontWeight="700"
                      >
                        {" "}
                        Forget Password?
                      </Button>
                    </HStack>
                    <Input
                      type="text"
                      bgColor="#FAFCFE
"
                      borderColor="#E6FFFA
"
                    size="sm"
                      borderRadius="10px"
                    />
                  </FormControl>
                  <Button
                    bg="#2EA033  "
                    color="white"
                    size="sm"
                    _hover={{ bg: "#29B82F" }}
                    _active={{ bg: "#2EA033" }}
                  >
                    Sign In
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
          <Card variant="outline " borderColor=" #2C5EEC" borderRadius={"md"}>
            <CardBody>
              <Center>
                <HStack spacing="4" fontSize={"sm"}>
                  <Text>New account to Join?</Text>
                  <Link isExternal color="#2C5EEC" href="#">
                    Create an account
                  </Link>
                </HStack>
              </Center>
            </CardBody>
          </Card>
        </Stack>
      </Center>
      <Center mt="10">
        <HStack>
          <Link color="#5134E2 " fontSize={"sm"} href="#">
            {" "}
            Terms Of Use
          </Link>
          <Link color="#5134E2" fontSize={"sm"} href="#">
            {" "}
            Privacy Policy
          </Link>
          <Link color="#5134E2" fontSize={"sm"} href="#">
            {" "}
            Contact Zing{" "}
          </Link>

          <Text mt=" 8" padding="" fontSize={"smaller"}>
            © 2022-2023 Zing.com, Inc
          </Text>
        </HStack>
      </Center>
    </Box>
  );
}
