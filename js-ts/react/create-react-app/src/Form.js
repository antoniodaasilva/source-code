import React from 'react'

export const Form = () => {
  const [nome, setNome] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input 
        id='nome'
        type='text' 
        value={nome}
        name='nome' 
        onChange={(event) => setNome(event.target.value)} />
      {nome}
      <button>Enviar</button>
    </form>
  )
}