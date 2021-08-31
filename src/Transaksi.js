import React from 'react';
import './Transaksi.css';
import {Col, Row, Form} from 'react-bootstrap';


class Transaksi extends React.Component {  
    render() {
      return (
        <div className="container">
          <Row>
            <Col>
          <Form.Label>Jenis Transaksi:</Form.Label>
          </Col>
          <Col>
          <Form.Select aria-label="Default select example" size="sm">
              <option>Pilih Jenis Transaksi</option>
              <optgroup label="Laku Pandai" selected="selected"></optgroup>
              <option value="Cashio">Cash-in & out </option>
              <option value="Report">Report</option>
              <option value="SetoranUang">Setoran Uang</option>
              <option value="TarikTunai">Tarik Tunai</option>
              <option value="IsiUlangPulsa">Isi Ulang Pulsa</option>
              <option value="BelanjaMerchant">Belanja Merchant</option>

              <optgroup label="Tunai"></optgroup>
              <option value="SetoranPinjaman">Setoran Pinjaman</option>
              <option value="SetoranSimpanan">Setoran Simpanan</option>
              <option value="TarikTunai">Tarik Tunai</option>

              <optgroup label="Mini ATM BRI"></optgroup>
              <option value="RegistrasiMobileBanking">Registrasi Mobile Banking</option>
              <option value="RegistrasinternetBanking">Registrasi internet Banking</option>
              <option value="InformasiRekening">Informasi Rekening</option>
              <option value="TransferPembayaran">Transfer Pembayaran</option>
              <option value="IsiUlangPulsa">Isi Ulang Pulsa</option>
              <option value="Setor-Pasti">Setor-Pasti</option>
          </Form.Select>
          </Col>
          </Row>
        </div>
      );
    }
  }

  export default Transaksi;



