import {
   Input,
   FormControl,
   FormLabel,
   InputGroup,
   InputLeftElement,
   Box,
   Checkbox,
   ScaleFade,
   Collapse,
   useDisclosure,
   Stack,
} from "@chakra-ui/react";
import { useState } from "react";

export const Form2 = ({ handleChange, values, ErrorMessage }) => {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Stack gap={"20px"}>
         <FormControl id="price">
            <FormLabel
               fontSize={{
                  base: "12px",
                  md: "14px",
                  lg: "16px",
               }}>
               Price
            </FormLabel>
            <InputGroup>
               <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="$"
               />
               <Input
                  isDisabled={isOpen}
                  color={"gray.500"}
                  onChange={handleChange}
                  value={values.price}
                  name="price"
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}
                  type="number"
               />
               <ErrorMessage
                  component="div"
                  name="price"
                  style={{ color: "red" }}
               />
               <Checkbox
                  p={"0 15px"}
                  size={"md"}
                  isChecked={isOpen}
                  colorScheme="teal"
                  onChange={onToggle}>
                  Unpaid?
               </Checkbox>
            </InputGroup>
         </FormControl>
         {/* <Collapse in={!isOpen} animateOpacity>
            <FormControl id="promotion">
               <FormLabel
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}>
                  Promotion
               </FormLabel>
               <InputGroup>
                  <InputLeftElement
                     pointerEvents="none"
                     color="gray.300"
                     fontSize="1.2em"
                     children="$"
                  />
                  <Input
                     color={"gray.500"}
                     onChange={handleChange}
                     value={values.promotion}
                     name="promotion"
                     fontSize={{
                        base: "12px",
                        md: "14px",
                        lg: "16px",
                     }}
                     type="number"
                  />
                  <ErrorMessage
                     component="div"
                     name="promotion"
                     style={{ color: "red" }}
                  />
               </InputGroup>
            </FormControl>
         </Collapse> */}
      </Stack>
   );
};
