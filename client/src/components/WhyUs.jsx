import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiOutlineGlobal, AiTwotoneCalendar } from "react-icons/ai";

function WhyUs() {
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
            <AiOutlineGlobal size="40" />
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Global Exposure
          </Text>
          <Text>
            Expand globally! Showcase events to a diverse audience. Elevate your
            experiences and gain international acclaim effortlessly with dofun
          </Text>
        </Stack>
        <Stack width="xs" padding="5">
          <Text alignSelf="center">
            <AiTwotoneCalendar size="40" />
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Effortless Management
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
            Enjoy peace of mind – our secure transaction system ensures
            hassle-free, timely payments, backed by robust security for
            worry-free transactions
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

export default WhyUs;
