import { Box, Flex, Text } from "@chakra-ui/react";
import EventDetail from "../components/cart-components/EventDetail";
import PriceDetails from "../components/cart-components/PriceDetails";
import OrderDetails from "../components/cart-components/OrderDetails";
import PaymentMethods from "../components/cart-components/PaymentMethods";
import BuyButton from "../components/cart-components/BuyButton";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CartPage() {
  const user = useSelector((state) => state.user.value);
  const event = useSelector((state) => state.checkout.value);

  console.log(event);

  // const eventData = localStorage.getItem("checkoutItem");
  // const event = JSON.parse(eventData);

  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    EventId: event.id,
    UserId: user.id,
    PaymentMethodId: 1,
    PointDiscountId: null,
    promotion_code: "",
  });

  console.log(transaction);

  // useEffect(() => {
  //   setTransaction((prevTransaction) => ({
  //     ...prevTransaction,
  //     UserId: user.id,
  //   }));
  // }, [user.id]);

  const handlePaymentMethod = (paymentMethodId) => {
    setTransaction((prevValue) => ({
      ...prevValue,
      PaymentMethodId: paymentMethodId,
    }));
  };

  const handlePromotionCode = (promotionCode) => {
    setTransaction((prevValue) => ({
      ...prevValue,
      promotion_code: promotionCode,
    }));
  };

  const handlePointPromotion = (promotionId) => {
    setTransaction((prevValue) => ({
      ...prevValue,
      PointDiscountId: promotionId,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:2000/transactions", transaction);
      navigate("/user-event");
    } catch (err) {
      console.log(err);
    }
  };

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
          <PaymentMethods onPaymentMethod={handlePaymentMethod} />
        </Box>
        <Box flex={{ lg: 1 }} maxWidth={{ lg: "md" }}>
          <PriceDetails
            onCodeChange={handlePromotionCode}
            onPointPromotionChange={handlePointPromotion}
          />
          <BuyButton onSubmit={handleSubmit} />
        </Box>
      </Flex>
    </Box>
  );
}

export default CartPage;
