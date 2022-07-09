import { Container, Row, Form, Button, Col, InputGroup } from "react-bootstrap";

export default function SignInPage() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <h5 className="text-center">User Sign In</h5>
          <Form>
            <Form.Group className="mb-3" controlId="userFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userPhoneNumber">
              <Form.Label>Phone</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control type="text" placeholder="Country Code" />
                <Form.Control type="text" placeholder="Phone Number" />
              </InputGroup>
            </Form.Group>

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

            <div className="d-grid gap-4">
              <Button variant="primary" type="submit">
                SIGN IN
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
