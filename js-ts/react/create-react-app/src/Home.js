import React from 'react'
import { Titulo } from './Titulo'
import { useLocalStorage } from './useLocalStorage'
import useFetch from "./useFetch";

export const Home = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')
  const {request, data, loading, error} = useFetch()

  function handleClick({target}) {
    setProduto(target.innerText)
  }

  React.useEffect(() => {
    async function fetchData() {
      const {response, json} = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      )
    }
    fetchData()

  }, [request])

  if (error) return <p>{error}</p>
  if(loading) return <p>Carregando</p>

  if (data)
    return (
      <section>
        <Titulo texto="Home" />
        <p>Produto selecionado: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>{produto.name}</div>
        ))}
      </section>
    );
  else return null
}

