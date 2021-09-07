import React from "react";
import "./TransaksiPage.css";
import { Col, Row, Form, Button } from "react-bootstrap";
import CurrencyInput from "react-currency-input";
import NavbarComponent from "../../assets/components/navbar/NavbarComponent";
import JenisTransaksiComponent from "./JenisTransaksiComponent";
import AlamatComponent from "./AlamatComponent";

const TransaksiPage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <Row>
          <Form>
            <JenisTransaksiComponent />

            <Form.Group as={Row} className="mb-3 center">
              <Form.Label column md={2}>
                Nominal Transaksi
              </Form.Label>
              <Col md={6}>
                <CurrencyInput prefix="Rp" thousandSeparator="." precision="0" className="form-control" />
              </Col>
            </Form.Group>

            <AlamatComponent />
          </Form>
        </Row>
        <Row md={6}>
          <Button className="searching-agent">Cari Agen</Button>
        </Row>
      </div>
    </div>
  );
};

export default TransaksiPage;
