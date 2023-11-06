import { Box, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { NavItem } from "./NavbarItem";

export const Sidebar = ({
   onClose,
   selectContent,
   changeContent,
   LinkItems,
   ...rest
}) => {
   console.log(LinkItems);
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
         {LinkItems?.map((item, index) => (
            <NavItem
               key={item}
               id={index}
               icon={item.icon}
               onClick={() => changeContent(item.name)}
               
               >
                  {item.name}
               {/* {console.log(item)} */}
            </NavItem>
         ))}
      </Box>
   );
};
