import { useEffect, useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ApiCaller from "../api-callers";
const apiCaller = new ApiCaller();

export default function LoginPage({
  setIsUserLoggedIn,
  isUserLoggedIn,
  setUserId,
}) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isUserLoggedIn) navigate("/");
  }, [isUserLoggedIn]);

  const handleLogin = async (event) => {
    event.preventDefault();

    const result = await apiCaller.userApiCaller.login({
      email,
      password,
    });

    setUserId(result.data.userId);
    setIsUserLoggedIn(true);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <h5 className="text-center">User Login</h5>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" onClick={handleLogin}>
                LOGIN
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
