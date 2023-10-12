import Header from "../assets/images/event-header.png";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function EventHeader() {
  return (
    <Box padding={{ base: "9% 12%", md: "5% 12%" }}>
      <Flex
        justifyContent={{ base: "space-between" }}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "32px" }}
      >
        <Stack flex="1" maxWidth="xl" spacing="10">
          <Heading fontSize="5xl" lineHeight="1">
            Your Gateway to Event Excellence
          </Heading>
          <Text fontSize="lg">
            Welcome to [PLATFORM_NAME], where we celebrate the art of event
            curation! As an Event Organizer, you have the power to shape
            experiences and create memories that last a lifetime.
          </Text>
          <Button width="180px">Apply now</Button>
        </Stack>
        <Box flex="1" textAlign="right" maxWidth="lg">
          <Image
            src={Header}
            alt="event organizer header"
            width="100%"
            rounded="lg"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default EventHeader;
