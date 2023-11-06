import { Navigate, Outlet } from "react-router-dom";

export const Organizer = () => {
   const id = localStorage.getItem("id");
   return <>{id ? <Outlet /> : <Navigate to="/joinwithus" />}</>;
};
