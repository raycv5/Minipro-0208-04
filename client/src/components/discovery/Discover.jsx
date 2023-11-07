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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Card from "../homepage-component/Card";
import EventCard from "./EventCard";
import axios from "axios";
import { eventsData, eventsDetail } from "../../redux/eventSlice";
import { useNavigate } from "react-router-dom";

export const Discovery = ({ isLoad, setIsLoad, getEvent }) => {
   const dispatch = useDispatch();
   const country = useSelector((state) => state.country.value);
   const cities = useSelector((state) => state.cities.value);
   const category = useSelector((state) => state.category.value);
   const events = useSelector((state) => state.events.value);
   const userToken = localStorage.getItem("userToken");
   const [countryData, setCountryData] = useState(null);
   const [filterLocation, setFilterLocation] = useState([]);
   const [categoryData, setcategoryData] = useState(null);
   const [eventCard, setEventCard] = useState(null);
   const [filterEvents, setFilterEvents] = useState([]);
   const [eventCategory, setEventCategory] = useState([]);
   const navigate = useNavigate();

   const handleCard = async (eventId) => {
      setEventCard(eventId);
      try {
         const result = await axios.get(
            `http://localhost:2000/events/${eventId}`
         );
         // setIsLoad(false);
         dispatch(eventsData(result.data.result));
         navigate("/product-detail");
         // window.location.reload();
      } catch (error) {
         console.log(error);
      }
   };

   const handleClick = async (countryId) => {
      setCountryData(countryId);
      try {
         const result = await axios.get(
            `http://localhost:2000/events/country/${countryId}`
         );
         dispatch(eventsData(result.data.result));
      } catch (error) {
         console.log(error);
      }
   };
   const handleClickCategory = async (categoryId) => {
      setcategoryData(categoryId);
      try {
         const result = await axios.get(
            `http://localhost:2000/events/category/${categoryId}`
         );
         dispatch(eventsData(result.data.result));
      } catch (error) {
         console.log(error);
      }
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

   const [eventsValue, setEventsValue] = useState("");
   const handleEvents = (e) => {
      const searchEvent = e.target.value;
      setEventsValue(searchEvent);

      if (searchEvent === "") {
         setFilterEvents([]);
      } else {
         const filteredEvents = events.filter((events) => {
            const nameMatch = events.name
               .toLowerCase()
               .includes(searchEvent.toLowerCase());
            const categoryMatch = events.Category.category
               .toLowerCase()
               .includes(searchEvent.toLowerCase());
            const countryMatch = events.Country.country
               .toLowerCase()
               .includes(searchEvent.toLowerCase());
            const descriptionsMatch = events.descriptions
               .toLowerCase()
               .includes(searchEvent.toLowerCase());
            const cityMatch = events.City.city
               .toLowerCase()
               .includes(searchEvent.toLowerCase());

            return (
               nameMatch ||
               categoryMatch ||
               countryMatch ||
               descriptionsMatch ||
               cityMatch
            );
         });
         setFilterEvents(filteredEvents);
      }
   };
   const displayedEvents = eventsValue.length > 0 ? filterEvents : events;

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
               borderBottom={"1px solid"}
               borderColor={"gray.200"}
               justifyContent={"space-between"}
               alignItems={"center"}
               p={"0  5% 10px 5%"}>
               <HStack w={"500px"} alignItems={"center"}>
                  <FilterOption
                     eventsValue={eventsValue}
                     handleEvents={handleEvents}
                  />
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
         <GridItem
            h={"100vh"}
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
               getEvent={getEvent}
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
                  isLoad={isLoad}
                  events={displayedEvents}
                  category={category}
                  handleCard={handleCard}
               />
            </Flex>
         </GridItem>
      </Grid>
   );
};
