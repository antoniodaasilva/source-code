import { Navbar, Nav, Container } from "react-bootstrap"

export function App() {

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            Fruta & Fruto
          </Navbar.Brand>
          <Nav.Item className="bg-primary ">
            <Nav className="me-auto ">
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Receitas</Nav.Link>
              <Nav.Link href="#">Quem Somos</Nav.Link>
              <Nav.Link href="#">Contato</Nav.Link>
            </Nav>
          </Nav.Item>
        </Container>
      </Navbar>

      <title>fruto & fruta</title>

      <h1>Reaproveite melhor os alimentos!</h1>
      <h1>Economize e ganhe em saúde!</h1>

      <h2>Receitas para economizar e ganhar saúde</h2>
      <h2>Nossas receitas ajudam você a aproveitar melhor os alimentos, economizar, ganhar tempo e praticidade</h2>

      <img src="/receita-abacate.jpg" alt="tigela com salada de abacate, vista superior" />
      <h3>Tigela de abacate</h3>
      <p>Receita refrescante e cheia de vitaminas para o seu café da manhã!</p>

      <img src="/receita-kiwi.jpg" alt="tigela de mingau com kiwi, vista superior" />
      <h3>Salada de kiwi</h3>
      <p>Receita refrescante e cheia de vitaminas para o seu café da manhã!</p>

      <img src="/receita-mix.jpg" alt="prato com mix de vegetais e mão de pessoa adicionando azeite, vista superior" />
      <h3>Mix de vegetais</h3>
      <p>Receita refrescante e cheia de vitaminas para o seu café da manhã!</p>

      <img src="/receita-pimentoes.jpg" alt="prato de salada de pimentões com alguns ingredientes ao lado, vista superior" />
      <h3>Pimentões à Juliana</h3>
      <p>Receita refrescante e cheia de vitaminas para o seu café da manhã!</p>

      <img src="/receita-oriental.jpg" alt="tigela com salada de vegetais estilo oriental, vista de cima" />
      <h3>Prato oriental</h3>
      <p>Receita refrescante e cheia de vitaminas para o seu café da manhã!</p>

      <img src="/receita-beterrabas.jpg" alt="tigela com beterrabas e dentes de alho assados em primeiro plano, com ingredientes ao fundo" />
      <h3>Beterrabas assadas</h3>
      <p>Receita refrescante e cheia de vitaminas para o seu café da manhã!
      </p>

      <p>contato:<a href="mailto:email@frutafruto.com.br">email@frutafruto.com.br</a></p>
    </div>
  )
}

