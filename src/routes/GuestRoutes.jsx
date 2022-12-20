import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "../components/authorization/SignIn";
import SignUp from "../components/authorization/SignUp";

const GuestRoutes = () => {
  const { token } = useSelector((state) => state.authSlice.user);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/registration" />} />
      <Route path="/registration" element={<SignUp />} />
      {token && <Route path="/login" element={<SignIn />} />}
    </Routes>
  );
};

export default GuestRoutes;
