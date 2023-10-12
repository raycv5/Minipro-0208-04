import { HomePage } from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { setData } from "./redux/event";
import axios from "axios";
import { useEffect } from "react";
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
   return <HomePage />;
}

export default App;
