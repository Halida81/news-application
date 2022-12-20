import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../components/authorization/SignIn";
import NewsPage from "../containers/NewsPage";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/news" element={<NewsPage />} />
    </Routes>
  );
};
export default UserRouter;
