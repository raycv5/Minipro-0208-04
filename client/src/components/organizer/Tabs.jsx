import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { Form1 } from "./Form1AddEvent";

export const TabsPanels = () => {
   return (
      <Tabs isFitted variant="enclosed">
         <TabList mb="1em">
            <Tab>Event Details</Tab>
            <Tab>Price & Promotion</Tab>
         </TabList>
         <TabPanels>
            <TabPanel></TabPanel>
            <TabPanel>
               <p>two!</p>
            </TabPanel>
         </TabPanels>
      </Tabs>
   );
};
