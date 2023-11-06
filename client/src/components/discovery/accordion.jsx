"use client";

import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   Flex,
   useColorModeValue,
   Text,
   Container,
   Stack,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { SearchLocation } from "./Search";
import { CheckBoxEvent } from "./Checkbox";

export const AccordionDiscover = ({
   category,
   handleChange,
   handleClick,
   handleClickCategory,
   value,
   displayedLocation,
}) => {
   return (
      <Flex
         minH={"100vh"}
         align={"start"}
         justify={"center"}
         bg={useColorModeValue("gray.50", "gray.800")}>
         <Container>
            <Accordion
               allowMultiple
               width="100%"
               maxW="lg"
               rounded="lg"
               defaultIndex={[0, 1]}>
               <AccordionItem>
                  <AccordionButton
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                     p={4}>
                     <Text fontSize="md">Location</Text>
                     <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                     <Stack>
                        <SearchLocation
                           value={value}
                           handleChange={handleChange}
                        />
                        {displayedLocation.length > 0 ? (
                           displayedLocation.map((country) => (
                              <Text
                                 as={"a"}
                                 cursor={"pointer"}
                                 _hover={{ bg: "green.200" }}
                                 rounded={"5px"}
                                 p={"8px"}
                                 key={country.id}
                                 onClick={() => handleClick(country.id)}>
                                 {country.country}
                              </Text>
                           ))
                        ) : (
                           <Text>Country not found</Text>
                        )}
                     </Stack>
                  </AccordionPanel>
               </AccordionItem>
               <AccordionItem>
                  <AccordionButton
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                     p={4}>
                     <Text fontSize="md">Category</Text>
                     <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                     <Stack>
                        {category.map((category) => (
                           <Text
                              as={"a"}
                              cursor={"pointer"}
                              _hover={{ bg: "green.200" }}
                              rounded={"5px"}
                              p={"8px"}
                              key={category.id}
                              onClick={() => handleClickCategory(category.id)}>
                              {category.category}
                           </Text>
                        ))}
                     </Stack>
                  </AccordionPanel>
               </AccordionItem>
               <AccordionItem>
                  <AccordionButton
                     display="flex"
                     alignItems="center"
                     justifyContent="space-between"
                     p={4}>
                     <Text fontSize="md">Ticket type</Text>
                     <ChevronDownIcon fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                     <CheckBoxEvent />
                  </AccordionPanel>
               </AccordionItem>
            </Accordion>
         </Container>
      </Flex>
   );
};
