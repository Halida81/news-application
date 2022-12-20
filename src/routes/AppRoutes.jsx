import { useSelector } from "react-redux";
import GuestRoutes from "./GuestRoutes";
import UserRouter from "./UserRoutes";

export const AppRoutes = () => {
  const { token } = useSelector((state) => state.authSlice.user);

  if (!token) {
    return <GuestRoutes />;
  }

  return (
    <>
      <UserRouter />
    </>
  );
};
