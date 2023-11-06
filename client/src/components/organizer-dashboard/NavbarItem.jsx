import { Box,Flex, Icon } from "@chakra-ui/react";


export const NavItem = ({ icon, children, ...rest }) => {
   return (
      <Box style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
         <Flex
            //flexDir={"column"}
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
