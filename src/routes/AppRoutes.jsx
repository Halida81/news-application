import GuestRoutes from "./GuestRoutes";
import UserRouter from "./UserRoutes";
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtecRoute'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/app" />} />
         <Route
            path="/app/*"
            element={
               <ProtectedRoute>
                  <UserRouter />
               </ProtectedRoute>
            }
         />
         <Route
            path="/auth/*"
            element={
               <GuestRoutes />
            }
         />
      </Routes>
   )
}
