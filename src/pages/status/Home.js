import React from 'react';
import { Form, Col, Row, Button} from 'react-bootstrap';
import'./Home.css'

class Time extends React.Component {
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


  return (  
    
    
    <div className="outer">
      <div className="Status">
        <p>Transaksi Saat Ini:</p>
      </div>
      <div className="inner">
        <Form>
          <Row className = "Row">
              <div className="Lable1">
                <p>Waktu request </p>            
              </div>
              <div className='value'>
                <p>: </p>            
              </div> 
              <div className='value'>
                <p> <Time/></p>            
              </div>                         
          </Row>
          <Row className = "Row">
            <div className="Lable2">
              <p>Jenis Transaksi</p>            
            </div>
            <div className='value'> 
              <p>: Setoran Pinjaman</p>            
            </div> 
          </Row>
          <Row className = "Row">
            <div className="Lable3">
              <p> Nominal Transaksi</p>            
            </div>
            <div className='value'>
              <p>: Rp. 10.000.000</p>            
            </div> 
          </Row>
          <Row className = "Row">
            <div className="Lable4">
              <p>Alamat Anda</p>            
            </div>
            <div className='value'>
              <p>: Jalan Kamasan No 20</p>            
            </div> 
          </Row>
          <Row className = "Row">
            <div className="Lable5">
              <p>Agen BRILink</p>            
            </div>
            <div className='value'>
              <p>: Asep The World</p>            
            </div> 
          </Row>
          <Row className = "Row">
            <div className="Lable6">
              <p>Alamat Agen</p>            
            </div>
            <div className='value'>
              <p>: Jl. Banjaran no 181</p>            
            </div> 
          </Row>
          <Row className = "Row">
            <div className="Lable7">
              <p>Status</p>            
            </div>
            <div className='value'>
              <p>: Menunggu Konfirmasi Agen</p>            
            </div> 
          </Row>
          <Row className = "Row">
            <div className = "Batalkan" >
              <Button type="submit" className="mb-2">
                Batalkan
              </Button>
            </div>

          </Row>
        </Form>



         

        </div>
    </div>

    
  );
}

export default Home;