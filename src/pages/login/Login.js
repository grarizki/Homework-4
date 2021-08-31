import {Container, Form, Col, Row, Button, Image, InputGroup} from "react-bootstrap";
import "./login.css"
import BRI from "../../assets/image/BRI2.png"
import { FaUser, FaLock} from 'react-icons/fa';


const styleButtton = {
  backgroundColor: "292961",
  width:"70vh",
  borderRadius:"10px",
  marginTop:"10px"
}

function Login() {
  return (
    <div className="outer">
      <div className="inner" style={{marginTop:"-70px"}}>
        <Container>
          <div className="logo">
            <Image src={BRI}/>
          </div>
          <Form style={{marginTop:"-30px"}}>
          <Form.Group as={Row} className="mb-3" name="username">
              <Form.Label column sm="2"> Username</Form.Label>
              <Col sm="8">
              <InputGroup>
                <InputGroup.Text> <FaUser /> </InputGroup.Text>
                <Form.Control   type="text" placeholder="Enter your username"  />
              </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2"> Password</Form.Label>
              <Col sm="8">
                <InputGroup>
                  <InputGroup.Text> <FaLock /> </InputGroup.Text>
                <Form.Control type="password" placeholder="Password" />
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" name="loginAs">
              <Form.Label column sm="2"> Login As</Form.Label>
              <Col sm="8">
                <Form.Select >
                  <option value="customer" selected>Customer</option>
                  <option value="agent">Agent</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
          <div className="align-content-center">
            <Button type="submit" style={styleButtton} size="md"> Sign In</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Login;
