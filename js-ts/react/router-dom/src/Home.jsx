import { Link } from "react-router-dom";
import { Head } from "./Head";

export function Home() {
  return (
    <div>
      <Head title="Home" description="Descrição da Home"/>
      <h1>Home</h1>
      <Link to="/products/notebook">Notebook</Link>
      <Link to="/products/smartphone">Smartphone</Link>
    </div>
  );
}