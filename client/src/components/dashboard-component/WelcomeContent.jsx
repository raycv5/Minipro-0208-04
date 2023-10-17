import{ 
  Flex,
  Grid, 
  GridItem,
  Text,
  Box 
} from "@chakra-ui/react";
import NavbarDashboard from "./Navbar-Dash"; 
import Sidebar from "./SideBar";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const user = useSelector((state) => state.user.value)

  return (        
    <>
    <NavbarDashboard/>  
      <Grid templateColumns="20vw 80vw">
      
        <GridItem h="100vh"><Sidebar/></GridItem>
        <GridItem h="100vh" bgColor={"gray.50"} p={"10px"}>
          <Text textAlign={"center"} mb={"20px"} fontSize={"18px"} fontWeight={500}>
            Hi..! {user.name}, Welcome To Your Dashboard
          </Text>

          <Flex alignItems={"center"} gap={"25px"}>
          <Box 
            display={"inline"} 
            padding={"5px"}
            borderRadius={"5px"}
            bg={"gray.600"}
            color={"white"}
            >{user.referralCode} </Box>
            <Text>Congrats this is your first referral code.</Text> 
            </Flex>

        </GridItem>        
   </Grid>  
    </>
  );
}
 
export default UserDashboard
