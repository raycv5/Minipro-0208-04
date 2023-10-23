import{ 
  Flex,
  Grid, 
  GridItem,
  Text,
  Box,
  Icon,
  Avatar,
  ListItem,
  OrderedList
} from "@chakra-ui/react";
import NavbarDashboard from "./Navbar-Dash"; 
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PiTicketFill } from "react-icons/pi"
import { MdAttachEmail, MdEventNote } from "react-icons/md"
import { BsFillArrowRightCircleFill, BsGift } from "react-icons/bs";

const UserDashboard = () => {
  const user = useSelector((state) => state.user.value)
  const flexStyle = {
    alignItems: "center",
    gap : "10px",
    cursor: "pointer",
    p: "5px",
    _hover: { bg : "pink.400", color: "white", borderRadius: "5px" }
  }

  return (        
    <>
    <NavbarDashboard/>  
      <Grid templateColumns="20vw 80vw">
      
      <Flex 
      flexDir={"column"} 
      m={"10px 10px"} 
      gap={"30px"}
      fontSize={"20px"}
      >
     
     <Text fontWeight={500} ml={"5px"} mt={"20px"}>DASHBOARD</Text> 
     <Flex {...flexStyle}>
      <Icon as={Avatar} boxSize={"20px"}/>
      <Text>Welcome</Text>
     </Flex>
    
     <Flex {...flexStyle}>
      <Icon as={PiTicketFill} boxSize={"25px"}/>
      <Link to="/referral-content">
        <Text>Referral Code</Text>
      </Link>
     </Flex>

     <Flex {...flexStyle}>
      <Icon as={MdAttachEmail} boxSize={"25px"}/>
      <Link to="/send-code">
        <Text>Invite/Send</Text>
      </Link>
     </Flex> 

     <Flex {...flexStyle}>
      <Icon as={MdEventNote} boxSize={"25px"}/>
      <Link to="/user-event">
      <Text>Your Event</Text>
      </Link>  
     </Flex>
         
    </Flex>
       
        <GridItem 
          h="100vh" 
          bgColor={"gray.50"} 
          p={"10px"}
          >
          <Text 
            textAlign={"center"} 
            mb={"20px"} 
            fontSize={"18px"} 
            fontWeight={500}>
            Hi..! {user.name}, Welcome To Your Dashboard
          </Text>

          <Flex 
            flexDir={"column"} 
            p={"20px"}  
            boxShadow={"1px 1px 8px rgba(128, 128, 128, 0.8)"}
            maxW={"1000px"}
            mx={"auto"}
            borderRadius={"20px"}
            sx={{
              background: "linear-gradient(to bottom right, rgba(128, 128, 128, 0.2), white, white, rgba(128, 128, 128, 0.1),white, white, rgba(128, 128, 128, 0.3))",
            }}
            >
          <Flex alignItems={"center"} gap={"5px"} maxW={"300px"} mx={"auto"}>
            <Icon as={ BsGift } boxSize={"25px"} ml={"20px"}/>
            
            <Box 
              padding={"5px"}
              borderRadius={"5px"}
              bg={"pink.500"}
              color={"white"}
              >{user.referralCode} 
            </Box>
          </Flex>

            <Flex 
              gap={"10px"} 
              flexDir={"Column"} 
              pl={"20px"} 
              fontSize={"18px"}>
         
            <Text mt={"20px"}>Congrats this is your gift of referral code.</Text> 
            <Text>What is referral code?</Text>
            <Text>
              Referral code is a code that you can use to get a discount for the events you want to attend, then
               <Text as={"span"} fontWeight={"700"} color={"red"}> How it work? 
               </Text>
            </Text>

            <OrderedList  mr={"50px"}>
              <ListItem mb={"15px"}>             
               <Text>Your current points now are {user.points} points.</Text>
              </ListItem>
              
              <ListItem mb={"15px"}>
                <Text>Every time you share this code, you will receive an additional 20 points, and your friend will receive 10 points if they use the referral code that have you been sent.</Text>
              </ListItem>
              
              <ListItem>
                <Text mb={"15px"}>For every 100 points you accumulate, you will receive a 5% discount on the event you wish to attend.</Text>
              </ListItem> 
              
              <ListItem>
                <Text mb={"15px"}>The maximum number of points for each event is 1000 points, and the maximum discount you can receive is 50%.</Text>
              </ListItem>
              
              <ListItem>
                <Text>This referral code has one-month time limit from the date of your registration on this website.</Text>
              </ListItem>

              <Text>Sharing is Caring!</Text>
              
              <Link to="/send-code"> 
                <Flex align
                Items={"center"} gap={"10px"}>
                  <Text mt={"15px"} fontWeight={800}>Send Your Code now</Text> 
                  <Icon as={BsFillArrowRightCircleFill} boxSize={"20px"} mt={"19px"}/>
                </Flex>
              </Link>
            </OrderedList>

            </Flex>    
          </Flex>  
        </GridItem>        
   </Grid>  
    </>
  );
}
 
export default UserDashboard
