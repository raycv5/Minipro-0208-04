import {
   StatGroup,
   Stat,
   StatLabel,
   StatNumber,
   StatHelpText,
   StatArrow,
} from "@chakra-ui/react";

export const SalesReports = () => {
   return (
      <StatGroup>
         <Stat>
            <StatLabel>Sent</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
               <StatArrow type="increase" />
               23.36%
            </StatHelpText>
         </Stat>

         <Stat>
            <StatLabel>Clicked</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>
               <StatArrow type="decrease" />
               9.05%
            </StatHelpText>
         </Stat>
      </StatGroup>
   );
};
