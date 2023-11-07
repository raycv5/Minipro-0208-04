import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Discovery } from "../components/discovery/Discover";

export const DiscoveryPage = ({ isLoad, setIsload }) => {
   return <Discovery isLoad={isLoad} setIsload={setIsload} />;
};
