import { lazy, Suspense } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";

const SignInPage = lazy(() => import("../components/authorization/SignIn"));
const SignUpPage = lazy(() => import("../components/authorization/SignUp"));
const NotFoundPage = lazy(() => import("../containers/NotFoundPage"));
const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="registration" />} />
      <Route path="registration" element={<Outlet />} />
      <Route
        index
        path="registration"
        element={
          <Suspense fallback={<Loading />}>
            <SignUpPage />
          </Suspense>
        }
      />
      <Route
        path="login"
        element={
          <Suspense fallback={<Loading />}>
            <SignInPage />
          </Suspense>
        }
      />
      <Route
        path="/*"
        index
        element={
          <Suspense fallback={<Loading />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default GuestRoutes;
