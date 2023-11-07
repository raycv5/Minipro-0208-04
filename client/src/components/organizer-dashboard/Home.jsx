import React from "react";
import { useToast } from "@chakra-ui/react";

import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

export const HomeDasboard = () => {
  const organizer = useSelector((state) => state.organizer.value);
  const [data, setData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toast = useToast();

  const [promotionData, setPromotionData] = useState({
    name: "",
    discount: 0,
    end_date: "",
    EventId: 0,
  });

  console.log(promotionData);

  const handlePromotionName = (event) => {
    setPromotionData((prevValue) => ({
      ...prevValue,
      name: event.target.value,
    }));
  };

  const handleDiscountPercentage = (event) => {
    setPromotionData((prevValue) => ({
      ...prevValue,
      discount: event / 100,
    }));
  };

  const handlePromotionDate = (event) => {
    setPromotionData((prevValue) => ({
      ...prevValue,
      end_date: event.target.value,
    }));
  };

  const handleSubmit = async (id) => {
    try {
      await axios.post("http://localhost:2000/promotions", {
        ...promotionData,
        EventId: id,
      });
      window.location.reload();
      toast({
        title: "Promotion Applied",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getEvent = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/events/organizer/${organizer.id}`
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (event) => {
    setSelectedEvent(event);
    onOpen();
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <>
      <Box p={4}>
        <Heading>Your Events </Heading>
        <Flex flexDirection="column" gap="5">
          {data &&
            data.map((event) => {
              return (
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  width="50%"
                  key={event.id}
                >
                  <Text fontWeight="bold" fontSize="lg">
                    {event.name}
                  </Text>
                  <Button onClick={() => handleClick(event)}>Open Modal</Button>
                </Flex>
              );
            })}
          {selectedEvent && (
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Promotion</ModalHeader>
                <ModalCloseButton />
                <Box paddingX="25px">
                  <FormControl marginBottom="15px">
                    <FormLabel>Promotion Name</FormLabel>
                    <Input type="text" onChange={handlePromotionName} />
                  </FormControl>

                  <FormControl marginBottom="15px">
                    <FormLabel>
                      Apply promotion to {selectedEvent.name}{" "}
                      <Text as={"span"} fontWeight="thin">
                        (maximum is 50%)
                      </Text>
                    </FormLabel>
                    <NumberInput max={50} min={0}>
                      <NumberInputField
                        onChange={(e) =>
                          handleDiscountPercentage(e.target.value)
                        }
                      />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </FormControl>
                  <FormControl marginBottom="15px">
                    <FormLabel>Validity</FormLabel>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                      onChange={handlePromotionDate}
                    />
                  </FormControl>
                </Box>
                <ModalFooter>
                  <Button
                    colorScheme="blue"
                    mr={3}
                    onClick={() => handleSubmit(selectedEvent.id)}
                  >
                    Apply Promotion
                  </Button>
                  <Button marginRight="5px" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </Flex>
      </Box>
    </>
  );
};
