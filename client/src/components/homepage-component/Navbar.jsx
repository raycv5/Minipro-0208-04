import React from "react";
import {
   Box,
   Flex,
   Text,
   IconButton,
   Button,
   Stack,
   Collapse,
   useColorModeValue,
   useBreakpointValue,
   useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import UserLogin from "../UserLogin";
import { DesktopNav } from "./DesktopNavbar";
import { MobileNav } from "./MobileNavbar";

const NAV_ITEMS = [
   {
      label: "Discover",
      href: "/discovery",
   },
];

export const Navbar = () => {
   const { isOpen, onToggle } = useDisclosure();
   const navigate = useNavigate();
   const handleEvent = () => {
      navigate("/joinwithus");
   };

   return (
      <Box>
         <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            minH={"60px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            align={"center"}
            padding="1% 12%">
            <Flex
               flex={{ base: 1, md: "auto" }}
               ml={{ base: -2 }}
               display={{ base: "flex", md: "none" }}>
               <IconButton
                  onClick={onToggle}
                  icon={
                     isOpen ? (
                        <CloseIcon w={3} h={3} />
                     ) : (
                        <HamburgerIcon w={5} h={5} />
                     )
                  }
                  variant={"ghost"}
                  aria-label={"Toggle Navigation"}
               />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
               <Text
                  textAlign={useBreakpointValue({ base: "center", md: "left" })}
                  fontFamily={"heading"}
                  textColor="green.400"
                  fontWeight="bold"
                  fontSize="lg">
                  dofun.
               </Text>

               <Flex display={{ base: "none", md: "flex" }} ml={10}>
                  <DesktopNav NAV_ITEMS={NAV_ITEMS} />
               </Flex>
            </Flex>

            <Stack
               flex={{ base: 1, md: 0 }}
               justify={"flex-end"}
               direction={"row"}
               spacing={6}>
               <UserLogin />
               <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href="/userRegister">
                  Register
               </Button>
               <Button
                  cursor={"pointer"}
                  onClick={handleEvent}
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"green.400"}
                  _hover={{
                     bg: "green.300",
                  }}>
                  Join with Us
               </Button>
            </Stack>
         </Flex>

         <Collapse in={isOpen} animateOpacity>
            <MobileNav NAV_ITEMS={NAV_ITEMS} />
         </Collapse>
      </Box>
   );
};
