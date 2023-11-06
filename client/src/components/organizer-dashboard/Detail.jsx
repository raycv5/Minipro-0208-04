import {
   IconButton,
   Flex,
   useColorModeValue,
   Menu,
   Avatar,
   MenuButton,
   HStack,
   MenuList,
   Text,
   Box,
   MenuItem,
   VStack,
   Popover,
   PopoverTrigger,
   PopoverArrow,
   PopoverHeader,
   Button,
   PopoverContent,
   PopoverCloseButton,
   PopoverBody,
} from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiBell, FiMenu, FiChevronDown } from "react-icons/fi";

export const OrganizerDetail = ({ onOpen, ...rest }) => {
   const navigate = useNavigate();
   const organizer = useSelector((state) => state.organizer.value);
   const handleLogout = () => {
      localStorage.clear();
      navigate("/joinwithus");
   };
   return (
      <Flex
         ml={{ base: 0, md: 60 }}
         px={{ base: 4, md: 4 }}
         height="20"
         alignItems="center"
         bg={useColorModeValue("white", "gray.900")}
         borderBottomWidth="1px"
         borderBottomColor={useColorModeValue("gray.200", "gray.700")}
         justifyContent={{ base: "space-between", md: "flex-end" }}
         {...rest}>
         <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<FiMenu />}
         />

         <Flex
            display={{ base: "flex", md: "none" }}
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            alignItems={"center"}>
            <MdDashboard /> Dashboard
         </Flex>

         <HStack spacing={{ base: "0", md: "6" }}>
            <Popover>
               <PopoverTrigger>
                  <IconButton
                     size="md"
                     variant="ghost"
                     aria-label="open menu"
                     icon={<FiBell />}
                  />
               </PopoverTrigger>
               <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Notification!</PopoverHeader>
                  <PopoverBody gap={"10px"}>
                     <Flex alignItems={"center"}>
                        <Avatar name="" size={"sm"} />
                        <Text fontSize={"12px"} p={"0 5px"}>
                           {" "}
                           Are you sure you want to have that milkshake?
                        </Text>
                     </Flex>
                     <Flex alignItems={"center"}>
                        <Avatar name="" size={"sm"} />
                        <Text fontSize={"12px"} p={"0 5px"}>
                           {" "}
                           Are you sure you want to have that milkshake?
                        </Text>
                     </Flex>
                     <Flex alignItems={"center"}>
                        <Avatar name="" size={"sm"} />
                        <Text fontSize={"12px"} p={"0 5px"}>
                           {" "}
                           Are you sure you want to have that milkshake?
                        </Text>
                     </Flex>
                     <Flex alignItems={"center"}>
                        <Avatar name="" size={"sm"} />
                        <Text fontSize={"12px"} p={"0 5px"}>
                           {" "}
                           Are you sure you want to have that milkshake?
                        </Text>
                     </Flex>
                  </PopoverBody>
               </PopoverContent>
            </Popover>

            <Flex alignItems={"center"}>
               <Menu>
                  <MenuButton
                     py={2}
                     transition="all 0.3s"
                     _focus={{ boxShadow: "none" }}>
                     <HStack>
                        <Avatar size={"sm"} name={organizer.first_name} />
                        <VStack
                           display={{ base: "none", md: "flex" }}
                           alignItems="flex-start"
                           spacing="1px"
                           ml="2">
                           <Text fontSize="sm">
                              {organizer.first_name}
                              {organizer.last_name}
                           </Text>
                           <Text fontSize="xs" color="gray.600">
                              {organizer.email}
                           </Text>
                        </VStack>
                        <Box display={{ base: "none", md: "flex" }}>
                           <FiChevronDown />
                        </Box>
                     </HStack>
                  </MenuButton>
                  <MenuList
                     bg={useColorModeValue("white", "gray.900")}
                     borderColor={useColorModeValue("gray.200", "gray.700")}>
                     <MenuItem>Profile</MenuItem>
                     <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                  </MenuList>
               </Menu>
            </Flex>
         </HStack>
      </Flex>
   );
};
