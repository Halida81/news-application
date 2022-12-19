import { Route, Routes } from "react-router-dom";
import SignUp from "../components/authorization/SignUp";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route element={<SignUp />} />
    </Routes>
  );
};

export default GuestRoutes;
