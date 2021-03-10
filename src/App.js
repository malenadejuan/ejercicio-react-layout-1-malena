import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container className="contenedor d-flex flex-column">
      <Row as="header">
        <Col as="span"><h1>Título</h1></Col>
      </Row>
      <Row as="main">
        <Col sm="12" md="8" as="section" className="principal">
          <h2>Titular de la notícia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, illum! Voluptatem sunt nam molestias,
          repudiandae minima quod aliquid deleniti eaque aspernatur dicta totam necessitatibus architecto similique maxime.
            Obcaecati, molestias amet?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, illum! Voluptatem sunt nam molestias,
          repudiandae minima quod aliquid deleniti eaque aspernatur dicta totam necessitatibus architecto similique maxime.
            Obcaecati, molestias amet?</p>
        </Col>
        <Col sm="12" md="4" as="aside" className="sidebar">
          <h3>Categorías</h3>
          <ul className="list-unstyled">
            <li>Noticias de deporte</li>
            <li>Noticias de ocio</li>
            <li>Noticias de política</li>
            <li>Noticias de espectáculos</li>
          </ul>
          <h3>Otras cosas</h3>
          <ul className="list-unstyled">
            <li>Nosequé</li>
            <li>Nosecuánto</li>
            <li>Talycual</li>
          </ul>
        </Col>
      </Row>
      <Row as="footer">
        <Col as="span">Texto del footer</Col>
      </Row>
    </Container>
  );
}

export default App;
