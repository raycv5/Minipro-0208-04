import {
   IconButton,
   Avatar,
   Box,
   CloseButton,
   Flex,
   HStack,
   VStack,
   Icon,
   useColorModeValue,
   Text,
   Drawer,
   DrawerContent,
   useDisclosure,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
} from "@chakra-ui/react";
import {
   FiHome,
   FiTrendingUp,
   FiMenu,
   FiBell,
   FiChevronDown,
   FiPlus,
} from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterEvent } from "./RegisterEvent";



const LinkItems = [
   { name: "Home", icon: FiHome },
   { name: "Sales report", icon: FiTrendingUp },
   { name: "Add event", icon: FiPlus },

];
const SidebarContent = ({ onClose, ...rest }) => {
   const navigate = useNavigate();
   const home = () => {
      navigate("/buildyourpage");
      
   };

   

   const sales = () => {
      navigate("/buildyourpage/salesreport");
      
   };
   return (
      <Box
         transition="3s ease"
         bg={useColorModeValue("white", "gray.900")}
         borderRight="1px"
         borderRightColor={useColorModeValue("gray.200", "gray.700")}
         w={{ base: "full", md: 60 }}
         pos="fixed"
         h="full"
         {...rest}>
         <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
            <Flex
               fontSize="2xl"
               fontFamily="monospace"
               fontWeight="bold"
               alignItems={"center"}>
               <MdDashboard /> Dashboard
            </Flex>
            <CloseButton
               display={{ base: "flex", md: "none" }}
               onClick={onClose}
            />
         </Flex>
         {/* {LinkItems.map((link, index) => (
            <NavItem key={link.name} icon={link.icon} id={index}>
               {link.name}
            </NavItem>
         ))} */}
         <NavItem onClick={home}>
            <Text display={"flex"} alignItems={"center"} gap={"20px"}>
               <FiHome />
               {LinkItems[0].name}
            </Text>
         </NavItem>
         <NavItem onClick={sales}>
            <Text display={"flex"} alignItems={"center"} gap={"20px"}>
               <FiTrendingUp />
               {LinkItems[1].name}
            </Text>
         </NavItem>
         <NavItem >
            <Text display={"flex"} alignItems={"center"} gap={"20px"}>
               <FiPlus />
               {LinkItems[2].name}
            </Text>
         </NavItem>
      </Box>
   );
};

const NavItem = ({ icon, children, ...rest }) => {
   return (
      <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
         <Flex
            flexDir={"column"}
            align="start"
            gap={"20px"}
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            _hover={{
               bg: "green.300",
               color: "white",
            }}
            {...rest}>
            {icon && (
               <Icon
                  mr="4"
                  fontSize="16"
                  _groupHover={{
                     color: "white",
                  }}
                  as={icon}
               />
            )}
            {children}
         </Flex>
      </Box>
   );
};

const OrganizerDetail = ({ onOpen, ...rest }) => {
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
            <IconButton
               size="lg"
               variant="ghost"
               aria-label="open menu"
               icon={<FiBell />}
            />
            <Flex alignItems={"center"}>
               <Menu>
                  <MenuButton
                     py={2}
                     transition="all 0.3s"
                     _focus={{ boxShadow: "none" }}>
                     <HStack>
                        <Avatar size={"sm"} name={organizer.name} />
                        <VStack
                           display={{ base: "none", md: "flex" }}
                           alignItems="flex-start"
                           spacing="1px"
                           ml="2">
                           <Text fontSize="sm">{organizer.name}</Text>
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

export const AddEventDashboard = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
         <SidebarContent
            onClose={onClose}
            display={{ base: "none", md: "block" }}
         />
         <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full">
            <DrawerContent>
               <SidebarContent onClose={onClose} />
            </DrawerContent>
         </Drawer>
         {/* OrganizerDetail */}
         <OrganizerDetail onOpen={onOpen} />
         <Box ml={{ base: 0, md: 60 }} p="4" bg={"white"} >
            <RegisterEvent/>
         </Box>
      </Box>
   );
};
