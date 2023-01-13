import { useSelector } from "react-redux";
// import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../components/authorization/SignIn";
import InnerPage from "../containers/InnerPage";
// import NewsPage from "../containers/NewsPage";
import Profile from "../containers/MyPublications";
import SelectedNews from "../containers/SelectedNews";
import Error from "../containers/NotFoundPage";

// const UserRouter = () => {
//   return (
//     <Routes>
//       <Route path="" element={<Navigate to="news" />} />
//       <Route path="news/" element={<NewsPage />} />
//       <Route path="news/:id" element={<InnerPage />} />
//       <Route path="selectedNews" element={<SelectedNews />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="/*" element={<Error />} />
//     </Routes>
//   );
// };

// export default UserRouter;
import React, { lazy, Suspense } from 'react'

import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import Loader from "../components/ui/Loading";
import PageLayout from "../layout/PageLayout";
import UserPageLayout from "../layout/UserPageLayout";
// import AppLayout from '../../layout/AppLayout'

const NewsPage = lazy(() => import('../containers/NewsPage'))
const NewInnerPage = lazy(() => import('../containers/InnerPage'))
const ProfilePage = lazy(() => import('../containers/MyPublications'))
const SelectedNewsPage = lazy(() => import('../containers/SelectedNews'))

const UserRouter = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="news" />} />
         <Route path="news/*" element={<Outlet />}>
            <Route
               index
               element={
                  <Suspense fallback={<Loader />}>
                     <PageLayout>
                        <NewsPage />
                     </PageLayout>
                  </Suspense>
               }
            />
            <Route
               path=":id"
               element={
                  <Suspense fallback={<Loader />}>
                  <PageLayout>
                     <NewInnerPage />
                  </PageLayout>
                  </Suspense>
               }
            />
         </Route>
         <Route
            path="selectedNews"
            element={
               <Suspense fallback={<Loader />}>
                  <UserPageLayout>
                     <SelectedNewsPage />
                  </UserPageLayout>
               </Suspense>
            }
         />
         <Route
            path="profile"
            element={
               <Suspense fallback={<Loader />}>
                  <UserPageLayout>
                  <ProfilePage />
                  </UserPageLayout>
               </Suspense>
            }
         />
      </Routes>
   )
}

export default UserRouter;

