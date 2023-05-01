import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation()

  useEffect(() => {
    console.log('mudou a rota');
  }, [location])

  return <header>
      <nav>
        <Link to="/">Home</Link>
        |
        <Link to="/about">Sobre</Link>
        |
        <NavLink to="/login">Login</NavLink>
      </nav>

  </header>
}