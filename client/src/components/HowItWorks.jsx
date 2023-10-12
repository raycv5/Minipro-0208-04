import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/react";

function HowItWorks() {
  return (
    <Box padding="5% 12%">
      <Flex flexDirection={{ base: "column", md: "row" }} gap="32px">
        <Box flex="1">
          <Heading textAlign={{ base: "center", md: "left" }} fontSize="5xl">
            How it works
          </Heading>
        </Box>
        <Stack flex="1" spacing="10" alignItems="center">
          <Box maxWidth="md">
            <Text fontSize="lg" fontWeight="bold">
              Create Your Event
            </Text>
            <Text>
              Sign up and effortlessly craft your event with our user-friendly
              interface. Showcase the unique details that make your event stand
              out.
            </Text>
          </Box>
          <Box maxWidth="md">
            <Text fontSize="lg" fontWeight="bold">
              Create Your Event
            </Text>
            <Text>
              Sign up and effortlessly craft your event with our user-friendly
              interface. Showcase the unique details that make your event stand
              out.
            </Text>
          </Box>
          <Box maxWidth="md">
            <Text fontSize="lg" fontWeight="bold">
              Create Your Event
            </Text>
            <Text>
              Sign up and effortlessly craft your event with our user-friendly
              interface. Showcase the unique details that make your event stand
              out.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default HowItWorks;
