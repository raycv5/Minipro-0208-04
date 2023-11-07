import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function PriceDetails({ onCodeChange, onPointPromotionChange }) {
  const event = useSelector((state) => state.checkout.value);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pointDiscount, setPointDiscount] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [price, setPrice] = useState(event.price);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPointDisabled, setIsPointDisabled] = useState(false);

  const user = useSelector((state) => state.user.value);
  const toast = useToast();

  console.log(user);

  const getPointDiscount = async () => {
    const response = await axios.get("http://localhost:2000/point-discounts");
    setPointDiscount(response.data);
  };

  const handlePointDiscount = (event) => {
    setIsPointDisabled((prev) => !prev);
    setPrice((prevValue) => prevValue - prevValue * event.discount);
    toast({
      title: "Promotion Applied",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onPointPromotionChange(event.id);
  };

  const handleCodeChange = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = async () => {
    const data = { promotion_code: promoCode, EventId: event.id };

    try {
      const response = await axios.post(
        "http://localhost:2000/transactions/check",
        data
      );
      setPrice((prevValue) => prevValue - prevValue * response.data.discount);
      setIsDisabled((prevValue) => !prevValue);
      onCodeChange(promoCode);
      //
      toast({
        title: "Promotion Applied",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      if (err.response.status === 400) {
        console.log("Invalid Promotion Code");
        toast({
          title: "Invalid Promotion Code",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

  useEffect(() => {
    getPointDiscount();
  }, []);

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
        <Text>
          {event.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" fontWeight="thin" color="gray.400">
        <Text>Discount</Text>
        <Text>
          {(price - event.price).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </Text>
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
        <Text>
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </Text>
      </Flex>

      <Box marginBottom="10px">
        <Text fontWeight="thin" paddingBottom="10px">
          Do you have promotion code?
        </Text>
        <Flex>
          <Input
            width="50%"
            onChange={handleCodeChange}
            isDisabled={isDisabled}
          />
          <Button
            marginLeft="10px"
            onClick={checkPromoCode}
            isDisabled={isDisabled}
          >
            Apply
          </Button>
        </Flex>
      </Box>

      <Box>
        <Button onClick={onOpen}>Check available point discount</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Point Discount</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold">Your Points : {user.points}</Text>

              {pointDiscount.map((item) => {
                if (item.point_cost <= user.points) {
                  return (
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      border="1px"
                      borderColor="gray.200"
                      padding="10px"
                      rounded="xl"
                      // shadow="xl"
                      marginTop="10px"
                      key={item.id}
                    >
                      <Text fontWeight="bold">
                        {item.discount * 100}% Discount{" "}
                        <Text as={"span"} fontWeight="thin">
                          ({item.point_cost} points needed)
                        </Text>
                      </Text>
                      <Button
                        onClick={() => handlePointDiscount(item)}
                        isDisabled={isPointDisabled}
                      >
                        Apply
                      </Button>
                    </Flex>
                  );
                }
              })}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

export default PriceDetails;
