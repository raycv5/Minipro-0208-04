import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const registSchema = Yup.object().shape({
   name: Yup.string(),
   email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
   password: Yup.string()
      .min(3, "password must be at least 3 characters")
      .required("Password is required"),
   referral: Yup.string(),
});

export const FormRegist = () => {
    const getData = async (data) => {
        try{
            const response = await axios.post("http://localhost:2000/users",data);
        }catch(err) {
            console.log(err);
        }
    } 
}
