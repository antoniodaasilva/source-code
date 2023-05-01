import { Link, Outlet, useLocation, useParams } from "react-router-dom"

export function Products() {
  const params = useParams()
  const location = useLocation()
  console.log(location);
  const search = new URLSearchParams(location.search)
  console.log(search.get('memoria'));

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <Link to="">Descrição</Link> {' '}
        <Link to="rate">Avaliação</Link> {' '}
        <Link to="custom" >Customizado</Link>
      </nav>
      <Outlet />
    </div>
  );
}