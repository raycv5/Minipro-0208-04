import { useState } from "react";
import {
   Box,
   Button,
   Stack,
   useToast,
   Tabs,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
} from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
import { Form1 } from "../organizer/Form1AddEvent";
import { useSelector } from "react-redux";
import { ErrorMessage, Form, Formik } from "formik";
import { Form2 } from "../organizer/Form2AddEvent";

const registEventSchema = Yup.object().shape({
   name: Yup.string().required("Event name is required"),
   date: Yup.string().required("date is required"),
   amount: Yup.number()
      .required("Ticket amount is required")
      .min(1, "Ticket amount must be at least 1"),
   descriptions: Yup.string().required("Description is required"),
   price: Yup.number().min(0, "Price cannot be negative"),
});

export const RegisterEvent = () => {
   const toast = useToast();
   const cities = useSelector((state) => state.cities.value);
   const country = useSelector((state) => state.country.value);
   const organizer = useSelector((state) => state.organizer.value);
   const category = useSelector((state) => state.category.value);
   console.log({ cities, country, category, organizer });
   const [data, setData] = useState({
      name: "",
      CategoryId: null,
      date: "",
      CountryId: null,
      CityId: null,
      descriptions: "",
      amount: 0,
      price: 0,
      OrganizerId: organizer.id,
   });
   const [image, setImage] = useState(null);

   const handleImage = (e) => {
      setImage(e.target.files[0]);
   };

   const handleSubmit = async (data) => {
      try {
         let formData = new FormData();
         formData.append("name", data.name);
         formData.append("CategoryId", data.CategoryId);
         formData.append("date", data.date);
         formData.append("CountryId", data.CountryId);
         formData.append("CityId", data.CityId);
         formData.append("descriptions", data.descriptions);
         formData.append("amount", data.amount);
         formData.append("file", image);
         formData.append("price", data.price);
         formData.append("OrganizerId", data.OrganizerId);
         const response = await axios.post(
            "http://localhost:2000/events",
            formData
         );
         console.log(response.data);
         toast({
            title: "Registerd",
            description: "Your are regist..!!",
            status: "success",
            duration: 5000,
            position: "top-left",
            isClosable: true,
         });
      } catch (err) {
         console.log(err);
      }

      console.log(data);
   };
   return (
      <Box p={{ base: "0" }}>
         <Formik
            initialValues={data}
            validationSchema={registEventSchema}
            onSubmit={(values, action) => {
               handleSubmit(values);
               action.resetForm();
            }}>
            {(props) => {
               const { handleChange, handleBlur, values, isSubmitting } = props;
               console.log(values);
               return (
                  <Box>
                     <Form>
                        <Tabs
                           isFitted
                           variant="enclosed"
                           w={{ base: "80%" }}
                           m={"0 auto"}>
                           <TabList mb="1em">
                              <Tab>Event Details</Tab>
                              <Tab>Price & Promotion</Tab>
                           </TabList>
                           <TabPanels>
                              <TabPanel>
                                 <Form1
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    values={values}
                                    ErrorMessage={ErrorMessage}
                                    cities={cities}
                                    country={country}
                                    category={category}
                                    handleImage={handleImage}
                                 />
                              </TabPanel>
                              <TabPanel>
                                 <Form2
                                    handleChange={handleChange}
                                    values={values}
                                    ErrorMessage={ErrorMessage}
                                 />
                                 <Stack
                                    w={"full"}
                                    display={"flex"}
                                    alignItems={"center"}>
                                    <Button
                                       type={isSubmitting ? "button" : "submit"}
                                       m={"20px 0"}
                                       w={"50%"}
                                       bg={"green.400"}
                                       color={"white"}
                                       _hover={{
                                          bg: "green.300",
                                       }}
                                       isLoading={isSubmitting}>
                                       {isSubmitting
                                          ? "Loading.."
                                          : "Submit form"}
                                    </Button>
                                 </Stack>
                              </TabPanel>
                           </TabPanels>
                        </Tabs>
                     </Form>
                  </Box>
               );
            }}
         </Formik>
      </Box>
   );
};
