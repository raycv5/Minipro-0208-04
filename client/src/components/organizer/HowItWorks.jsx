import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/react";

function HowItWorks() {
  return (
    <Box padding="5% 12%">
      <Flex flexDirection={{ base: "column", md: "row" }} gap="32px">
        <Box flex="1">
          <Heading
            textAlign={{ base: "center", md: "left" }}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            color="green.400"
          >
            How it works
          </Heading>
        </Box>
        <Stack flex="1" spacing="10" alignItems="center">
          <Box maxWidth="md">
            <Text fontSize="lg" fontWeight="bold">
              Register and Craft
            </Text>
            <Text>
              Join dofun and register as an organizer. Create your standout
              event effortlessly using our user-friendly interface, highlighting
              its unique details
            </Text>
          </Box>
          <Box maxWidth="md">
            <Text fontSize="lg" fontWeight="bold">
              Promote Your Event
            </Text>
            <Text>
              Set the stage for success! Promote your event with ease on dofun.
              Utilize our powerful tools to reach your target audience and boost
              attendance
            </Text>
          </Box>
          <Box maxWidth="md">
            <Text fontSize="lg" fontWeight="bold">
              Seamless Transactions
            </Text>
            <Text>
              User-friendly e-wallet transactions make it simple for attendees
              to purchase. Funds go directly to your dofun e-wallet, ensuring a
              smooth and secure payment process
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default HowItWorks;
