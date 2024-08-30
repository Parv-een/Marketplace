import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <Container>
      <Row>
        <h2>404</h2>
        <h3>Sorry , We couldnt find the page</h3>
        <Link to="/"> Return to Dashboard</Link>
        <Button variant="primary"></Button>
      </Row>
    </Container>
  );
}
