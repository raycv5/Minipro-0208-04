import Header from "../../assets/images/event-header.png";

import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

function EventHeader() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight="bold"
            fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
            lineHeight={"110%"}
          >
            Your Gateway to <br />
            Event{" "}
            <Text as={"span"} color={"green.400"}>
              Excellence
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize="2xl">
            Welcome to{" "}
            <Text as={"span"} color={"green.400"} fontWeight="semibold">
              dofun
            </Text>
            , where we celebrate the art of event curation! As an Event
            Organizer, you have the power to shape experiences and create
            memories that last a lifetime.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              as={"a"}
              href="/register/organizer"
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
            >
              Apply Now
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default EventHeader;
