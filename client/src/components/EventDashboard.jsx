import {
  Box,
  Grid,
  Flex,
  Heading,
  GridItem,
  Text,
  Badge,
  HStack,
  Button,
} from "@chakra-ui/react";
import { PiChatTeardropDotsFill, PiHandbagFill } from "react-icons/pi";
import { MdInsights, MdNotifications } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
const sideBar = [
  {
    name: "Home",
    icon: <AiFillHome />,
    link: "",
  },
  {
    name: "Create Event",
    icon: <GrAdd />,
    link: "",
  },
  {
    name: "Sales Reports",
    icon: <MdInsights />,
    link: "",
  },
];
export const EventDashboard = () => {
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        p="1% 5%"
        alignItems={"center"}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
      >
        <Heading>Wellcome "user"</Heading>
        <Flex gap={"25px"} color={"gray.300"}>
          <HStack position={"relative"} gap={"20px"}>
            <Badge
              p={"2px"}
              position={"absolute"}
              right={"80px"}
              bg="red.600"
              top={"-8px"}
              rounded={"50%"}
              color={"white"}
              fontSize={"10px"}
            >
              12
            </Badge>
            <Badge
              p={"2px"}
              position={"absolute"}
              right={"40px"}
              bg="red.600"
              top={"-8px"}
              rounded={"50%"}
              color={"white"}
              fontSize={"10px"}
            >
              12
            </Badge>
            <PiChatTeardropDotsFill size={"25px"} />
            <MdNotifications size={"25px"} />
            <AiOutlineUser size={"25px"} />
          </HStack>
        </Flex>
      </Flex>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={"20px"}>
        <GridItem bg={"gray.100"} h={"100vh"} w={"50%"} p={"5%"}>
          <Text
            fontSize={"20px"}
            color={"black"}
            fontWeight={"bold"}
            margin={"15px auto"}
          >
            Dashboard
          </Text>
          {sideBar.map((item) => {
            return (
              <Box key={item.name}>
                <Flex
                  gap={"5px"}
                  alignItems={"center"}
                  _hover={{ bg: "blue.300" }}
                  p={"5px 10px"}
                  rounded={"20px"}
                  textAlign={"start"}
                >
                  <Text>{item.icon}</Text>
                  <Text margin={"10px"} as={"a"} href={item.link} w={"100%"}>
                    {item.name}
                  </Text>
                </Flex>
              </Box>
            );
          })}
          <Flex
            gap={"5px"}
            alignItems={"center"}
            _hover={{ bg: "blue.300" }}
            p={"8px 10px"}
            rounded={"20px"}
            textAlign={"start"}
          >
            <Text>
              <CgLogOut />
            </Text>
            <Button
              bg={"transparent"}
              _hover={{ bg: "transparent" }}
              fontWeight={"normal"}
              textAlign={"start"}
            >
              Logout
            </Button>
          </Flex>
        </GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
      </Grid>
    </Box>
  );
};
