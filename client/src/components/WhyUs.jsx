import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function WhyUs() {
  const events = useSelector(state => state.events.value)
  console.log(events)
  return (
    <Box padding="5% 12%" bgColor="gray.100">
      <Flex
        justifyContent="space-between"
        textAlign="center"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap="38px"
      >
        <Stack width="xs" padding="5">
          <Text alignSelf="center">
            <RiSecurePaymentLine size="40" />
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Secure Transaction
          </Text>
          <Text>
            Rest easy knowing that all transactions are secure. Our robust
            payment system ensures that you receive timely payments without any
            hassle.
          </Text>
        </Stack>
        <Stack width="xs" padding="5">
          <Text alignSelf="center">
            <RiSecurePaymentLine size="40" />
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Secure Transaction
          </Text>
          <Text>
            Rest easy knowing that all transactions are secure. Our robust
            payment system ensures that you receive timely payments without any
            hassle.
          </Text>
        </Stack>
        <Stack width="xs" padding="5">
          <Text alignSelf="center">
            <RiSecurePaymentLine size="40" />
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Secure Transaction
          </Text>
          <Text>
            Rest easy knowing that all transactions are secure. Our robust
            payment system ensures that you receive timely payments without any
            hassle.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

export default WhyUs;
