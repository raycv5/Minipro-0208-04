import {
   Stepper,
   Step,
   StepIndicator,
   StepStatus,
   StepIcon,
   StepNumber,
   StepTitle,
   Box,
   StepDescription,
   StepSeparator,
} from "@chakra-ui/react";

const steps = [
   { title: "First", description: "Create events" },
   { title: "Second", description: "Details Events" },
   { title: "Third", description: "Submit & Success" },
];

export const StepAddEvent = ({ activeStep }) => {
   return (
      <Stepper index={activeStep}>
         {steps.map((step, index) => (
            <Step key={index}>
               <StepIndicator>
                  <StepStatus
                     complete={<StepIcon />}
                     incomplete={<StepNumber />}
                     active={<StepNumber />}
                  />
               </StepIndicator>

               <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
               </Box>
               <StepSeparator />
            </Step>
         ))}
      </Stepper>
   );
};
