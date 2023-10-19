import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

function JoinNow() {
  return (
    <Box padding="5% 12%" height="3xl">
      <Box
        height="100%"
        bgImage="url('https://images.unsplash.com/photo-1558522195-e1201b090344?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        bgSize="cover"
        bgRepeat="no-repeat"
        objectFit="cover"
        bgPosition="center"
        rounded="xl"
        padding="5% 7%"
      >
        <Heading>Join Us Today and Let Your Events Shine!</Heading>
        <Text>
          Ready to take your event organizing skills to new heights? Join [Your
          Platform Name] and become a part of a global community that values
          creativity, passion, and the art of crafting unforgettable moments.
        </Text>
        <Button as={"a"} href="/register/organizer" width="180px">
          Apply now <BsArrowRight />
        </Button>
      </Box>
    </Box>
  );
}

export default JoinNow;
