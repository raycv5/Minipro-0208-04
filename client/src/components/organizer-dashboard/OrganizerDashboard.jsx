import {
   Box,
   useColorModeValue,
   Drawer,
   DrawerContent,
   useDisclosure,
} from "@chakra-ui/react";

import { OrganizerDetail } from "./Detail";
import { useState } from "react";
import { RegisterEvent } from "./RegisterEvent";
import { Sidebar } from "./Sidebar";
import { HomeDasboard } from "./Home";
import { FiHome, FiTrendingUp, FiPlus } from "react-icons/fi";
import { OrganizerReport } from "./OrganizerReport";
import axios from "axios";
import { useSelector } from "react-redux";

const LinkItems = [
   { name: "Home", icon: FiHome },
   { name: "Reports", icon: FiTrendingUp },
   { name: "Add event", icon: FiPlus },
];

export const DashboardOrganizer = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [selectedContent, setSelectedContent] = useState();
   const organizer = useSelector((state) => state.organizer.value);
   const [countEventOrganizer, setCountEventOrganizer] = useState();

   const handleCountEventOrganizer = async () => {
      try {
         const result = await axios.get(
            `http://localhost:2000/events/count-event/${organizer.id}`
         );
         setCountEventOrganizer(result.data);
      } catch (error) {
         console.log(error);
      }
   };
   const changeContent = (content) => {
      setSelectedContent(content);
      handleCountEventOrganizer();
   };

   const contentItems = {
      Home: <HomeDasboard />,
      Reports: <OrganizerReport countEventOrganizer={countEventOrganizer} />,
      "Add event": <RegisterEvent />,
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
            size="full">
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
