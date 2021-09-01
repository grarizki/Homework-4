import { Form, Col, Row, Button, Image } from "react-bootstrap";
import "../login/login.css";
import BRI from "../../assets/image/BRI2.png";
import { Link } from "react-router-dom";

function Login() {
  const styleButtton = {
    backgroundColor: "#292961",
    borderRadius: "10px",
    marginTop: "10px",
  };

  return (
    <div className="outer-login">
      <div className="inner-login" style={{ marginTop: "20px" }}>
        <div className="logo" style={{ marginTop: "-30px" }}>
          <Image src={BRI} />
        </div>
        <Form style={{ marginTop: "-50px", marginLeft: "60px" }}>
          <Form.Group className="mb-3" as={Row}>
            <Form.Label column sm="2">
              Username
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter your username" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" name="loginAs">
              <Form.Label column sm="4">
                Login As
              </Form.Label>
              <Col sm="10">
                <Form.Select>
                  <option value="customer" selected>
                    Customer
                  </option>
                  <option value="agent">Agent</option>
                </Form.Select>
              </Col>
            </Form.Group>
          <Link to="/home">
            <Button type="submit" style={styleButtton} size="md">
              Sign In
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
