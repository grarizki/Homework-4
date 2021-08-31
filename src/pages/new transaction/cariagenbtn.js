import React from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";

class CariAgenBtn extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Row className = "Row">
                <Col className = "submit" >
                <Button type="submit" className="mb-2">
                    Cari Agen
                </Button>
                </Col>
            </Row>
        )
    }

}
export default CariAgenBtn;

