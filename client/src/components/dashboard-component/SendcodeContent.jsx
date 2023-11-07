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
} from "@chakra-ui/react";
import NavbarDashboard from "./Navbar-Dash";
import { PiTicketFill } from "react-icons/pi";
import { MdAttachEmail, MdEventNote } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ImCopy } from "react-icons/im";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import { addPoints } from "../../redux/userSlice";
import { FaWallet } from "react-icons/fa";

const destinations = [
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/38.jpg",
    location: "Bandung",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/60/82.jpg",
    location: "Garut",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5e/1f.jpg",
    location: "Cianjur",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5d/45.jpg",
    location: "Istanbul",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-content--1x-1/0c/11/5c/fc.jpg",
    location: "Paris",
  },
];

const flexStyle = {
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  p: "5px",
  _hover: { bg: "green.400", color: "white", borderRadius: "5px" },
};

const SendCode = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const toast = useToast();
  const [emailList, setEmailList] = useState([]);
  const [maxPoints, setMaxpoint] = useState(false);

  const referralLink = `http://localhost:3000/send-code/?${user.name}/?${user.referralCode}`;

  const SendCodeSchema = Yup.object().shape({
    codeLink: Yup.string()
      .test("is-referral", "*Invalid Link Referral", (value) => {
        return value === `${referralLink}`;
      })
      .required("*Personal referral link is require"),
    email: Yup.string()
      .email("*Invalid Email address format")
      .required("*Email is required")
      .test(
        "is-unique",
        "*Email address is already sent for referral",
        (value) => {
          return !emailList.includes(value);
        }
      ),
  });

  const handleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = referralLink;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const handleSubmit = async (values) => {
    const updatedPoints = user.points + 20;
    if (updatedPoints > 1000) {
      setMaxpoint(true);
      alert("Maximum points (1000) reached, you can't send more referral code");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:2000/users/${user.id}`,
        {
          points: updatedPoints,
        }
      );
      // dispatch(addPoints(response.data))
    } catch (err) {
      console.log(err);
    }
    toast({
      title: "Success",
      description: "Your referral-code was send..!!",
      status: "success",
      duration: "5000",
      position: "bottom",
      isClosable: true,
    });
    const currentPoints = user.points + 20;
    if (currentPoints === 100) {
      alert(`congrats you have 5% discount for buy a ticket event`);
    } else if (currentPoints === 200) {
      alert(
        `Congratulation now you have 10% discount for buying a ticket event..!!`
      );
    } else if (currentPoints === 1000)
      alert(
        `Congratulation now you have 50% discount for buying a ticket event..!!`
      );
    window.location.reload();
  };

  return (
    <>
      <NavbarDashboard />
      <Grid templateColumns="20vw 80vw">
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

        {/* content */}
        <GridItem h="100vh" bgColor={"gray.50"} p={"10px"}>
          <Heading textAlign={"center"} mb={"20px"} fontWeight={500}>
            Share your love event
          </Heading>

          <Flex alignContent={"center"} justifyContent={"center"} gap={"1px"}>
            <Text
              border={"1px solid rgba(128, 128, 128, 0.3)"}
              padding={"4px"}
              display={"inline"}
              marginY={"auto"}
            >
              {" "}
              {referralLink}
            </Text>
            <Tooltip hasArrow label="copy here" aria-label="Copy here tooltip">
              <span>
                <Icon
                  as={ImCopy}
                  bg={"pink.400"}
                  padding={"5px"}
                  boxSize={"35px"}
                  onClick={handleCopy}
                  cursor={"pointer"}
                  marginTop={"7px"}
                  _hover={{ opacity: 0.7 }}
                  borderRadius={"2px"}
                />
              </span>
            </Tooltip>
          </Flex>

          <Formik
            initialValues={{ codeLink: "", email: "" }}
            validationSchema={SendCodeSchema}
            onSubmit={(values, action) => {
              console.log(values);
              handleSubmit(values);
              action.resetForm();
            }}
          >
            {(props) => {
              console.log(props);
              return (
                <Form>
                  <Flex
                    w={"475px"}
                    flexDir={"column"}
                    my={"3vh"}
                    mx={"auto"}
                    p={"30px"}
                    borderRadius={"15px"}
                    boxShadow={"1px 1px 8px rgba(128, 128, 128, 0.8)"}
                  >
                    <Stack>
                      <FormControl>
                        <FormLabel>Share Your Link*</FormLabel>
                        <Input
                          bg={"white"}
                          borderColor={"gray.300"}
                          as={Field}
                          name="codeLink"
                          type="text"
                        />
                        <ErrorMessage
                          name="codeLink"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Your Friend Email*</FormLabel>
                        <Input
                          as={Field}
                          name="email"
                          type="text"
                          bg={"white"}
                          borderColor={"gray.300"}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                      <Button bg={"blue.200"} type="submit" mt={"20px"}>
                        Submit
                      </Button>
                    </Stack>
                  </Flex>
                </Form>
              );
            }}
          </Formik>
          <Box>
            <Text textAlign={"center"}>Favorite Event</Text>

            <Flex
              flexWrap="wrap"
              marginTop="5px"
              maxW={"900px"}
              mx={"auto"}
              gap={"20px"}
            >
              {destinations.map((item) => (
                <Box
                  position="relative"
                  marginTop="5px"
                  cursor="pointer"
                  transition="0.3s"
                  _hover={{
                    filter: "grayscale(60%)",
                    transform: "translate(0, -5px)",
                  }}
                >
                  <Image
                    src={item.image}
                    width="20%"
                    rounded="xl"
                    boxSize="150px"
                    flexBasis="300px"
                    objectFit="cover"
                  />
                  <Text
                    position="absolute"
                    bottom="10px"
                    right="10px"
                    textColor="white"
                    fontWeight="bold"
                    fontSize="3xl"
                  >
                    {item.location}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default SendCode;
