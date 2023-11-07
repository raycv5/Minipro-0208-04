import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
   Box,
   FormControl,
   FormLabel,
   Input,
   Stack,
   Button,
   Heading,
   InputRightElement,
   InputGroup,
   Grid,
   HStack,
   useToast,
   Select,
   Text,
   VStack,
   Link,
   StackDivider,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const registSchema = Yup.object().shape({
   first_name: Yup.string().required("This field is required"),
   last_name: Yup.string().required("This field is required"),
   email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
   password: Yup.string()
      .min(3, "password must be at least 3 characters")
      .required("Password is required"),
});

export const OrganizerRegister = () => {
   const toast = useToast();
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const cities = useSelector((state) => state.cities.value);
   const country = useSelector((state) => state.country.value);
   const { CountryId } = country;
   const { CityId } = cities;

   const handleSubmit = async (data) => {
      try {
         const response = await axios.post(
            "http://localhost:2000/organizers",
            data
         );
         toast({
            title: "Registerd",
            description: "Your are regist..!!",
            status: "success",
            duration: 5000,
            position: "top-left",
            isClosable: true,
         });
         navigate("/joinwithus");
      } catch (err) {
         console.log(err);
         toast({
            title: "Error",
            description: `${err.response.data.message}`,
            status: "error",
            duration: 3000,
            position: "top-left",
            isClosable: true,
         });
      }
   };

   return (
      <Box>
         <Formik
            initialValues={{
               first_name: "",
               last_name: "",
               email: "",
               password: "",
               CityId: CityId,
               CountryId: CountryId,
            }}
            validationSchema={registSchema}
            onSubmit={(values, action) => {
               handleSubmit(values);
               action.resetForm();
            }}>
            {(props) => {
               const { handleChange, values, isSubmitting } = props;
               {
                  console.log(values);
               }
               return (
                  <HStack
                     minH={"100vh"}
                     align={"center"}
                     justify={"center"}
                     bg={"white"}>
                     <VStack
                        spacing={4}
                        mx={"auto"}
                        maxW={"md"}
                        py={8}
                        px={6}
                        divider={<StackDivider borderColor={"gray.300"} />}>
                        <Stack align={"center"}>
                           <Heading
                              fontSize={{
                                 base: "16px",
                                 md: "18px",
                                 lg: "20px",
                              }}
                              color={"black"}>
                              Sign in to your account
                           </Heading>
                        </Stack>
                        <Form>
                           <Box w={{ base: "300px", md: "500px" }}>
                              <Grid gap={2} templateColumns={"repeat(1,1fr)"}>
                                 <FormControl id="first_name">
                                    <FormLabel
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}>
                                       First Name
                                    </FormLabel>
                                    <Input
                                       isRequired
                                       autoComplete="none"
                                       bg={"white"}
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}
                                       as={Field}
                                       type="text"
                                       name="first_name"
                                       placeholder="input your first name.."
                                    />
                                    <ErrorMessage
                                       component="div"
                                       name="firs_name"
                                       style={{ color: "red" }}
                                    />
                                 </FormControl>
                                 <FormControl id="last_name">
                                    <FormLabel
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}>
                                       Last Name{" "}
                                    </FormLabel>
                                    <Input
                                       isRequired
                                       bg={"white"}
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}
                                       as={Field}
                                       type="text"
                                       name="last_name"
                                       placeholder="input your Last Name.."
                                    />
                                    <ErrorMessage
                                       component="div"
                                       name="last_name"
                                       style={{ color: "red" }}
                                    />
                                 </FormControl>
                                 <FormControl id="email">
                                    <FormLabel
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}>
                                       Email address
                                    </FormLabel>
                                    <Input
                                       isRequired
                                       autoComplete="off"
                                       bg={"white"}
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}
                                       as={Field}
                                       type="text"
                                       name="email"
                                       placeholder="input email.."
                                    />
                                    <ErrorMessage
                                       component="div"
                                       name="email"
                                       style={{ color: "red" }}
                                    />
                                 </FormControl>
                                 <FormControl id="password">
                                    <FormLabel
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}>
                                       Password
                                    </FormLabel>
                                    <InputGroup>
                                       <Input
                                          isRequired
                                          autoComplete="off"
                                          bg={"white"}
                                          fontSize={{
                                             base: "12px",
                                             md: "14px",
                                             lg: "16px",
                                          }}
                                          as={Field}
                                          type={
                                             showPassword ? "text" : "password"
                                          }
                                          name="password"
                                          placeholder="input password.."
                                       />
                                       <ErrorMessage
                                          component="div"
                                          name="password"
                                          style={{ color: "red" }}
                                       />
                                       <InputRightElement h={"full"}>
                                          <Button
                                             variant={"ghost"}
                                             onClick={() =>
                                                setShowPassword(
                                                   (showPassword) =>
                                                      !showPassword
                                                )
                                             }>
                                             {showPassword ? (
                                                <ViewIcon />
                                             ) : (
                                                <ViewOffIcon />
                                             )}
                                          </Button>
                                       </InputRightElement>
                                    </InputGroup>
                                 </FormControl>
                                 <FormControl id="country">
                                    <FormLabel
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}>
                                       Country{" "}
                                    </FormLabel>
                                    <Select
                                       isRequired
                                       onChange={handleChange}
                                       value={values.CountryId}
                                       bg={"white"}
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}
                                       name="CountryId"
                                       placeholder="input your country..">
                                       {country.map((country) => (
                                          <option
                                             key={country.id}
                                             value={country.id}>
                                             {country.country}
                                          </option>
                                       ))}
                                    </Select>
                                    <ErrorMessage
                                       component="div"
                                       name="country"
                                       style={{ color: "red" }}
                                    />
                                 </FormControl>
                                 <FormControl id="city">
                                    <FormLabel
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}>
                                       City{" "}
                                    </FormLabel>
                                    <Select
                                       isRequired
                                       onChange={handleChange}
                                       value={values.CityId}
                                       bg={"white"}
                                       fontSize={{
                                          base: "12px",
                                          md: "14px",
                                          lg: "16px",
                                       }}
                                       name="CityId"
                                       placeholder="input your city..">
                                       {cities.map((cities) => (
                                          <option
                                             key={cities.id}
                                             value={cities.id}>
                                             {cities.city}
                                          </option>
                                       ))}
                                    </Select>
                                    <ErrorMessage
                                       component="div"
                                       name="city"
                                       style={{ color: "red" }}
                                    />
                                 </FormControl>
                              </Grid>
                              <HStack
                                 justifyContent={"center"}
                                 alignItems={"center"}>
                                 <Button
                                    m={{ base: "15px auto", md: "18px auto" }}
                                    w={"full"}
                                    type={isSubmitting ? "button" : "submit"}
                                    bg={"green.400"}
                                    color={"white"}
                                    _hover={{
                                       bg: "green.300",
                                    }}
                                    isLoading={isSubmitting}>
                                    {isSubmitting ? "Loading..." : "Register"}
                                 </Button>
                              </HStack>
                              <Text>
                                 Already account?{" "}
                                 <Link
                                    href="/joinwithus"
                                    isExternal
                                    color={"blue.300"}>
                                    Login
                                 </Link>{" "}
                              </Text>
                           </Box>
                        </Form>
                     </VStack>
                  </HStack>
               );
            }}
         </Formik>
      </Box>
   );
};
