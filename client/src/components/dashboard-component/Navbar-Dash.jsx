import {  
  Text,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Icon
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiBell, FiShoppingCart } from "react-icons/fi"
import { HiOutlineTicket } from "react-icons/hi"
import { PiTicketFill } from "react-icons/pi"
import { RiLogoutCircleRLine } from "react-icons/ri"
import { LiaHomeSolid } from "react-icons/lia"

function NavbarDashboard() {
  const user = useSelector((state)=> state.user.value);
  const navigate = useNavigate()
  
  const handleLogout = () =>{
    localStorage.removeItem("id");
    navigate("/");
    window.location.reload();
  }

  const handleHome= () => {
    navigate("/")
  }

  return (
    <Flex 
      p={"10px 10px"} 
      justifyContent={"space-between"} 
      boxShadow={".5px .5px 5px rgba(128, 128, 128, 0.2)"}
      >

      <Flex alignItems={"center"}>
      <Icon as={PiTicketFill} boxSize={"40px"}/>
      <Heading >EventGILLA</Heading>
      </Flex>

      <Flex alignItems={"center"} justifyContent={"Center"} gap={"20px"}>
        <Icon as={HiOutlineTicket} boxSize={"20px"} cursor={"pointer"}/>
        <Icon as={FiBell} boxSize={"20px"} cursor={"pointer"}/>
        <Icon as={FiShoppingCart} boxSize={"20px"} mr={"30px"} cursor={"Pointer"}/>
       
        <Menu width="90px">
          <Avatar 
            as={MenuButton} 
            name={user.name} 
            cursor={"pointer"} 
            bg={"blue.500"}
            boxShadow={"1px 1px 12px gray"}
            /> 

            <MenuList borderRadius={"5px"} boxShadow={"1px 1px 15px gray"}>
              <MenuItem>   
                <Text>{user.name}</Text> 
              </MenuItem>
              
              <MenuItem>  
                <Text>{user.email}</Text>   
              </MenuItem>  

              <MenuItem>
               <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text mr={"80px"} onClick={handleHome}>Back to Home</Text>
                <Icon as={LiaHomeSolid} boxSize={"20px"}/>
               </Flex> 
              </MenuItem>
                
              <MenuItem>  
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Text onClick={handleLogout} mr={"130px"}>Logout</Text>
                  <Icon as={RiLogoutCircleRLine} boxSize={"18px"}/>
                </Flex>
              </MenuItem>   
            </MenuList>
            </Menu>
        </Flex>
    </Flex>
      
  );
}
export default NavbarDashboard;
