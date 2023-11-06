import {
   InputGroup,
   Input,
   InputLeftElement,
   Text,
   Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

export const SearchLocation = ({ value, handleChange }) => {
   return (
      <Box>
         <InputGroup>
            <InputLeftElement pointerEvents="none">
               <LiaSearchSolid />
            </InputLeftElement>
            <Input
               type="text"
               placeholder="Search location"
               value={value}
               onChange={handleChange}
            />
         </InputGroup>
      </Box>
   );
};
