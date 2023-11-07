import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillCalendar } from "react-icons/ai";
import { useSelector } from "react-redux";

function EventDetail() {
  const event = useSelector((state) => state.checkout.value);

  console.log(event.date);

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
            src={`http://localhost:2000/${event.image}`}
            boxSize="150px"
            objectFit="cover"
            rounded="xl"
          />{" "}
        </Box>
        <Flex flexDirection="column" justifyContent="space-between">
          <Stack spacing="3">
            <Text fontWeight="bold">{event.name}</Text>
            <Box>
              <Flex flexDirection="row" alignItems="center" gap="2">
                <HiLocationMarker color="gray" />
                <Text>{event.Country.country}</Text>
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
