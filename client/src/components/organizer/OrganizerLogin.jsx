import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  VStack,
  Flex,
  FormLabel,
  Text,
  InputRightElement,
  useToast,
  InputGroup,
} from "@chakra-ui/react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email address format")
    .required("*Email is required"),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])/, "*Your password or email is not match...!")
    .min(3, "Password must be in 5 characters at minimum")
    .required("*Password is required"),
});

export const EventLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:2000/organizers/login?email=${data.email}&password=${data.password}`
      );
      if (response.data.organizerToken) {
        localStorage.setItem("organizerToken", response.data.organizerToken);
        toast({
          title: "success",
          description: "Your are Login..!!",
          status: "success",
          duration: 5000,
          position: "top-left",
          isClosable: true,
        });
        navigate("/buildyourpage");
        window.location.reload();
      }
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
    <>
      <Button
        variant={"link"}
        onClick={onOpen}
        fontSize={"sm"}
        fontWeight={200}
        bg={"transparent"}
        _hover={{ textDecoration: "underline" }}
      >
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"sm"}>
        <ModalOverlay />

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => {
            console.log(values);
            handleSubmit(values);
            action.resetForm();
            onClose();
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <ModalContent boxShadow={"2px 2px 20px rgba(0, 0, 0, 0.9)"}>
                  <ModalHeader>Organizer Login</ModalHeader>
                  <ModalCloseButton />

                  <ModalBody>
                    <VStack spacing={4} align={"flex-start"}>
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                          as={Field}
                          type="text"
                          name="email"
                          bg={"gray.100"}
                        />
                        <ErrorMessage
                          component="div"
                          name="email"
                          style={{ color: "red" }}
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            as={Field}
                            type={showPassword ? "text" : "password"}
                            name="password"
                            bg={"gray.100"}
                            autoComplete="off"
                          />
                          <InputRightElement>
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
                        <ErrorMessage
                          component="div"
                          name="password"
                          style={{ color: "red" }}
                        />
                      </FormControl>
                    </VStack>
                  </ModalBody>
                  <ModalFooter>
                    <Flex justifyContent={"center"} w={"100%"} gap={"60px"}>
                      <Button
                        _hover={{
                          bg: "green.300",
                        }}
                        bg={"green.400"}
                        color={"whiteAlpha.800"}
                        onClick={() => {
                          navigate("/");
                          onClose();
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        _hover={{
                          bg: "green.300",
                        }}
                        bg={"green.400"}
                        color={"whiteAlpha.800"}
                        type={isSubmitting ? "button" : "submit"}
                        isLoading={isSubmitting}
                      >
                        {isSubmitting ? "Loading.." : "Login"}
                      </Button>
                    </Flex>
                  </ModalFooter>
                  <Flex
                    gap={"10px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text>Login for user?</Text>
                    <Text as={"a"} href="/" textDecoration={"underline"}>
                      Login
                    </Text>
                  </Flex>
                </ModalContent>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
