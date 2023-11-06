import {
   Box,
   Button,
   Card,
   Text,
   Heading,
   CardHeader,
   CardBody,
   Grid,
   Flex,
   useToast,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";

export const Confirmation = ({ back, data, handleRequest }) => {
   const handleSubmit = (values) => {
      back();
   };

   const result = data;
   const values = [];
   for (let key in result) {
      values.push(result[key]);
   }
   return (
      <Formik initialValues={data} onSubmit={handleSubmit}>
         <Flex justifyContent={"center"}>
            <Card>
               <CardHeader>
                  <Heading size="md">Confirmation Event</Heading>
               </CardHeader>
               <Form>
                  <CardBody>
                     <Grid
                        gap="4"
                        templateColumns={"repeat(2,1fr)"}
                        w={"300px"}>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Event Name
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {data.event_name}
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Description
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {data.description}
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Date
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {data.date}
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Country
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {data.country}
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              City
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {data.city}
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Category
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {data.category}
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Link image
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {data.image}
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Price
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {data.price}
                           </Text>
                        </Box>
                     </Grid>
                     <Flex
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        mt={"10px"}></Flex>
                  </CardBody>
                  {/* <Text as={"pre"}>{JSON.stringify(data, null, 2)}</Text> */}
               </Form>
               <Button onClick={back}>Back</Button>
               <Button type="submit" onClick={()=> handleRequest(data)}>
                  Submit
               </Button>
               {console.log(data)}
            </Card>
         </Flex>
      </Formik>
   );
};
