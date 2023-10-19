import { Box, Heading, Flex } from "@chakra-ui/react";
import Card from "./Card";

function Trending() {
  return (
    <Box padding={"5% 12%"} bgColor="gray.200">
      <Heading>
        Trending in{" "}
        <Heading as="span" textColor="green.400">
          Bandung
        </Heading>
      </Heading>
      <Flex
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        gap="16px"
        flexWrap="wrap"
      >
        <Card />
      </Flex>
    </Box>
  );
}

export default Trending;
