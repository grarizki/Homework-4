import React from 'react';
import Alamat from './alamat';
import CariAgenBtn from './cariagenbtn'
import { Form, Col, Row, Button } from "react-bootstrap";

function StoranPinjaman (){
    return(
        <div>
            <Row>
                <Col xs={3} style={{paddingTop:"7px", fontSize:"16px"}}>
                    <p>Nominal Transaksi</p>
                </Col>
                <Col style={{paddingTop:"7px"}}>
                    <p>:</p>
                </Col>
                <Col xs={8}>
                    <Form.Control type="text" placeholder="Rp"/>
                </Col>
            </Row>
            <Alamat/>
            <CariAgenBtn/> 
        </div>

    )
}
export default StoranPinjaman;