import {
  Grid,
  GridItem,
  Flex,
  Text,
  Icon,
  Avatar,
  Heading,
  Box,
} from "@chakra-ui/react";
import { PiTicketFill } from "react-icons/pi";
import { MdAttachEmail, MdEventNote } from "react-icons/md";
import { Link } from "react-router-dom";
import NavbarDashboard from "./Navbar-Dash";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const flexStyle = {
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  p: "5px",
  _hover: { bg: "blue.400", color: "white", borderRadius: "5px" },
};

const ReferralContent = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const registrationDate = new Date("2023-10-22");
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const expirationDate = new Date(registrationDate);
    expirationDate.setMonth(expirationDate.getMonth() + 1);

    const updateRemainingTime = () => {
      const currentTime = new Date();
      const timeDifference = expirationDate - currentTime;

      if (timeDifference <= 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        let h = Math.floor(timeDifference / (1000 * 60 * 60));
        let m = Math.floor((timeDifference / (1000 * 60)) % 60);
        let s = Math.floor((timeDifference / 1000) % 60);

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      }
    };

    const interval = setInterval(updateRemainingTime, 1000);
    updateRemainingTime();

    return () => clearInterval(interval);
  }, [registrationDate]);

  const blinkAnimation = `
    @keyframes blink {
      0% {
        opacity: 1;
      }
      40% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  return (
    <>
      <NavbarDashboard />
      <Grid templateColumns="20vw 80vw">
        {/* <GridItem h="100vh"><Sidebar/></GridItem> */}
        <Flex flexDir={"column"} m={"10px 10px"} gap={"30px"} fontSize={"20px"}>
          <Text fontWeight={500} ml={"5px"} mt={"20px"}>
            Dashboard
          </Text>
          <Flex {...flexStyle}>
            <Icon as={Avatar} boxSize={"20px"} />
            <Link to="/welcome-user">
              <Text>Welcome</Text>
            </Link>
          </Flex>

          <Flex {...flexStyle}>
            <Icon as={PiTicketFill} boxSize={"25px"} />
            <Text>Referral Code</Text>
          </Flex>

          <Flex {...flexStyle}>
            <Icon as={MdAttachEmail} boxSize={"25px"} />
            <Link to="/send-code">
              <Text>Invite/Send</Text>
            </Link>
          </Flex>

          <Flex {...flexStyle}>
            <Icon as={MdEventNote} boxSize={"25px"} />
            <Link to="/user-event">
              <Text>Your Event</Text>
            </Link>
          </Flex>
        </Flex>

        {/* // content */}
        <GridItem h="100vh" bgColor={"gray.50"} p={"10px"}>
          <Heading textAlign="center" mb="20px">
            Referral Code Time Remaining
          </Heading>
          <Text textAlign={"center"} mb={"20px"}>
            Your referrence {user.referralCode} code will expire in:{" "}
          </Text>
          <style>{blinkAnimation}</style>
          <Box
            maxW={"300px"}
            mx={"auto"}
            p={"20px"}
            borderRadius={"20px"}
            textAlign={"center"}
            bg={"rgb(158, 153, 153)"}
            boxShadow={"inset 5px 5px 10px white"}
            color={"blue.300"}
          >
            <Flex
              p={"10px"}
              borderRadius={"10px"}
              justifyContent={"center"}
              alignItems={"center"}
              w={"100%"}
              bg={"black"}
              boxShadow={"2px 2px 20px white"}
            >
              <Text fontSize={"60px"}>
                {hours}
                <Text
                  display={"inline"}
                  style={{ animation: "blink 1s infinite" }}
                >
                  :
                </Text>
                {minutes}
              </Text>
            </Flex>
          </Box>
          <Text textAlign={"center"} mt={"5px"}>
            {hours} Hours:{minutes} minutes:{seconds} seconds
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default ReferralContent;
