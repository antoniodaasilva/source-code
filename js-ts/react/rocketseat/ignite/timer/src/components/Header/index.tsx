import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./style";
import { Timer, Scroll } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo}/>
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
