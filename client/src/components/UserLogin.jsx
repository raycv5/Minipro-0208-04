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
  useToast,
} from "@chakra-ui/react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../redux/userSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email address format")
    .required("*Email is required"),
  password: Yup.string()
    //  .matches(/^(?=.*[A-Z])/, "*Your password or email is not match...!")
    .min(5, "Password must be in 5 characters at minimum")
    .required("*Password is required"),
});

const UserLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:2000/users/login`,
        data
      );
      dispatch(login(response.data));
      localStorage.setItem("token", response.data.token);
      navigate("/discovery");
      window.location.reload();
    } catch (err) {
      console.log(err);
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
          {(formitprops) => {
            // console.log(props)
            return (
              <Form>
                <ModalContent boxShadow={"2px 2px 20px rgba(0, 0, 0, 0.9)"}>
                  <ModalHeader>User Login</ModalHeader>
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
                        <Input
                          as={Field}
                          type="password"
                          name="password"
                          bg={"gray.100"}
                        />
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
                        bg={"gray.700"}
                        color={"whiteAlpha.800"}
                        onClick={() => {
                          if (window.confirm("Are you sure want to cancel?"))
                            navigate("/");
                          onClose();
                        }}
                      >
                        Cancel
                      </Button>

                      <Button
                        bg={"gray.700"}
                        color={"whiteAlpha.800"}
                        type="submit"
                      >
                        Login
                      </Button>
                    </Flex>
                  </ModalFooter>
                  <Flex
                    gap={"10px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Text>Login for organizer?</Text>
                    <Text
                      as={"a"}
                      href="/joinwithus"
                      textDecoration={"underline"}
                    >
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

export default UserLogin;
