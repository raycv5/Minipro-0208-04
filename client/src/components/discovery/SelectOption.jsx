import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

export const FilterOption = ({ eventsValue, handleEvents }) => {
   console.log(eventsValue);
   return (
      <Box>
         <InputGroup>
            <InputLeftElement pointerEvents="none">
               <LiaSearchSolid />
            </InputLeftElement>
            <Input
               type="text"
               placeholder="Search event"
               w={"500px"}
               value={eventsValue}
               onChange={handleEvents}
            />
         </InputGroup>
      </Box>
   );
};
