import { Box, Flex, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

function PaymentMethods({ onPaymentChange }) {
  const handlePaymentMethodChange = (event) => {
    onPaymentChange(event.target.value);
  };

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
        fontSize={{ lg: "2xl" }}
        marginBottom={{ lg: "10px" }}
      >
        Payment Methods
      </Text>
      <RadioGroup defaultValue="1">
        <Stack paddingY="10px" spacing="2">
          <Box padding="10px" border="1px" borderColor="gray.300" rounded="xl">
            <Radio
              value="1"
              onChange={handlePaymentMethodChange}
              width="100%"
              _highlighted={{ bgColor: "black" }}
            >
              dofun Wallet
            </Radio>
          </Box>
          <Box padding="10px" border="1px" borderColor="gray.300" rounded="xl">
            <Radio value="2" onChange={handlePaymentMethodChange} width="100%">
              Gopay
            </Radio>
          </Box>
          <Box padding="10px" border="1px" borderColor="gray.300" rounded="xl">
            <Radio value="3" onChange={handlePaymentMethodChange} width="100%">
              Visa
            </Radio>
          </Box>
        </Stack>
      </RadioGroup>
    </Box>
  );
}

export default PaymentMethods;
