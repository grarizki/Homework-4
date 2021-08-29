import { Container, Form, Col, Row } from "react-bootstrap";
import "./login.css";

function Login() {
  return (
    <div className="outer">
      <div className="inner">
        <Container>
          <Form>
          <Form.Group as={Row} className="mb-3" name="username">
              <Form.Label column sm="2"> Username</Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter your username" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2"> Password</Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default Login;
