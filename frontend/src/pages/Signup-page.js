import { useState } from "react";
import { Container, Row, Form, Button, Col, InputGroup } from "react-bootstrap";
import ApiCaller from "../api-callers";
const apiCaller = new ApiCaller();

export default function SignInPage() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhoneCountryCode, setUserPhoneCountryCode] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    const newUser = {
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      password: userPassword,
      phoneContact: {
        countryCode: userPhoneCountryCode,
        phoneNumber: userPhoneNumber,
      },
    };

    await apiCaller.userApiCaller.signup(newUser);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <h5 className="text-center">User Sign In</h5>
          <Form>
            <Form.Group className="mb-3" controlId="userFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUserFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUserLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userPhoneNumber">
              <Form.Label>Phone</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Country Code"
                  onChange={(e) => setUserPhoneCountryCode(e.target.value)}
                />
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  onChange={(e) => setUserPhoneNumber(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setUserEmail(e.target.value)}
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
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-4">
              <Button variant="primary" type="submit" onClick={handleSignUp}>
                SIGN IN
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
