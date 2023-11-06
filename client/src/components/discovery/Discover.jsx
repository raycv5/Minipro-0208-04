import {
   Flex,
   Grid,
   GridItem,
   Heading,
   useColorModeValue,
   Text,
   VStack,
   HStack,
   Avatar,
   Menu,
   MenuList,
   MenuItem,
   MenuButton,
   Link,
} from "@chakra-ui/react";
import { AccordionDiscover } from "./accordion";
import UserLogin from "../UserLogin";
import { FilterOption } from "./SelectOption";
import { useSelector } from "react-redux";
import { useState } from "react";
import Card from "../homepage-component/Card";
import EventCard from "./EventCard";

export const Discovery = () => {
   const country = useSelector((state) => state.country.value);
   const cities = useSelector((state) => state.cities.value);
   const category = useSelector((state) => state.category.value);
   const events = useSelector((state) => state.events.value);
   const token = localStorage.getItem("token");
   const [countryData, setCountryData] = useState(null);
   const [categoryData, setcategoryData] = useState(null);
   const [filterLocation, setFilterLocation] = useState([]);
   const [eventCard, setEventCard] = useState(null);
   const [filterEvents, setFilterEvents] = useState([]);

   const handleCard = (eventId) => {
      setEventCard(eventId);
   };

   const handleClick = (countryId) => {
      setCountryData(countryId);
   };
   const handleClickCategory = (categoryId) => {
      setcategoryData(categoryId);
   };

   const [value, setValue] = useState("");
   const handleChange = (e) => {
      const searchLocation = e.target.value;
      setValue(searchLocation);

      if (searchLocation === "") {
         setFilterLocation([]);
      } else {
         const filtered = country.filter((country) =>
            country.country.toLowerCase().includes(searchLocation.toLowerCase())
         );
         setFilterLocation(filtered);
      }
   };
   const displayedLocation = value.length > 0 ? filterLocation : country;

   return (
      <Grid
         templateAreas={`"nav header"
                  "nav main"
                  "nav main"`}
         gridTemplateRows={"50px 1fr 30px"}
         gridTemplateColumns={"250px 1fr"}
         h="100vh"
         gap="1"
         color="blackAlpha.700">
         <GridItem p={"17px 0"} area={"header"}>
            <Flex
               // borderBottom={"1px solid"}
               borderColor={"gray.200"}
               justifyContent={"space-between"}
               alignItems={"center"}
               p={"0px 5%"}>
               <HStack bg={"red"} alignItems={"center"}></HStack>
               <HStack w={"500px"} alignItems={"center"}>
                  <FilterOption />
               </HStack>
               <Flex alignItems={"center"} gap={"20px"}>
                  {!token ? (
                     <>
                        <UserLogin />
                        <Link
                           href="/userRegister"
                           color={"gray.500"}
                           fontSize={"14px"}>
                           Register
                        </Link>
                     </>
                  ) : (
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
                  )}
               </Flex>
            </Flex>
         </GridItem>
         <GridItem
            p={"20px 0"}
            area={"nav"}
            bg={useColorModeValue("gray.50", "gray.800")}>
            <Heading
               textColor="green.400"
               textAlign={"center"}
               fontSize={{ base: "14px", md: "20px" }}
               m={"0px 0 20px 0"}>
               Dofun
            </Heading>
            <AccordionDiscover
               handleChange={handleChange}
               handleClick={handleClick}
               value={value}
               displayedLocation={displayedLocation}
               handleClickCategory={handleClickCategory}
               categoryData={categoryData}
               countryData={countryData}
               country={country}
               cities={cities}
               category={category}
            />
         </GridItem>
         <GridItem area={"main"} p={"5px 2%"}>
            <Flex gap={"2%"}>
               <EventCard
                  events={events}
                  category={category}
                  handleCard={handleCard}
               />
            </Flex>
         </GridItem>
      </Grid>
   );
};
