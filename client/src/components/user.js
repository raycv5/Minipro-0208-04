import { Navigate, Outlet } from "react-router-dom";

export const User = () => {
   const id = localStorage.getItem("id");
   return <>{id ? <Outlet /> : <Navigate to="/" />}</>;
};
