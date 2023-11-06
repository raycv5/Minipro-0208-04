import { Form } from "formik";
import {
   Input,
   FormControl,
   FormLabel,
   Select,
   FormHelperText,
   Grid,
   NumberInput,
   NumberInputField,
   InputGroup,
   Textarea,
} from "@chakra-ui/react";

export const Form1 = ({
   handleChange,
   values,
   ErrorMessage,
   cities,
   country,
   category,
   handleImage,
}) => {
   return (
      <Form>
         <Grid
            fontFamily={"Poppins, sans-serif"}
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(2, 1fr)" }}
            gap={{ base: "2px", md: "10px" }}
            fontSize={{ base: "12px" }}>
            {/* Form event name */}
            <FormControl id="name" isRequired>
               <FormLabel
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}>
                  Your event name
               </FormLabel>
               <Input
                  color={"gray.500"}
                  type="text"
                  name="name"
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}
                  onChange={handleChange}
                  value={values.name}
               />
               <FormHelperText color={"gray.400"}>
                  Ex: Tour Bali island
               </FormHelperText>
               <ErrorMessage
                  component="div"
                  name="name"
                  style={{ color: "red" }}
               />
            </FormControl>
            {/* End Form event name */}

            {/* Form Category */}
            <FormControl id="CategoryId" isRequired>
               <FormLabel
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}>
                  Category
               </FormLabel>
               <Select
                  placeholder="select category"
                  color={"gray.500"}
                  onChange={handleChange}
                  value={values.CategoryId}>
                  {category.map((category) => (
                     <option key={category.id} value={category.id}>
                        {category.category}
                     </option>
                  ))}
               </Select>
               <FormHelperText color={"gray.400"}>
                  Choose category
               </FormHelperText>
               {/* <ErrorMessage
                  component="div"
                  name="category"
                  style={{ color: "red" }}
               /> */}
            </FormControl>
            {/* End Form Category */}
            {/*  Form Category Date*/}
            <FormControl id="date" isRequired>
               <FormLabel
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}>
                  Date
               </FormLabel>
               <Input
                  onChange={handleChange}
                  value={values.date}
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  color={"gray.500"}
               />
               <FormHelperText color={"gray.400"}>
                  Choose your event date
               </FormHelperText>
               <ErrorMessage
                  component="div"
                  name="date"
                  style={{ color: "red" }}
               />
            </FormControl>
            {/* End Form Category Date*/}
            {/* Form event Country */}
            <FormControl id="CountryId" isRequired>
               <FormLabel
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}>
                  Your Country
               </FormLabel>
               <Select
                  placeholder="select country"
                  color={"gray.500"}
                  onChange={handleChange}
                  value={values.CountryId}>
                  {country.map((country) => (
                     <option key={country.id} value={country.id}>
                        {country.country}
                     </option>
                  ))}
               </Select>
               <FormHelperText color={"gray.400"}>Ex: Indonesia</FormHelperText>
               <ErrorMessage
                  component="div"
                  name="country"
                  style={{ color: "red" }}
               />
            </FormControl>
            {/* End Form country*/}
            {/* Form event city */}
            <FormControl id="CityId" isRequired>
               <FormLabel
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}>
                  Your city
               </FormLabel>
               <Select
                  placeholder="select city"
                  color={"gray.500"}
                  onChange={handleChange}
                  value={values.CityId}>
                  {cities.map((cities) => (
                     <option key={cities.id} value={cities.id}>
                        {cities.city}
                     </option>
                  ))}
               </Select>
               <FormHelperText color={"gray.400"}>Ex: Bandung</FormHelperText>
            </FormControl>
            {/* End Form city*/}
            {/* Form amout */}
            <FormControl isRequired>
               <FormLabel>Ticket Amount</FormLabel>
               <NumberInput max={10} min={1}>
                  <NumberInputField
                     placeholder="Min: 1"
                     color={"gray.500"}
                     onChange={handleChange}
                     value={values.amount}
                     name="amount"
                     fontSize={{
                        base: "12px",
                        md: "14px",
                        lg: "16px",
                     }}
                  />
                  {/* <NumberInputStepper>
                     <NumberIncrementStepper />
                     <NumberDecrementStepper />
                  </NumberInputStepper> */}
               </NumberInput>
               <ErrorMessage
                  component="div"
                  name="amount"
                  style={{ color: "red" }}
               />
            </FormControl>
            {/* End Form amout */}
            {/* Form image */}
            <FormControl isRequired>
               <FormLabel
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}>
                  Image
               </FormLabel>
               <InputGroup>
                  <Input
                     type="file"
                     color={"gray.500"}
                     onChange={(e) => handleImage(e)}
                     value={values.image}
                     name="image"
                     fontSize={{
                        base: "12px",
                        md: "14px",
                        lg: "16px",
                     }}
                  />
               </InputGroup>
            </FormControl>
            {/* End Form image */}
            {/* Form event description */}
            <FormControl id="descriptions" isRequired>
               <FormLabel
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}>
                  Descriptions
               </FormLabel>
               <Textarea
                  color={"gray.500"}
                  onChange={handleChange}
                  value={values.descriptions}
                  type="text"
                  name="descriptions"
                  fontSize={{
                     base: "12px",
                     md: "14px",
                     lg: "16px",
                  }}
               />
               <FormHelperText color={"gray.400"}></FormHelperText>
               <ErrorMessage
                  component="div"
                  name="descriptions"
                  style={{ color: "red" }}
               />
            </FormControl>
            {/* End Form description*/}
         </Grid>
      </Form>
   );
};
