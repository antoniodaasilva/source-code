import { PencilLine } from "phosphor-react";

import styles from './Sidebar.module.css'

import capa from '../assets/capa.png'
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src={capa}
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/antoniodebrito.png" />

        <strong>Antonio Brito</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}