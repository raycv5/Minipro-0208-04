import{ 
  Grid,
  GridItem,
  Flex,
  Text,
  Icon,
  Avatar
} from "@chakra-ui/react";
import { PiTicketFill } from "react-icons/pi"
import { MdAttachEmail, MdEventNote } from "react-icons/md"
import { Link } from "react-router-dom";
import NavbarDashboard from "./Navbar-Dash";

const flexStyle = {
  alignItems: "center",
  gap : "10px",
  cursor: "pointer",
  p: "5px",
  _hover: { bg : "blue.400", color: "white", borderRadius : "5px" }
}

const UserEvent= () => {
  return ( 
    <> 
      <NavbarDashboard/>
      <Grid templateColumns="20vw 80vw">
        
      {/* <GridItem h="100vh"><Sidebar/></GridItem> */}
      <Flex 
        flexDir={"column"} 
        m={"10px 10px"} 
        gap={"30px"}
        fontSize={"20px"}
        >
      
      <Text fontWeight={500} ml={"5px"} mt={"20px"}>DASHBOARD</Text> 
      <Flex {...flexStyle}>
        <Icon as={Avatar} boxSize={"20px"}/>
        <Link to="/welcome-user">
          <Text>Welcome</Text>
        </Link>    
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
          <Text>Your Event</Text> 
      </Flex>
          
      </Flex>

      {/* // content */}
      <GridItem h="100vh" bgColor={"gray.50"} p={"10px"}>
        <Text textAlign={"center"} mb={"20px"} fontSize={"18px"} fontWeight={500}>
          Your Event Schedule 
        </Text>

        <Flex alignItems={"center"} gap={"25px"}>
          <Text>This is Your event</Text> 
        </Flex>

      </GridItem>        
  </Grid>  
</>
   );
}
 
export default UserEvent;