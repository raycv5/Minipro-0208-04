import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const destinations = [
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/45.jpg",
    location: "Las Vegas",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/38.jpg",
    location: "Bandung",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/60/82.jpg",
    location: "Garut",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5e/1f.jpg",
    location: "Cianjur",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/fc.jpg",
    location: "Paris",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/45.jpg",
    location: "Istanbul",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/f2.jpg",
    location: "Paris",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/2f.jpg",
    location: "Istanbul",
  },
];

function Destinations() {
  return (
    <>
      <Box padding={"5% 12%"}>
        <Heading>Top Destinations</Heading>

        <Flex justifyContent="space-between" flexWrap="wrap" marginTop="16px">
          {destinations.map((item) => (
            <Box
              position="relative"
              marginTop="16px"
              cursor="pointer"
              transition="0.3s"
              _hover={{
                filter: "grayscale(60%)",
                transform: "translate(0, -5px)",
              }}
            >
              <Image
                src={item.image}
                width="100%"
                rounded="xl"
                boxSize="300px"
                flexBasis="300px"
                objectFit="cover"
              />
              <Text
                position="absolute"
                bottom="10px"
                right="10px"
                textColor="white"
                fontWeight="bold"
                fontSize="3xl"
              >
                {item.location}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Destinations;
