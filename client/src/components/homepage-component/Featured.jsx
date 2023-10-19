import { Box, Heading, Flex } from "@chakra-ui/react";
import Card from "./Card";

function Featured() {
  return (
    <Box padding={"5% 12%"}>
      <Heading>Featured Experiences</Heading>
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

export default Featured;
