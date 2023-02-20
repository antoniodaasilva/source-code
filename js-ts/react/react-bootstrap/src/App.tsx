import { 
  Navbar, 
  Container, 
  Nav, 
  NavDropdown, 
  Col, 
  Row, 
  Image, 
  Button, 
  Card
} from 'react-bootstrap'
import './App.css'

export function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main>
        <Container>
          <Row className='px-4 my-5'>
            <Col sm={7}>
              {/* <Image 
                src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" 
                fluid 
                rounded
                className=''
              /> */}
              
              <Image
                src="https://picsum.photos/900/400"
                fluid
                rounded
                className=''
              />

            </Col>
            <Col sm={5}>
              <h1 className='font-weight-light'>Tagline</h1>
              <p className='mt-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias distinctio sit libero, facere dolores explicabo minima autem impedit corrupti reprehenderit voluptates molestias, quasi voluptatem pariatur modi! Culpa, voluptas ullam.
              </p>
              <Button variant='outline-primary'>Call to action</Button>
            </Col>
          </Row>
          <Row>
            <Card className='text-center bg-secondary text-white my-5 py-4'>
              <Card.Body>
                This call to action is a great place to showcase some important information or display a clever tagline
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/200/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer className='py-5 my-5 bg-dark'>
          <Container className='px-4 '>
            <p className='text-center text-white'>
              Copyright &copy; Your website 2021
              </p>
          </Container>
      </footer>
    </div>
  )
}

