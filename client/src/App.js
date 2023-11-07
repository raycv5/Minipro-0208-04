import { HomePage } from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { setData } from "./redux/organizerSlice";
import { login } from "./redux/userSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EventPage from "./pages/EventPage";
import { OrganizerRegisterPage } from "./pages/OrganizerRegisterPage";
import { OrganizerDashboardPage } from "./pages/OrganizerDashboardPage";
import UserDashboard from "./pages/userDashboardPage";
import UserRegister from "./pages/userRegisterPage";
import CartPage from "./pages/CartPage";
import SendCode from "./components/dashboard-component/SendcodeContent";
import ReferralContent from "./components/dashboard-component/ReferralContent";
import UserEvent from "./components/dashboard-component/UserEventContent";
import { DiscoveryPage } from "./pages/discoveryPage";
import { cityData } from "./redux/citySlice";
import { countryData } from "./redux/countrySlice";
import { categoryData } from "./redux/categorySlice";
import { eventsData } from "./redux/eventSlice";
import ProductDetail from "./components/event-details/ProductDetail";

function App() {
   const dispatch = useDispatch();
   const id = localStorage.getItem("id");
   const Navigate = useNavigate();
   const organizerToken = localStorage.getItem("organizerToken");
   console.log(organizerToken);

   const [isLoad, setIsLoad] = useState(true);

   const getCountry = async () => {
      try {
         const country = await axios.get(`http://localhost:2000/countries`);
         dispatch(countryData(country.data));
      } catch (error) {
         console.log(error);
      }
   };

   const getCategory = async () => {
      try {
         const category = await axios.get(`http://localhost:2000/category`);
         dispatch(categoryData(category.data));
      } catch (error) {
         console.log(error);
      }
   };

   const getEvent = async () => {
      try {
         const events = await axios.get(`http://localhost:2000/events`);
         dispatch(eventsData(events.data.event));
         setIsLoad(false);
      } catch (error) {
         console.log(error);
         setIsLoad(true);
      }
   };

   const getCity = async () => {
      try {
         const city = await axios.get(`http://localhost:2000/cities`);
         dispatch(cityData(city.data));
      } catch (error) {
         console.log(error);
      }
   };

   const keepLogin = async () => {
      try {
         const response = await axios.get(
            `http://localhost:2000/organizers/keep-login`,
            {
               headers: {
                  Authorization: `Bearer ${organizerToken}`,
               },
            }
         );
         console.log(response);
         dispatch(setData(response.data.result));
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      keepLogin();
      getCity();
      getCountry();
      getCategory();
      getEvent();
   }, []);

   const keepLoginUser = async () => {
      try {
         const response = await axios.get(`http://localhost:2000/users/${id}`);
         dispatch(login(response.data));
      } catch (err) {
         console.log(err);
      }
   };
   useEffect(() => {
      keepLoginUser();
   }, [dispatch]);

   return (
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
         <Route path="/joinwithus" element={<EventPage />}></Route>
         <Route path="/cart" element={<CartPage />}></Route>{" "}
         <Route
            path="/register/organizer"
            element={<OrganizerRegisterPage />}></Route>
         <Route
            path="/buildyourpage"
            element={
               organizerToken ? (
                  <OrganizerDashboardPage />
               ) : (
                  <Navigate to="/joinwithus" />
               )
            }></Route>
         <Route path="/userRegister" element={<UserRegister />} />
         <Route
            path="/userDashboard"
            element={id ? <UserDashboard /> : <Navigate to="/" />}
         />
         <Route
            path="/discovery"
            element={
               <DiscoveryPage
                  isLoad={isLoad}
                  setIsload={setIsLoad}
                  getEvent={getEvent}
               />
            }></Route>
         <Route path="/send-code" element={<SendCode />}></Route>
         <Route path="/welcome-user" element={<UserDashboard />}></Route>
         <Route path="/referral-content" element={<ReferralContent />}></Route>
         <Route path="/user-event" element={<UserEvent />}></Route>
         <Route
            path="/product-detail"
            element={<ProductDetail isLoad={isLoad} />}></Route>
      </Routes>
   );
}

export default App;
