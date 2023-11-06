import { Box, Flex, Text } from "@chakra-ui/react";
import EventDetail from "../components/cart-components/EventDetail";
import PriceDetails from "../components/cart-components/PriceDetails";
import OrderDetails from "../components/cart-components/OrderDetails";
import PaymentMethods from "../components/cart-components/PaymentMethods";
import BuyButton from "../components/cart-components/BuyButton";
import { useState } from "react";

function CartPage() {
  const [data, setData] = useState({
    initial_price: 0,
    EventId: 0,
    UserId: 0,
    promotion_code: "",
    PaymentMethodId: 1,
    PointDiscountId: 0,
    PromotionCodeId: 0,
  });

  const handlePaymentMethod = (paymentMethodId) => {
    setData((prevData) => ({ ...prevData, PaymentMethodId: paymentMethodId }));
  };

  const handlePromotionCode = (promotionCode) => {
    setData((prevData) => ({ ...prevData, promotion_code: promotionCode }));
  };

  console.log(data);

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
          <PaymentMethods onPaymentChange={handlePaymentMethod} />
        </Box>
        <Box flex={{ lg: 1 }} maxWidth={{ lg: "md" }}>
          <PriceDetails onCodeChange={handlePromotionCode} />
          <BuyButton />
        </Box>
      </Flex>
    </Box>
  );
}

export default CartPage;
