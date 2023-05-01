import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { About } from "./About";
import { ErrorPage } from "./ErrorPage";
import { Header } from "./Header";
import { Login } from "./Login";
import { Products } from "./Products";
import { ProdutoDescricao } from "./ProdutoDescricao";
import { ProdutoAvaliacao } from "./ProdutoAvaliacao";
import { ProdutoCustomizado } from "./ProdutoCustomizado";


export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<Products />}>
          <Route path="" element={<ProdutoDescricao />} />
          <Route path="rate" element={<ProdutoAvaliacao />} />
          <Route path="custom" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}