import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Home title="Home"/>
      <h1>Home</h1>
      <Link to="/products/notebook">Notebook</Link>
      <Link to="/products/smartphone">Smartphone</Link>
    </div>
  );
}