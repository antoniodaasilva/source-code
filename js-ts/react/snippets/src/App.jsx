import { useState } from "react";
import { TabItem, Tabs } from "./components/Tabs";

export function App() {

  const [value, setValue] = useState('')
  const text = 'Entrar'
  
  function click(event) {
    console.log(event);
  }

  return (
    <div>
        <h1>Faça seu login</h1>
      <form>

        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
          />
        </div>

        <button 
          onClick={click}
        >
          {text}
        </button>
      </form>
    </div>
  )
}
