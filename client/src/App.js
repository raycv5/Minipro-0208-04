import { HomePage } from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { setData } from "./redux/event";
import { login } from "./redux/userSlice";
import axios from "axios";
import { useEffect } from "react";
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
import EventDetails from "./pages/EventDetails";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const Navigate = useNavigate();

  // const keepLogin = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:2000/events/${id}`);
  //     dispatch(setData(response.data));
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   keepLogin();
  // }, []);

  const keepLoginUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2000/users/keep-login`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(login(response.data));
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    keepLoginUser();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/details" element={<EventDetails />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/joinwithus" element={<EventPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route
        path="/register/organizer"
        element={<OrganizerRegisterPage />}
      ></Route>
      <Route
        path="/buildyourpage"
        element={token ? <OrganizerDashboardPage /> : <Navigate to="/" />}
      ></Route>
      <Route path="/userRegister" element={<UserRegister />} />
      <Route
        path="/userDashboard"
        element={token ? <UserDashboard /> : <Navigate to="/" />}
      />
      <Route path="/send-code" element={<SendCode />}></Route>
      <Route path="/welcome-user" element={<UserDashboard />}></Route>
      <Route path="/referral-content" element={<ReferralContent />}></Route>
      <Route path="/user-event" element={<UserEvent />}></Route>
    </Routes>
  );
}

export default App;
