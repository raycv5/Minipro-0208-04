import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  InputRightElement,
  InputGroup,
  Grid,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";

const registSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "password must be at least 3 characters")
    .required("Password is required"),
  country: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Invalid country name")
    .required("Please enter a valid country"),
  province: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Invalid province name")
    .required("Please enter a valid country"),
  city: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Invalid city name")
    .required("Please enter a city country"),
});

export const OrganizerRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:2000/events", data);
    } catch (err) {
      console.log(err);
    }
    alert("Success!");
    window.location.reload();
  };

  return (
    <Box>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          country: "",
          province: "",
          city: "",
        }}
        validationSchema={registSchema}
        onSubmit={(values, action) => {
          handleSubmit(values);
          action.resetForm();
        }}
      >
        {(props) => {
          return (
            <Flex
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg={"white"}
            >
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                </Stack>
                <Form>
                  <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
                    <Grid templateColumns="repeat(2, 1fr)" gap={"25px"}>
                      <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input
                          as={Field}
                          type="text"
                          name="name"
                          placeholder="input name.."
                        />
                        <ErrorMessage
                          component="div"
                          name="name"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input
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
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            as={Field}
                            type={showPassword ? "text" : "password"}
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
                                setShowPassword((showPassword) => !showPassword)
                              }
                            >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="country">
                        <FormLabel>Input your country </FormLabel>
                        <Input
                          as={Field}
                          type="text"
                          name="country"
                          placeholder="input your country.."
                        />
                        <ErrorMessage
                          component="div"
                          name="country"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                      <FormControl id="province">
                        <FormLabel>Input your province </FormLabel>
                        <Input
                          as={Field}
                          type="text"
                          name="province"
                          placeholder="input your province.."
                        />
                        <ErrorMessage
                          component="div"
                          name="province"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                      <FormControl id="city">
                        <FormLabel>Input your city </FormLabel>
                        <Input
                          as={Field}
                          type="text"
                          name="city"
                          placeholder="input your city.."
                        />
                        <ErrorMessage
                          component="div"
                          name="city"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                    </Grid>
                    <Stack spacing={10}>
                      <Stack
                        direction={{
                          base: "column", 
                          sm: "row",
                        }}
                        align={"start"}
                        justify={"space-between"}
                      ></Stack>

                      <Button
                        type="submit"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                      >
                        Register
                      </Button>
                    </Stack>
                  </Box>
                </Form>
              </Stack>
            </Flex>
          );
        }}
      </Formik>
    </Box>
  );
};
