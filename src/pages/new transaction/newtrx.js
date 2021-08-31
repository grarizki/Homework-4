import React from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";
import Alamat from '../new transaction/Setoran Pinjaman/alamat';
import CariAgenBtn from './cariagenbtn';
import "./newtrx.css";

function NewTrx (){  
    return(
        <div className="outer">
            <div className="input">
                <Form>
                    <Row className = "Row" >
                        <Col xs={2}>
                            <div className="lable">
                                <p>Jenis Tansaksi</p>
                            </div>

                        </Col>
                        <Col>
                            <div className="lable">
                                <p>:</p>
                            </div>
                        </Col>
                        <Col xs={9}>
                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                <option value="0">Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>                           
                        </Col>
                    </Row>
                    <Row className = "Row">
                        <Col xs={2}>
                            <div className="lable">
                                <p>Nominal Transaksi</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="lable">
                                <p>:</p>
                            </div>
                        </Col>
                        <Col xs={9}>
                        <Form.Control type="text" placeholder="Rupiah"/>
                        </Col>
                    </Row>
                    <Alamat />
                    <CariAgenBtn/>
                </Form>
                
            </div>

            <div className="output">

                
            </div>


        </div>


    )

  

}

export default NewTrx;