import { Header } from "./Header";

export function App() {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500'},
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true
  }

  const mario = {
    cliente: 'Mario',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false
  }

  const dados = mario

  const total = dados.compras
    .map(item => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b)

  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766']
    }, 
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59']
    },
    {
      id: 3,
      nome: 'Smatphone',
      preco: 'R$ 2000',
      cores: ['#365069', '#47c1c8', '#f95786']
    }
  ]


  const produtoPreco = produtos.filter(({ preco }) => Number(preco.replace('R$ ', '')) > 1500)

  return (
    <div> 
      <Header/>
      <p>Nome: {dados.cliente }</p>
      <p>Idade: {dados.idade}</p> 
      <p>Situação: <span style={dados.ativa ? { color: 'green' } : { color: 'red' }}>{dados.ativa ? 'Ativa' : 'Inativo'}</span></p>
      <p>Total: R$ {total}</p> 
      {total > 10000 && <p>Você está gastando muito</p>}

      <br />
      <h1>Proutos</h1>

      <section>
        {
          produtoPreco.map(({id, nome, preco, cores}) => <div key={id}>
            <h1>{nome}</h1>
            <p>Preco: {preco}</p>
            <ul>
              {
                cores.map(
                  cor => <li style={{background: cor, color: '#fff'}} key={cor}>{cor}</li>)
              }
            </ul>
          </div>)
        }
      </section>
    </div>
  );
}
