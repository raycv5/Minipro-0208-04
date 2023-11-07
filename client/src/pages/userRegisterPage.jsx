
import { 
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Heading,
  Text,
  Box,
  Image,
  useToast
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    img: "https://images.creativemarket.com/0.1.0/ps/38349/910/607/m1/fpnw/wm0/creprew-.jpg?1378899538&s=e5a8d1011d60b8c417328e3f4f7ee908",
    message: '"Planning and visiting an event is simple and easy with evenGilla, with several clicks your favorite event, will be in your pocket".'
    
  },
  {
    id: 2,
    img : "https://c8.alamy.com/comp/2A407G0/big-esports-event-video-games-fan-on-a-tribune-at-tournaments-arena-with-hands-raised-cheering-for-his-favorite-team-2A407G0.jpg",
    message: '"Boost up your spirit and find event that meet your mood will increase your productivity".'
    
  },
  {
    id: 3,
    img: "https://www.marbellaforsale.com/blog/wp-content/uploads/2018/06/budget-vs-prices-deficit.jpg",
    message: '"Plan and buy tickets at a price that suits your budget or collect points for visits to events planned in the future".'
    
  },
  {
    id: 3,
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.yMFDNcbAENIhHOGontYOJQHaFo%26pid%3DApi&f=1&ipt=42f49c1550cf0a09e0f35530be2f739a60c8a9aec4f97fd6cd7b61cde4b5363d&ipo=images",
    message: '"Personilized experience, get custom experience, and exclusive discount price by your code referral then your discount await".'
    
  },
]

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("*Name is required")
    .min(2, "Minimun 2 character"),
  email: Yup.string()
    .required("*Email is required")
    .email("*Invalid email format"),
  country: Yup.string().required("*Country Required"),
  province: Yup.string().required("*Province Required"),
  city: Yup.string().required("*Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])/,
      "Password must start with a capital letter"
    )
    .min(6, "*Password must be in 6 characters at minimum")
    .required("*Password is required"),
});
    
const UserRegister = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()
  const toast = useToast();
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const activeTestimonial = testimonials[activeIndex];
  const CodeGenerator = (length) => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let referralCode = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      referralCode += characters[randomIndex];
    }
    return referralCode;
  }

  const handleSubmit = async(data) => {
    const referralCode = CodeGenerator(8)
    const currentDate = formatDate(new Date())
    const userCode = {
      ...data, 
      referralCode,
      points: 20,
      "date-join" : currentDate,
    }  
    try{
      await axios.post("http://localhost:2000/users", userCode)
      navigate("/")
    } catch(err) {
      console.log(err)
    }
   toast({
    title: "Success",
    description: "Your are Registered..!!",
    status: "success",
    duration:"5000",
    position:"bottom",
    isClosable: true, 
   }) 
  }

  return (
     <Flex>
        <Flex
           flex={1}
           flexDir={"column"}
           bg={"gray.700"}
           minH={"100vh"}
           color={"white"}>
           <Heading
              textColor="green.400"
              textAlign={"center"}
              fontSize={{ base: "xl", md: "3xl" }}
              m={"0px 0 20px 0"}>
              Dofun
           </Heading>

           <Flex justifyContent={"center"}>
              <Box w={"75%"}>
                 <Image src={activeTestimonial.img} />
              </Box>
           </Flex>

           <Text
              fontSize={"18px"}
              fontWeight={400}
              textAlign="center"
              mt={"15px"}
              ml={"30px"}
              mr={"30px"}>
              {activeTestimonial.message}
           </Text>

           <Text mt={"160px"} textAlign={"center"} fontSize={"18px"}>
              We are a trusted website throughout the world
           </Text>

        </Flex>

        <Flex flex={2} justifyContent={"center"}>
           <Formik
              initialValues={{
                 name: "",
                 email: "",
                 country: "",
                 province: "",
                 city: "",
                 password: "",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, action) => {
                 console.log(values);
                 handleSubmit(values);
                 action.resetForm();
              }}>
              {(formitProps) => {
                 //console.log(formitProps)
                 return (
                    <Form>
                       <Flex
                          w={"450px"}
                          flexDir={"column"}
                          my={"2vh"}
                          mx={"auto"}
                          gap={"10px"}
                          p={"30px"}
                          borderRadius={"15px"}>
                          <Heading>
                             <Text textAlign={"center"}>Sign Up</Text>
                          </Heading>

                          <FormControl>
                             <FormLabel>Name*</FormLabel>
                             <Input
                                as={Field}
                                type="text"
                                name="name"
                                bg={"white"}
                                borderColor={"gray.300"}
                             />
                             <ErrorMessage
                                component="div"
                                name="name"
                                style={{ color: "red" }}
                             />
                          </FormControl>

                          <FormControl>
                             <FormLabel>Email*</FormLabel>
                             <Input
                                as={Field}
                                type="text"
                                name="email"
                                bg={"white"}
                                borderColor={"gray.300"}
                             />
                             <ErrorMessage
                                component="div"
                                name="email"
                                style={{ color: "red" }}
                             />
                          </FormControl>

                          <FormControl>
                             <FormLabel>Country*</FormLabel>
                             <Input
                                as={Field}
                                type="text"
                                name="country"
                                bg={"white"}
                                borderColor={"gray.300"}
                             />
                             <ErrorMessage
                                component="div"
                                name="country"
                                style={{ color: "red" }}
                             />
                          </FormControl>

                          <FormControl>
                             <FormLabel>Province*</FormLabel>
                             <Input
                                as={Field}
                                type="text"
                                name="province"
                                bg={"white"}
                                borderColor={"gray.300"}
                             />
                             <ErrorMessage
                                component="div"
                                name="province"
                                style={{ color: "red" }}
                             />
                          </FormControl>

                          <FormControl>
                             <FormLabel>City*</FormLabel>
                             <Input
                                as={Field}
                                type="text"
                                name="city"
                                bg={"white"}
                                borderColor={"gray.300"}
                             />
                             <ErrorMessage
                                component="div"
                                name="city"
                                style={{ color: "red" }}
                             />
                          </FormControl>

                          <FormControl>
                             <FormLabel> Create Password*</FormLabel>
                             <Input
                                as={Field}
                                type="password"
                                name="password"
                                bg={"white"}
                                mb={"10px"}
                                borderColor={"gray.300"}
                             />
                             <ErrorMessage
                                component="div"
                                name="password"
                                style={{ color: "red" }}
                             />
                          </FormControl>

                          <Button
                             type="submit"
                             color={"white"}
                             bg={"gray.700"}
                             w={"40%"}
                             _hover={{ bg: "teal.600" }}
                             ml={"120px"}>
                             SUBMIT
                          </Button>

                          <Flex gap={"5px"} justifyContent={"center"}>
                             <Text>Already have acccount?</Text>
                             <Link to="#">
                                <Text color={"blue.400"}>login</Text>
                             </Link>
                          </Flex>
                       </Flex>
                    </Form>
                 );
              }}
           </Formik>
        </Flex>
     </Flex>
  );
}
 
export default UserRegister;
