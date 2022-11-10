import React from "react"
import { Routes, Route} from 'react-router-dom'
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"


export const RoutesApp: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
    )
}