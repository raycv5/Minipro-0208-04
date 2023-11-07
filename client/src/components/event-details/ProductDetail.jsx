"use client";

import {
   Box,
   chakra,
   Container,
   Stack,
   Text,
   Image,
   Flex,
   VStack,
   Button,
   Heading,
   SimpleGrid,
   StackDivider,
   useColorModeValue,
   VisuallyHidden,
   HStack,
   List,
   ListItem,
   Grid,
   GridItem,
   Skeleton,
   Menu,
   MenuItem,
   MenuButton,
   MenuList,
   Avatar,
   Link,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { useSelector } from "react-redux";
import UserLogin from "../UserLogin";

export default function ProductDetail({ isLoad }) {
   const events = useSelector((state) => state.events.value);
   const userToken = localStorage.getItem("userToken");
   return (
      <Grid
         templateAreas={`"header header"
                  "main main"
                  "main main"`}
         gridTemplateRows={"50px 1fr 30px"}
         gridTemplateColumns={"250px 1fr"}
         h="100vh"
         gap="1"
         color="blackAlpha.700">
         <GridItem p={"17px 0"} area={"header"}>
            <Flex
               borderBottom={"1px solid"}
               borderColor={"gray.200"}
               justifyContent={"space-between"}
               alignItems={"center"}
               p={"0  5% 10px 5%"}>
               <HStack alignItems={"center"}>
                  <Heading
                     as={"a"}
                     href="/discovery"
                     textColor="green.400"
                     textAlign={"center"}
                     fontSize={{ base: "14px", md: "20px" }}
                     m={"0px 0 20px 0"}>
                     Dofun
                  </Heading>
               </HStack>
               <Flex alignItems={"center"} gap={"20px"}>
                  {userToken ? (
                     <Menu>
                        <VStack
                           display={{ base: "none", md: "flex" }}
                           alignItems="flex-start"
                           spacing="1px"
                           ml="2">
                           <Text fontSize="sm">NAMA USER</Text>
                           <Text fontSize="xs" color="gray.600">
                              EMAIL USER
                           </Text>
                        </VStack>
                        <MenuButton
                           py={2}
                           transition="all 0.3s"
                           _focus={{ boxShadow: "none" }}>
                           <Avatar size={"sm"} />
                        </MenuButton>
                        <MenuList bg={"white"} borderColor={"gray.300"}>
                           <MenuItem>Profile</MenuItem>
                           <MenuItem>Sign out</MenuItem>
                        </MenuList>
                     </Menu>
                  ) : (
                     <>
                        <UserLogin />
                        <Link
                           href="/userRegister"
                           color={"gray.500"}
                           fontSize={"14px"}>
                           Register
                        </Link>
                     </>
                  )}
               </Flex>
            </Flex>
         </GridItem>
         <GridItem p={"17px 0"} area={"main"}>
            <Container maxW={"7xl"}>
               <SimpleGrid
                  columns={{ base: 1, lg: 2 }}
                  spacing={{ base: 8, md: 10 }}
                  py={{ base: 18, md: 24 }}>
                  <Flex>
                     <Skeleton isLoaded={!isLoad}>
                        <Image
                           rounded={"md"}
                           alt={"product image"}
                           src={`http://localhost:2000/${events.image}`}
                           fit={"cover"}
                           align={"center"}
                           w={"100%"}
                           h={{ base: "100%", sm: "400px", lg: "500px" }}
                        />
                     </Skeleton>
                  </Flex>
                  <Stack spacing={{ base: 6, md: 10 }}>
                     <Box as={"header"}>
                        <Heading
                           lineHeight={1.1}
                           fontWeight={600}
                           fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}>
                           {events.name}
                        </Heading>
                        <Text
                           color={useColorModeValue("gray.900", "gray.400")}
                           fontWeight={300}
                           fontSize={"2xl"}>
                           Start from Rp.{events.price}
                        </Text>
                     </Box>

                     <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={"column"}
                        divider={
                           <StackDivider
                              borderColor={useColorModeValue(
                                 "gray.200",
                                 "gray.600"
                              )}
                           />
                        }>
                        <HStack spacing={{ base: 4, sm: 6 }}>
                           <Text fontSize={"lg"}>Description :</Text>
                           <Text
                              color={useColorModeValue("gray.500", "gray.400")}
                              fontSize={"2xl"}
                              fontWeight={"300"}>
                              {events.descriptions}
                           </Text>
                        </HStack>
                        <Box>
                           <Text
                              fontSize={{ base: "16px", lg: "18px" }}
                              color={useColorModeValue(
                                 "yellow.500",
                                 "yellow.300"
                              )}
                              fontWeight={"500"}
                              textTransform={"uppercase"}
                              mb={"4"}>
                              Details
                           </Text>

                           <SimpleGrid
                              columns={{ base: 1, md: 2 }}
                              spacing={10}>
                              <List spacing={2}>
                                 <ListItem>Category</ListItem>
                                 <ListItem>Location</ListItem>{" "}
                                 <ListItem>Date</ListItem>
                                 <ListItem>Ticket amount</ListItem>
                              </List>
                              <List spacing={2}>
                                 <ListItem>
                                    : {events.Category.category}
                                 </ListItem>
                                 <ListItem>
                                    : {events.City.city},{" "}
                                    {events.Country.country}
                                 </ListItem>
                                 <ListItem>: {events.date}</ListItem>
                                 <ListItem>: {events.amount} Tickets</ListItem>
                              </List>
                           </SimpleGrid>
                        </Box>
                     </Stack>

                     <Button
                        rounded={"none"}
                        w={"full"}
                        mt={8}
                        size={"lg"}
                        py={"7"}
                        bg={useColorModeValue("gray.900", "gray.50")}
                        color={useColorModeValue("white", "gray.900")}
                        textTransform={"uppercase"}
                        _hover={{
                           transform: "translateY(2px)",
                           boxShadow: "lg",
                        }}>
                        Add to cart
                     </Button>
                  </Stack>
               </SimpleGrid>
            </Container>
         </GridItem>
      </Grid>
   );
}
