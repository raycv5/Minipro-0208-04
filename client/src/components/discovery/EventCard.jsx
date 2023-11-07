import {
   Box,
   Text,
   Stack,
   Image,
   Flex,
   Heading,
   Skeleton,
   SkeletonText,
   Grid,
} from "@chakra-ui/react";
export default function EventCard({ events, handleCard, isLoad }) {
   console.log(events.name);
   console.log(events);

   return (
      <>
         {events.length > 0 ? (
            <Grid templateColumns={"repeat(4,1fr)"} gap={"20px"} p={"1% 3%"}>
               {events.map((event) => (
                  <Flex
                     key={event.id}
                     onClick={() => {
                        handleCard(event.id);
                     }}
                     marginTop="32px"
                     maxWidth="250px"
                     rounded="sm"
                     flexDirection="column"
                     flexBasis="250px"
                     transition="0.2s"
                     cursor="pointer"
                     boxShadow={"lg"}
                     _hover={{
                        transform: "scale(1.03)",
                     }}>
                     <Box>
                        <Skeleton isLoaded={!isLoad}>
                           <Image
                              borderTopLeftRadius="xl"
                              borderTopRightRadius="xl"
                              w={"300px"}
                              h={"200px"}
                              src={`http://localhost:2000/${event.image}`}
                           />
                           {console.log(event.image)}
                        </Skeleton>
                     </Box>
                     <Flex
                        direction="column"
                        justifyContent="space-between"
                        gap="30px"
                        padding="10px"
                        borderTop="none"
                        borderBottomLeftRadius="xl"
                        borderBottomRightRadius="xl"
                        borderColor="gray.300"
                        bgColor="white"
                        shadow={"sm"}>
                        <Stack direction="column">
                           <SkeletonText
                              noOfLines={4}
                              spacing="4"
                              skeletonHeight="2"
                              isLoaded={!isLoad}>
                              <Text fontWeight="bold">
                                 {event.City.city}, {event.Country.country}
                              </Text>
                              <Text fontWeight="thin">
                                 {event.Category.category}
                              </Text>
                              <Text fontWeight="bold">{event.name}</Text>
                              <Text fontWeight="thin">
                                 {new Date(event.date).toLocaleString("GMT", {
                                    weekday: "short",
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                 })}
                              </Text>
                           </SkeletonText>
                        </Stack>
                        <Box>
                           {!event.price == 0 ? (
                              <Text>
                                 From{" "}
                                 <Text as="span" fontWeight="bold">
                                    {event.price.toLocaleString("id-ID", {
                                       style: "currency",
                                       currency: "IDR",
                                    })}
                                 </Text>
                              </Text>
                           ) : (
                              <Text>
                                 From{" "}
                                 <Text as="span" fontWeight="bold">
                                    FREE
                                 </Text>
                              </Text>
                           )}
                           <SkeletonText
                              noOfLines={4}
                              spacing="4"
                              skeletonHeight="2"
                              isLoaded={!isLoad}>
                              <Text>
                                 Organizer: {event.Organizer.first_name}{" "}
                                 {event.Organizer.last_name}
                              </Text>
                           </SkeletonText>
                        </Box>
                     </Flex>
                  </Flex>
               ))}
            </Grid>
         ) : (
            <Box>
               <Heading
                  textAlign={"center"}
                  fontSize={"30px"}
                  p={"20px 0"}
                  color={"pink.600"}>
                  Events Not Found
               </Heading>
               <Flex alignItems={"center"} justifyContent={"center"}>
                  <Image
                     src="https://property.ca/static/images/404_illustration_property.png"
                     maxWidth={"50%"}
                  />
               </Flex>
            </Box>
         )}
      </>
   );
}
