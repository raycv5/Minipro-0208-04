"use client";

import {
   Box,
   chakra,
   Flex,
   SimpleGrid,
   Stat,
   StatLabel,
   StatNumber,
   useColorModeValue,
} from "@chakra-ui/react";
import { BsCalendar2Check } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { useSelector } from "react-redux";

function StatsCard(props) {
   const { title, stat, icon } = props;
   return (
      <Stat
         px={{ base: 2, md: 4 }}
         py={"5"}
         shadow={"xl"}
         border={"1px solid"}
         borderColor={useColorModeValue("gray.800", "gray.500")}
         rounded={"lg"}>
         <Flex justifyContent={"space-between"}>
            <Box pl={{ base: 2, md: 4 }}>
               <StatLabel fontWeight={"medium"} isTruncated>
                  {title}
               </StatLabel>
               <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                  {stat}
               </StatNumber>
            </Box>
            <Box
               my={"auto"}
               color={useColorModeValue("gray.800", "gray.200")}
               alignContent={"center"}>
               {icon}
            </Box>
         </Flex>
      </Stat>
   );
}

export const OrganizerReport = ({ countEventOrganizer }) => {
   const organizer = useSelector((state) => state.organizer.value);
   console.log(organizer);
   console.log(countEventOrganizer);

   return (
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
         <chakra.h1
            textAlign={"center"}
            fontSize={"3xl"}
            py={10}
            fontWeight={"bold"}>
            Boost your efforts and consider every sales opportunity as a step
            towards greater success.
         </chakra.h1>
         <SimpleGrid
            columns={{ base: 1, md: 1, xl: 3 }}
            spacing={{ base: 5, lg: 8 }}>
            <StatsCard
               title={"Total Events"}
               stat={countEventOrganizer.count}
               icon={<BsCalendar2Check size={"3em"} />}
            />
            <StatsCard
               title={"Wallet"}
               stat={organizer.Organizer_Wallet.balance.toLocaleString(
                  "id-ID",
                  {
                     style: "currency",
                     currency: "IDR",
                  }
               )}
               icon={<BiWallet size={"3em"} />}
            />
            <StatsCard
               title={"Transactions"}
               stat={"7"}
               icon={<MdPayment size={"3em"} />}
            />
         </SimpleGrid>
      </Box>
   );
};
