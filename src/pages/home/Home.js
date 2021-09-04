import React, {Component} from 'react';
import { Form, Col, Row, Button, Navbar} from 'react-bootstrap';
import'../home/Home.css'
import NavbarComponent from "../../assets/components/navbar/NavbarComponent"
import {useAuthorizedContext} from '../../AuthorizedContext'

class Time extends Component {
  state={
    myCurrentTime : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="Date">
        {this.state.myCurrentTime}
      </div>
    );
  }
}

function Home() {
  const { isLoggedIn, userLevel } = useAuthorizedContext()
  console.log("value >> ", isLoggedIn, userLevel)
  return (  
    <div className="outer-home">
      <NavbarComponent />
      <div className="status">
        <p>Transaksi Saat Ini:</p>
      </div>
      <div className="inner-home">
        <Form>
          <Row style={{width:"500px"}}>
            <Col sm={4}>
            <p>Waktu Request </p>
            </Col>
           <Col sm={7} offset={0}> 
           <p> : 12 Agustus 2021</p>
           </Col>
          </Row>
          <Row style={{width:"500px"}}>
          <Col sm={4}>
            <p>Jenis Transaksi</p>
            </Col>
            <Col sm={8}> 
           <p>: Setoran Pinjaman </p>
           </Col>
           
          </Row>

          <Row style={{width:"500px"}}>
          <Col sm={4}>
            <p>Nominal Transaksi</p>
            </Col>
            <Col sm={8}> 
           <p> : Rp. 10.000.000 </p>
           </Col>
          </Row>

          <Row style={{width:"500px"}}>
          <Col sm={4}>
            <p>Alamat Agen</p>
            </Col>
            <Col sm={8}> 
           <p> : Jl. Banjaran no 181 </p>
           </Col>
          </Row>

          <Row style={{width:"500px"}}>
          <Col sm={4}>
              <p>Status</p>            
            </Col>
            <Col sm={8}>
              <p>: Menunggu Konfirmasi Agen</p>            
            </Col> 
          </Row>

           <div className="float-right">
            <Button type="submit" style={{backgroundColor:"red"}}>
                Batalkan
              </Button>
            </div>
        </Form> 
        </div>
    </div>

    
  );
}

export default Home;