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
  useToast
} from "@chakra-ui/react";
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email : Yup.string()
    .email("Invalid Email address format") 
    .required("*Email is required"), 
  password : Yup.string()
    .matches(
      /^(?=.*[A-Z])/,
      "*Your password or email is not match...!"
    )
    .min(5, 'Password must be in 5 characters at minimum') 
    .required("*Password is required")
})

const UserLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  
  const handleSubmit = async (data) => {
    try {
      const response = await axios.get(`http://localhost:2000/users?email=${data.email}&password=${data.password}`);
      console.log('Response from JSON server:', response.data);
      
      if (response.data[0]?.id) {
        // dispatch(setData(response.data[0]));
        localStorage.setItem("id", response.data[0]?.id);
        toast({
          title: "success",
          description: "Your are Login..!!",
          status: "success",
          duration:"5000",
          position:"bottom",
          isClosable: true, 
         })
        navigate("/userDashboard");
        window.location.reload()
      } else {
        alert("Account not found")
      }
    
    }catch (err) {console.log(err)}
  }

  return (  
    <>
      <Button 
      onClick= {onOpen} 
      fontSize={"sm"} 
      fontWeight={200}
      bg={"transparent"}
      _hover={{ textDecoration: "underline" }}
      >Sign In</Button>
      
      <Modal isOpen= {isOpen} onClose= {onClose} isCentered size={"sm"}>
      <ModalOverlay/> 

      <Formik
        initialValues={{email : '', password: ''}}
        validationSchema= {LoginSchema}
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
                    <VStack spacing={4} align={'flex-start'}>
                     
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input as={Field} type='text' name='email' bg={'gray.100'}/>
                        <ErrorMessage
                        component= 'div'
                        name = 'email'
                        style = {{ color : 'red' }} 
                        />    
                      </FormControl>

                      <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input as={Field} type='password' name='password' bg={'gray.100'}/>
                        <ErrorMessage
                        component= 'div'
                        name = 'password'
                        style = {{ color : 'red' }}  
                        />     
                      </FormControl>  
                    </VStack>
                  </ModalBody> 
                    <ModalFooter>
                      <Flex justifyContent={'center'} w={'100%'} gap={'60px'}>
                       
                      <Button 
                        bg={"gray.700"}
                        color={"whiteAlpha.800"}
                        onClick={() => {
                          if (window.confirm("Are you sure want to cancel?"))
                          navigate("/")
                          onClose();
                        }}
                      >Cancel</Button>
                       
                      <Button 
                        bg={"gray.700"}
                        color={"whiteAlpha.800"} 
                        type='submit'
                        >Login</Button>
                      </Flex>
                    </ModalFooter>
                </ModalContent>

              </Form> 
          )
        }}

      </Formik>
     </Modal> 
    </> 
  );
}
 
export default UserLogin;