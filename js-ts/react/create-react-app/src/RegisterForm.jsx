import { useState } from "react";
import { Textarea } from "./Textarea";

const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "cep",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "number",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];


export function RegisterForm() {
  const [form, setForm] = useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {})
  );
  const [response, setResponse] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    }).then(response => {
      setResponse(response);
    })
    
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({id, label, type}) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            value={form[id]}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
      ))}
      <Textarea />
      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
  );
}
