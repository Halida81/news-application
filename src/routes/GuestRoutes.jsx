import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import SignIn from "../components/authorization/SignIn";
import SignUp from "../components/authorization/SignUp";
import Loading from "../components/ui/Loading";
// import Error from "../containers/NotFoundPage";


const GuestRoutes = () => {

    return (
        <Routes>
            <Route path="" element={<Navigate to="auth" />} />
            <Route path="auth/*" element={<Outlet />} />
            <Route index element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
            <Route path="login" index element={<Suspense fallback={<Loading />}><SignIn /></Suspense>} />
        </Routes>
    );
};

export default GuestRoutes;
