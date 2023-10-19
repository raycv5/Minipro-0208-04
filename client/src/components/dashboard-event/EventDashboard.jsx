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
   Stack,
} from "@chakra-ui/react";
import { PiChatTeardropDotsFill } from "react-icons/pi";
import { MdInsights, MdNotifications } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
   const navigate = useNavigate();
   const handleLogout = () => {
      localStorage.clear();
      navigate("/joinwithus");
      window.location.reload();
   };
   const organizer = useSelector((state) => state.events.value);
   console.log(organizer);
   return (
      <Box>
         <Flex
            justifyContent="space-between"
            p="1% 5%"
            alignItems={"center"}
            borderBottom={"1px solid"}
            borderColor={"gray.200"}>
            <Text fontSize={"30px"} fontStyle={"italic"}>Wellcome {organizer.name}</Text>
            <Flex gap={"25px"} color={"gray.300"}>
               <HStack position={"relative"} gap={"20px"}>
                  <Badge
                     p={"2px"}
                     position={"absolute"}
                     right={"220px"}
                     bg="red.600"
                     top={"-8px"}
                     rounded={"50%"}
                     color={"white"}
                     fontSize={"10px"}>
                     12
                  </Badge>
                  <Badge
                     p={"2px"}
                     position={"absolute"}
                     right={"175px"}
                     bg="red.600"
                     top={"-8px"}
                     rounded={"50%"}
                     color={"white"}
                     fontSize={"10px"}>
                     12
                  </Badge>
                  <PiChatTeardropDotsFill size={"25px"} />
                  <MdNotifications size={"25px"} />
                  <Flex gap={"10px"}>
                     <AiOutlineUser size={"25px"} />
                     <Stack lineHeight={"10px"}>
                        <Text>{organizer.name}</Text>
                        <Text>{organizer.email}</Text>
                     </Stack>
                  </Flex>
               </HStack>
            </Flex>
         </Flex>
         <Grid
            templateAreas={`"sidebar main " "sidebar main "`}
            gridTemplateRows={"50px 1fr 30px"}
            gridTemplateColumns={"200px 1fr"}
            h="100vh"
            gap="1">
            <GridItem bg={"gray.100"} h={"100vh"} p={"5%"} area={"sidebar"}>
               <Text
                  fontSize={"20px"}
                  color={"black"}
                  fontWeight={"bold"}
                  margin={"15px auto"}>
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
                           textAlign={"start"}>
                           <Text>{item.icon}</Text>
                           <Text
                              margin={"10px"}
                              as={"a"}
                              href={item.link}
                              w={"100%"}>
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
                  textAlign={"start"}>
                  <Text>
                     <CgLogOut />
                  </Text>
                  <Button
                     onClick={handleLogout}
                     bg={"transparent"}
                     _hover={{ bg: "transparent" }}
                     fontWeight={"normal"}
                     textAlign={"start"}>
                     Logout
                  </Button>
               </Flex>
            </GridItem>
            <GridItem area={"main"} bg={"red"}>
               2
            </GridItem>
         </Grid>
      </Box>
   );
};
