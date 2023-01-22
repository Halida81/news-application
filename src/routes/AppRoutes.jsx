import GuestRoutes from "./GuestRoutes";
import UserRouter from "./UserRoutes";
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './ProtecRoute'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigate to="/megalab" />} />
         <Route
            path="/megalab/*"
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
