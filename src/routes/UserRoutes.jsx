import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../components/authorization/SignIn";
import InnerPage from "../containers/InnerPage";
import NewsPage from "../containers/NewsPage";
import Profile from "../containers/Profile";
import SelectedNews from "../containers/SelectedNews";

const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/news" />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<InnerPage />} />
      <Route path="/selectedNews" element={<SelectedNews />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default UserRouter;
