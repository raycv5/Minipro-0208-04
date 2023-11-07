import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { OrganizerDetail } from "./Detail";
import { useState } from "react";
import { RegisterEvent } from "./RegisterEvent";
import { Sidebar } from "./Sidebar";
import { HomeDasboard } from "./Home";
import { SalesReports } from "./SalesReport";
import { FiHome, FiTrendingUp, FiPlus } from "react-icons/fi";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Sales report", icon: FiTrendingUp },
  { name: "Add event", icon: FiPlus },
];
const contentItems = {
  Home: <HomeDasboard />,
  "Sales report": <SalesReports />,
  "Add event": <RegisterEvent />,
};

export const DashboardOrganizer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedContent, setSelectedContent] = useState();
  const changeContent = (content) => {
    setSelectedContent(content);
  };
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <Sidebar
        isOpen={isOpen}
        onOpen={onOpen}
        LinkItems={LinkItems}
        onClose={onClose}
        display={{ base: "none", md: "block" }}
        selectContent={setSelectedContent}
        changeContent={changeContent}
      />
      {console.log(LinkItems)}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar
            isOpen={isOpen}
            onOpen={onOpen}
            LinkItems={LinkItems}
            onClose={onClose}
            display={{ base: "block", md: "none" }}
            selectContent={setSelectedContent}
            changeContent={changeContent}
          />
        </DrawerContent>
      </Drawer>
      <OrganizerDetail onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="2% 5%" bg={"white"} h={"100vh"}>
        {contentItems[selectedContent]}
      </Box>
    </Box>
  );
};
