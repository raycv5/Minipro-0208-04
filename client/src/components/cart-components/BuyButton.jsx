import { Box, Button, Text } from "@chakra-ui/react";

function BuyButton({ onSubmit }) {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Box
      padding={"5% 8%"}
      bgColor="white"
      rounded={{ lg: "xl" }}
      shadow={{ lg: "xl" }}
      border={{ lg: "1px" }}
      borderColor={{ lg: "gray.200" }}
    >
      <Button
        width="100%"
        bgColor="green.400"
        _hover={{ bgColor: "green.300" }}
      >
        <Text textColor="white" onClick={handleSubmit}>
          Buy Ticket
        </Text>
      </Button>
    </Box>
  );
}

export default BuyButton;
