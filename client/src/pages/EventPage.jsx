import { Box } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useEffect } from "react";
import { FormRegist } from "../components/FormRegister";

export const EventPage = () => {
   const getData = async () => {
      try {
         const response = await axios.get("http://localhost:2000/events");
         console.log(response.data);
      } catch (error) {
         console.error(error);
      }
   };
   useEffect(() => {
      getData();
   }, []);
   return (
      <Box>
         <Navbar />
         <FormRegist />
      </Box>
   );
};
