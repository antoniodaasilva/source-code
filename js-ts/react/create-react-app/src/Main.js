import React, { useState } from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { Produtos } from "./Produtos";
import { RegisterForm } from "./RegisterForm";

export const Main = () => {

  const [ativo, setAtivo] = useState(true)

  const {pathname} = window.location
  let Pagina

  if (pathname === "/") {
    Pagina = Home
  } else if (pathname === "/produtos") {
    Pagina = Produtos
  } else if (pathname === "/register") {
    Pagina = RegisterForm
  }


  return (
    <section>
      <Header />
      <Pagina />

      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </section>
  )
}