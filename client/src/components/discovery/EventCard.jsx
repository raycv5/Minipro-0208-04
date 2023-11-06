"use client";

import { Box, Text, Stack, Image, Flex } from "@chakra-ui/react";

export default function EventCard({ events, handleCard }) {
   console.log(events);
   const price = events.price;
   console.log(price);

   return (
      <>
         {events.map((events) => (
            <Flex
               key={events.id}
               onClick={() => handleCard(events.id)}
               marginTop="32px"
               maxWidth="300px"
               rounded="sm"
               spacing="0px"
               flexDirection="column"
               flexBasis="250px"
               transition="0.2s"
               cursor="pointer"
               boxShadow={"lg"}
               _hover={{
                  transform: "scale(1.03)",
               }}>
               <Box>
                  <Image
                     borderTopLeftRadius="xl"
                     borderTopRightRadius="xl"
                     w={"300px"}
                     h={"200px"}
                     src={`http://localhost:2000/${events.image}`}
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
                     <Text fontWeight="bold">{events.Country.country}</Text>
                     <Text fontWeight="thin">{events.Category.category}</Text>
                     <Text fontWeight="bold">{events.name}</Text>
                     <Text fontWeight="thin">{events.descriptions}</Text>
                  </Stack>
                  <Box>
                     <Text>
                        From{" "}
                        <Text as="span" fontWeight="bold">
                           {events.price}
                        </Text>
                     </Text>
                     <Text>
                        Organizer: {events.Organizer.first_name}{" "}
                        {events.Organizer.last_name}
                     </Text>
                  </Box>
               </Flex>
            </Flex>
         ))}
      </>
   );
}
