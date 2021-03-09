import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row as="header">
        <h1>Título</h1>
      </Row>
      <Row as="main">
        <Col as="section" className="principal">
          <h2>Titular de la notícia</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, illum! Voluptatem sunt nam molestias,
          repudiandae minima quod aliquid deleniti eaque aspernatur dicta totam necessitatibus architecto similique maxime.
            Obcaecati, molestias amet?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, illum! Voluptatem sunt nam molestias,
          repudiandae minima quod aliquid deleniti eaque aspernatur dicta totam necessitatibus architecto similique maxime.
            Obcaecati, molestias amet?</p>
        </Col>
        <Col as="aside" className="sidebar">
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
        <span>Texto del footer</span>
      </Row>
    </Container>
  );
}

export default App;
