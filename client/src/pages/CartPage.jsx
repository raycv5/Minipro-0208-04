import { Box, Flex, Text } from "@chakra-ui/react";
import EventDetail from "../components/cart-components/EventDetail";
import PriceDetails from "../components/cart-components/PriceDetails";
import OrderDetails from "../components/cart-components/OrderDetails";
import PaymentMethods from "../components/cart-components/PaymentMethods";
import BuyButton from "../components/cart-components/BuyButton";
import { useState } from "react";

function CartPage() {
  const [data, setData] = useState({
    date: "",
    event_id: "",
    event_name: "",
    user_id: "",
    user_name: "",
    payment_method: 0,
    discount: 0,
    isSuccess: false,
  });

  return (
    <Box bgColor={{ base: "gray.200", lg: "white" }} padding={{ lg: "3% 12%" }}>
      <Text
        textAlign="center"
        fontWeight="bold"
        padding="10px"
        borderBottom="1px"
        borderColor="gray.300"
        bgColor="white"
        display={{ lg: "none" }}
      >
        Confirm and pay
      </Text>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ lg: "center" }}
        gap={{ lg: "10" }}
      >
        <Box flex={{ lg: 1 }}>
          <EventDetail />
          <OrderDetails />
          <PaymentMethods />
        </Box>
        <Box flex={{ lg: 1 }} maxWidth={{ lg: "md" }}>
          <PriceDetails />
          <BuyButton />
        </Box>
      </Flex>
    </Box>
  );
}

export default CartPage;
