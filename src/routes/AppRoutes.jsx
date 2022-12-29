import { useSelector } from "react-redux";
import GuestRoutes from "./GuestRoutes";
import UserRouter from "./UserRoutes";

export const AppRoutes = () => {
  // const { token } = useSelector((state) => state.authSlice.user);
  const token = localStorage.getItem("my_token");
  console.log(token);

  if (!token) {
    return <GuestRoutes />;
  }

  return (
    <>
      <UserRouter />
    </>
  );
};
