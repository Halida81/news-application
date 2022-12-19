import { useSelector } from "react-redux";
import SignUp from "../components/authorization/SignUp";
import GuestRoutes from "./GuestRounes";

export const AppRoutes = () => {
  const token = useSelector((state) => state.authSlice.user);
  if (!token) {
    return <GuestRoutes />;
  }
  return (
    <>
      <SignUp />
    </>
  );
};
