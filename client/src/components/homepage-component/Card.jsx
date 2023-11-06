import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
function Card({ key, handleCard, item }) {
   console.log(key);
   return (
      <>
         <Flex
            marginTop="32px"
            maxWidth="300px"
            rounded="sm"
            spacing="0px"
            flexDirection="column"
            flexBasis="300px"
            transition="0.2s"
            cursor="pointer"
            _hover={{
               transform: "scale(1.03)",
            }}>
            <Box>
               <Image
                  borderTopLeftRadius="xl"
                  borderTopRightRadius="xl"
               />
            </Box>
            <Flex
               direction="column"
               justifyContent="space-between"
               gap="96px"
               padding="10px"
               borderTop="none"
               borderBottomLeftRadius="xl"
               borderBottomRightRadius="xl"
               borderColor="gray.300"
               bgColor="white"
               shadow={"sm"}>
               <Stack direction="column">
                  <Text fontWeight="bold"></Text>
                  <Text fontWeight="thin"></Text>
                  <Text fontWeight="bold"></Text>
                  <Text fontWeight="thin"></Text>
               </Stack>
               <Box>
                  <Text>
                     From{" "}
                     <Text as="span" fontWeight="bold">
                     </Text>
                  </Text>
               </Box>
            </Flex>
         </Flex>
      </>
   );
}

export default Card;
