import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./ProtectRoutes";

import { Login } from "../Pages/Login";
// import { Cadastro } from "../Pages/Cadastro";


export const Routering = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Login/>}/>
        <Route path="/cadastrar" element={<h1>Tela cadastro</h1>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <h1>Tela home</h1>
          </ProtectedRoutes>
        }/>
      </Routes>
    </Router>
  )
}