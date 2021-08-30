import React from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";
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
                    <Row className = "Row">
                        <Col xs={2}>
                            <div className="lable">
                                <p> Alamat Saat Ini*</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="lable">
                                <p>:</p>
                            </div>
                        </Col>
                        <Col xs={9}>
                            <Row>
                                <Col xs={3}>
                                    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                        <option value="0">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={3}>
                                    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                        <option value="0">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col xs={3}>
                                    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                        <option value="0">Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Col className ="alamat">
                                <Form.Control type="text" placeholder="Alamat Lengkap" />
                            </Col>                                  
                        </Col>                  

                    </Row>
                    <Row className = "Row">
                        <Col className = "submit" >
                        <Button type="submit" className="mb-2">
                            Cari Agen
                        </Button>
                        </Col>

                    </Row>
                </Form>
                
            </div>

            <div className="output">

                
            </div>


        </div>


    )

        



    



}

export default NewTrx;