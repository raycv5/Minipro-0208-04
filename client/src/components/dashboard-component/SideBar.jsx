import { Avatar, Flex, Icon, Text } from "@chakra-ui/react";
import { PiTicketFill } from "react-icons/pi";
import { MdAttachEmail, MdEventNote } from "react-icons/md";

const Sidebar = () => {
  const flexStyle = {
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    p: "5px",
    _hover: { bg: "green.400", color: "white", borderRadius: "5px" },
  };

  return (
    <>
      <Flex flexDir={"column"} m={"10px 10px"} gap={"30px"} fontSize={"20px"}>
        <Text fontWeight={500} ml={"5px"} mt={"20px"}>
          DASHBOARD
        </Text>
        <Flex {...flexStyle}>
          <Icon as={Avatar} boxSize={"20px"} />
          <Text>Welcome</Text>
        </Flex>

        <Flex {...flexStyle}>
          <Icon as={PiTicketFill} boxSize={"25px"} />
          <Text>Refferal Code</Text>
        </Flex>

        <Flex {...flexStyle}>
          <Icon as={MdAttachEmail} boxSize={"25px"} />
          <Text>Invite/Send</Text>
        </Flex>

        <Flex {...flexStyle}>
          <Icon as={MdEventNote} boxSize={"25px"} />
          <Text>Your Event</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
