import React, { useState } from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { Produtos } from "./Produtos";

export const Main = () => {

  const [ativo, setAtivo] = useState(true)

  const {pathname} = window.location
  let Pagina

  if (pathname === "/produtos") {
    Pagina = Produtos
  } else {
    Pagina = Home
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