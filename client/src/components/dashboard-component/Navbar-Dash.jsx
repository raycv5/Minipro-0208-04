import {
  Text,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Icon,
  Badge,
  HStack,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiBell, FiShoppingCart } from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi";
import { PiTicketFill } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { LiaHomeSolid, LiaWalletSolid } from "react-icons/lia";
import { FaCoins, FaWallet } from "react-icons/fa";

function NavbarDashboard() {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const discount = Math.floor(user.points / 100) * 5;

  const handleLogout = () => {
    localStorage.removeItem("id");
    navigate("/");
    window.location.reload();
  };

  const handleHome = () => {
    navigate("/");
  };

  console.log(user);

  return (
    <Flex
      p={"10px 10px"}
      justifyContent={"space-between"}
      boxShadow={".5px .5px 5px rgba(128, 128, 128, 0.2)"}
    >
      <Flex alignItems={"center"}>
        <Link
          fontSize="3xl"
          fontWeight="bold"
          color="green.400"
          href="/discovery"
        >
          dofun
        </Link>
      </Flex>

      <Flex alignItems={"center"} justifyContent={"Center"} gap="24px">
        <HStack>
          <Flex gap={"5px"} alignItems={"center"}>
            <FaCoins />
            <Text fontSize={"20px"} fontWeight={"500"}>
              {user.points} Points
            </Text>
          </Flex>
        </HStack>

        <HStack>
          <Flex gap={"5px"} alignItems={"center"}>
            <FaWallet />
            <Text fontSize={"20px"} fontWeight={"500"}>
              {user.Wallet?.balance?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </Text>
          </Flex>
        </HStack>

        {/* <HStack position={"relative"} gap={"35px"}>
          <Icon as={HiOutlineTicket} boxSize={"25px"} cursor={"pointer"} />

          <Tooltip
            hasArrow
            label="You Got Discount..!!"
            aria-label="Discount tooltip"
          >
            <Badge
              p={"2px"}
              position={"absolute"}
              left={"10px"}
              bg="pink.600"
              top={"-8px"}
              rounded={"60%"}
              color={"white"}
              cursor={"pointer"}
              fontSize={"10px"}
            >
              {discount}%
            </Badge>
          </Tooltip>

          <HStack position={"relative"}>
            <Icon as={FiBell} boxSize={"20px"} cursor={"pointer"} />
            <Badge
              p={"2px 6px"}
              position={"absolute"}
              left={"7px"}
              bg="pink.600"
              top={"-10px"}
              rounded={"50%"}
              color={"white"}
              cursor={"pointer"}
              fontSize={"10px"}
            >
              1
            </Badge>
          </HStack>

          <Icon
            as={FiShoppingCart}
            boxSize={"20px"}
            mr={"60px"}
            cursor={"Pointer"}
            position={"relative"}
          />
        </HStack> */}

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
                <Text mr={"80px"} onClick={handleHome}>
                  Back to Home
                </Text>
                <Icon as={LiaHomeSolid} boxSize={"20px"} />
              </Flex>
            </MenuItem>

            <MenuItem>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text onClick={handleLogout} mr={"130px"}>
                  Logout
                </Text>
                <Icon as={RiLogoutCircleRLine} boxSize={"18px"} />
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
export default NavbarDashboard;
