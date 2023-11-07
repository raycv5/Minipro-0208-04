import NavbarDashboard from "./Navbar-Dash";
import {
  Grid,
  GridItem,
  Flex,
  Text,
  Icon,
  Avatar,
  Tooltip,
  FormControl,
  Stack,
  FormLabel,
  Input,
  Button,
  Heading,
  useToast,
  Image,
  Box,
  Fade,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
} from "@chakra-ui/react";
import { PiTicketFill } from "react-icons/pi";
import { FaWallet } from "react-icons/fa";
import { MdAttachEmail, MdEventNote } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";

const flexStyle = {
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  p: "5px",
  _hover: { bg: "green.400", color: "white", borderRadius: "5px" },
};

function UserWallet() {
  const user = useSelector((state) => state.user.value);
  const toast = useToast();
  const [isFlexVisible, setFlexVisible] = useState(false);
  const [amount, setAmount] = useState(10000);
  const [paymentProof, setPaymentProof] = useState("");
  const [history, setHistory] = useState([]);
  const [isLoading, setLoading] = useState(true); //
  const [randomNumber, setRandomNumber] = useState(0);

  const getHistoryData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/top-up-requests/${user.id}`
      );
      setHistory(response?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (history.length === 0) {
      getHistoryData();
    }
  }, [history]);

  console.log(history);

  const handleSubmit = async () => {
    try {
      axios.post("http://localhost:2000/top-up-requests", {
        amount: amount,
        UserId: user.id,
        payment_proof: paymentProof,
      });
      window.location.reload();
      toast({
        title: "Top Up Request Created",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleProofChange = (event) => {
    setPaymentProof(event.target.value);
  };

  const handleChange = (valueString) => {
    const numericValue = parseFloat(valueString.replace(/,/g, ""));

    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    }
  };

  const toggleFlexVisibility = () => {
    setFlexVisible(!isFlexVisible);
    setRandomNumber(Math.floor(Math.random() * 500));
  };

  return (
    <>
      <NavbarDashboard />
      <Grid templateColumns="20vw 80vw">
        {/* <GridItem h="100vh"><Sidebar/></GridItem> */}
        <Flex flexDir={"column"} m={"10px 10px"} gap={"30px"} fontSize={"20px"}>
          <Text fontWeight={500} ml={"5px"} mt={"20px"}>
            DASHBOARD
          </Text>
          <Flex {...flexStyle}>
            <Icon as={Avatar} boxSize={"20px"} />
            <Link to="/welcome-user">
              <Text>Welcome</Text>
            </Link>
          </Flex>

          <Flex {...flexStyle}>
            <Icon as={FaWallet} boxSize={"25px"} />
            <Link to="/wallet">
              <Text>Wallet</Text>
            </Link>
          </Flex>

          <Flex {...flexStyle}>
            <Icon as={PiTicketFill} boxSize={"25px"} />
            <Link to="/referral-content">
              <Text>Referral Code</Text>
            </Link>
          </Flex>

          <Flex {...flexStyle}>
            <Icon as={MdAttachEmail} boxSize={"25px"} />
            <Link to="/send-code">
              <Text>Invite/Send</Text>
            </Link>
          </Flex>

          <Flex {...flexStyle}>
            <Icon as={MdEventNote} boxSize={"25px"} />
            <Text>Your Event</Text>
          </Flex>
        </Flex>

        {/* // content */}
        <GridItem h="100vh" bgColor={"gray.50"} p={"10px"}>
          <Flex gap="5" flexDirection={{ base: "column", md: "row" }}>
            <Flex
              padding={"2% 3%"}
              bgColor="white"
              maxWidth="xl"
              rounded="xl"
              flexDirection="column"
              gap="10"
              flex="1"
            >
              <Flex flexDirection="row" alignItems="center" gap="5">
                <FaWallet size="40" />
                <Text fontSize="2xl" fontWeight={"500"} paddingRight="5px">
                  {user.Wallet?.balance?.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                  <Text as={"span"} fontWeight="thin" color="green.400">
                    {" "}
                    +{" "}
                    {amount.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </Text>
                </Text>
              </Flex>

              <Flex flexDirection="column" gap="5">
                <FormControl>
                  <FormLabel>Enter the amount you want to top-up</FormLabel>
                  <NumberInput
                    min={10000}
                    onChange={handleChange}
                    isDisabled={isFlexVisible ? "true" : ""}
                    bgColor="gray.200"
                    rounded="xl"
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <Flex
                  display={isFlexVisible ? "flex" : "none"}
                  flexDirection="column"
                  gap="5"
                >
                  <Flex flexDirection="column" gap="2">
                    <Box>
                      <Text>Bank name :</Text>
                      <Text fontWeight="bold">Bank Central Asia</Text>
                    </Box>
                    <Box>
                      <Text>Account number</Text>
                      <Text fontWeight="bold">1021567891</Text>
                    </Box>
                    <Box>
                      <Text>Amount to be transfered</Text>
                      <Text fontWeight="bold">
                        {(amount + randomNumber).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </Text>
                    </Box>
                  </Flex>

                  <Flex flex="1">
                    <FormControl>
                      <FormLabel>Upload Payment Proof</FormLabel>
                      <Input
                        type="text"
                        bgColor="gray.200"
                        rounded="xl"
                        onChange={handleProofChange}
                      />
                    </FormControl>
                  </Flex>
                </Flex>
              </Flex>
              <Flex justifyContent="space-between">
                <Button
                  width="25%"
                  onClick={toggleFlexVisibility}
                  marginRight="10px"
                >
                  {isFlexVisible ? "Cancel" : "Top Up"}
                </Button>
                <Button
                  width="25%"
                  display={isFlexVisible ? "block" : "none"}
                  onClick={handleSubmit}
                >
                  Confirm
                </Button>
              </Flex>
            </Flex>
            <Flex
              padding={"2% 3%"}
              bgColor="white"
              maxWidth="xl"
              rounded="xl"
              flexDirection="column"
              gap="10"
              flex="1"
              height="100%"
            >
              <Text fontWeight="bold" fontSize="2xl">
                Top Up History
              </Text>
              <Box>
                {isLoading ? (
                  <Text>Loading...</Text>
                ) : (
                  <Flex flexDirection="column-reverse" gap="1">
                    {history?.map((item) => {
                      return (
                        <Flex key={item.id} justifyContent="space-between">
                          <Text>
                            {new Date(item.createdAt).toLocaleString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </Text>
                          <Text width="120px" textAlign="right">
                            {item.status === "success"
                              ? "+ " +
                                item.amount.toLocaleString("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                })
                              : item.amount.toLocaleString("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                })}
                          </Text>
                          <Text
                            fontWeight="bold"
                            width="70px"
                            color={
                              item.status === "success"
                                ? "green.400"
                                : item.status === "pending"
                                ? "yellow.300"
                                : "red.400"
                            }
                          >
                            {item.status}
                          </Text>
                        </Flex>
                      );
                    })}
                  </Flex>
                )}
              </Box>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}

export default UserWallet;
