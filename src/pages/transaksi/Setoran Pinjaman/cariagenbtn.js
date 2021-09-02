import React from 'react';
import {Col, Row, Button } from "react-bootstrap";

class CariAgenBtn extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="cariAgenBtn" style={{display:"flex", justifyContent:"center"}}>
                <Row >
                    <Col className = "submit" >
                        <Button type="submit" className="mb-2" style={{backgroundColor:"#04ac14",
                        border:"none",fontSize:"16px", marginTop:"40px", paddingRight:"20px", 
                        paddingLeft:"20px"}}>
                            Cari Agen
                        </Button>
                    </Col>
                </Row>

            </div>

        )
    }

}
export default CariAgenBtn;

