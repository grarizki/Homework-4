import React, {Component} from 'react';
import '../transaksi/Transaksi.css';
import {Col, Row, Form} from 'react-bootstrap';
import NavbarComponent from "../../assets/components/navbar/NavbarComponent"


class Transaksi extends Component {  
    render() {
      return (
       <div>
         <NavbarComponent />
          <div className="container">
          <Form>
          <Form.Group as={Row} className="mb-3">
         <Col md="4">
         <Form.Label style={{width:"200px", paddingTop:"6px", fontSize:"20px"}}>
                Jenis Transaksi 
              </Form.Label>
         </Col>
             <Col md="8">
              <Form.Select size="md">
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
  </Form.Group>
          </Form>

      </div>
       </div>
      );
    }
  }

  export default Transaksi;



