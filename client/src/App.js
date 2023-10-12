import { HomePage } from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { setData } from "./redux/event";
import axios from "axios";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import EventPage from "./pages/EventPage";
import { OrganizerRegisterPage } from "./pages/OrganizerRegisterPage";
function App() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");

  const keepLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/events`);
      dispatch(setData(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/joinwithus" element={<EventPage />}></Route>
      <Route
        path="/register/organizer"
        element={<OrganizerRegisterPage />}
      ></Route>
    </Routes>
  );
}

export default App;
