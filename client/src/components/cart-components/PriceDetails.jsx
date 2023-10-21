import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

function PriceDetails() {
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
      <Text
        fontWeight="bold"
        paddingBottom="10px"
        fontSize={{ lg: "2xl" }}
        marginBottom={{ lg: "10px" }}
      >
        Price details
      </Text>
      <Flex justifyContent="space-between">
        <Text>Subtotal</Text>
        <Text>$69.420</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>dofun service fee</Text>
        <Text>$10</Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        borderY="1px"
        borderColor="gray.300"
        fontWeight="bold"
        marginTop="10px"
        paddingY="10px"
      >
        <Text>Total</Text>
        <Text>$79.420</Text>
      </Flex>

      <Box>
        <Text fontWeight="thin" paddingBottom="10px">
          Do you have promotion code?
        </Text>
        <Flex>
          <Input width="50%" />
          <Button marginLeft="10px">Apply</Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default PriceDetails;
