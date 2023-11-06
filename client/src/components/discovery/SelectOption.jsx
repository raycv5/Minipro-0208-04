import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { LiaSearchSolid } from "react-icons/lia";

export const FilterOption = () => {
   return (
      <Box>
         <InputGroup>
            <InputLeftElement pointerEvents="none">
               <LiaSearchSolid />
            </InputLeftElement>
            <Input type="text" placeholder="Search event" w={"500px"}/>
         </InputGroup>
      </Box>
   );
};
