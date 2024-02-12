import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const AuthRoutes = () => {
  return (
    <Routes>
        {/* login y registro */}
        <Route path="/login" element={<LoginPage/>}/>

        {/* JournalApp */}
        <Route path="/register" element={<RegisterPage/>}/>

        <Route path="/*" element={<Navigate to={<LoginPage/>}/>} />
        
    </Routes>
  )
}
