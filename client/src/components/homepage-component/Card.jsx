import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

const cardContents = [
  {
    img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/l3lgxtpjczfm1kxivzea.webp",
    title: "Ocean Park Hong Kong Ticket",
    location: "Hong Kong",
    price: "69.70",
  },
  {
    img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/l3lgxtpjczfm1kxivzea.webp",
    title: "Ocean Park Hong Kong Ticket",
    location: "Hong Kong",
    price: "69.70",
  },
  {
    img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/l3lgxtpjczfm1kxivzea.webp",
    title: "Ocean Park Hong Kong Ticket",
    location: "Hong Kong",
    price: "69.70",
  },
  {
    img: "https://res.klook.com/image/upload/fl_lossy.progressive,w_500,h_334,c_fill,q_85/activities/l3lgxtpjczfm1kxivzea.webp",
    title: "Ocean Park Hong Kong Ticket",
    location: "Hong Kong",
    price: "69.70",
  },
];

function Card() {
  return (
    <>
      {cardContents.map((item, index) => (
        <Flex
          key={index}
          marginTop="32px"
          maxWidth="300px"
          rounded="xl"
          spacing="0px"
          flexDirection="column"
          flexBasis="300px"
          transition="0.2s"
          cursor="pointer"
          _hover={{
            transform: "scale(1.03)",
          }}
        >
          <Box>
            <Image
              borderTopLeftRadius="xl"
              borderTopRightRadius="xl"
              src={item.img}
            />
          </Box>
          <Flex
            direction="column"
            justifyContent="space-between"
            gap="96px"
            padding="10px"
            border="1px"
            borderTop="none"
            borderBottomLeftRadius="xl"
            borderBottomRightRadius="xl"
            borderColor="gray.300"
            bgColor="white"
            shadow="lg"
          >
            <Stack direction="column">
              <Text fontWeight="thin">{item.location}</Text>
              <Text fontWeight="bold">{item.title}</Text>
            </Stack>
            <Box>
              <Text>
                From{" "}
                <Text as="span" fontWeight="bold">
                  US${item.price}
                </Text>
              </Text>
            </Box>
          </Flex>
        </Flex>
      ))}
    </>
  );
}

export default Card;
