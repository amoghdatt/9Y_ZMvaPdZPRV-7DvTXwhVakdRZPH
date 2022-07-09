import { Container, Row, Form, Button, Col } from "react-bootstrap";

export default function LoginPage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <h5 className="text-center">User Login</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                LOGIN
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
