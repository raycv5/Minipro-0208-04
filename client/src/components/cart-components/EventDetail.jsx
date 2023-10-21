import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCalendar } from "react-icons/ai";

function EventDetail() {
  return (
    <Box
      padding={"5% 8%"}
      bgColor="white"
      marginBottom="10px"
      rounded={{ lg: "xl" }}
      shadow={{ lg: "xl" }}
      border={{ lg: "1px" }}
      borderColor={{ lg: "gray.200" }}
    >
      <Stack direction="row" spacing="3">
        <Box>
          <Image
            src="https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/l3lgxtpjczfm1kxivzea.webp"
            boxSize="150px"
            objectFit="cover"
            rounded="xl"
          />{" "}
        </Box>
        <Flex flexDirection="column" justifyContent="space-between">
          <Stack spacing="3">
            <Text fontWeight="bold">Ocean Park Hong Kong Ticket</Text>
            <Box>
              <Flex flexDirection="row" alignItems="center" gap="2">
                <HiLocationMarker color="gray" />
                <Text>Hong Kong</Text>
              </Flex>
              <Flex flexDirection="row" alignItems="center" gap="2">
                <AiFillCalendar color="gray" />
                <Text>15 Dec 2023</Text>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
}

export default EventDetail;
