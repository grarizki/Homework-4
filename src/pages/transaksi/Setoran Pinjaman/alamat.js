import React from 'react';
import { Form, Col, Row, Button } from "react-bootstrap";

class Alamat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			provinsi : [],
			kabupaten : [],
			kecamatan : [],
			selectedProvinsi : 'Provinsi',
			selectedKabupaten : 'Kabupaten'
		};
		this.changeProvinsi = this.changeProvinsi.bind(this);
		this.changeKabupaten = this.changeKabupaten.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			provinsi : [
				{ name: 'Jawa Barat', kabupaten: [ {name: 'Kota Bandung', kecamatan: ['Coblong', 'Lengkong Gudang', 'Buahbatu', 'Ujung Berung',"Antapani"]},
                                                    {name: 'Bogor', kecamatan: ['Bojong Gede', 'Ciawi', 'Cibinong', "Cileungsi","Cijeruk"]},
                                                    {name: 'Tasikmalaya', kecamatan: ['Bantarkalong', 'Bojongasih', 'Cibalong',"Cipatujah"]}] },
				{ name: 'Jawa Tengah', kabupaten: [ {name: 'Grobogan', kecamatan: ['Brati', 'Gabus','Geyer', 'Karangrayu','Kradenan', 'Purwodadi']},
                                                    {name: 'Kudus', kecamatan: ['Jekulo', 'Kaliwungu', 'Kudus','Mejobo', 'Undaan']},
                                                    {name: 'Pekalongan', kecamatan: ['Bojong','Buaran','Karangayar', 'Kedungwungi','Lebakbarang']},
                                                    {name: 'Semarang', kecamatan: ['Ambarawa', 'Bancak','Bawen', "Banyubiru",'Bringin', 'Getasan']}] },
				{ name: 'Jawa Timur', kabupaten: [ {name: 'Kota Surabaya', kecamatan: ['Gubeng','Kenjeran','Tambaksari','Tandes','Wonokromo' ]},
                                                    {name: 'Kota Malang', kecamatan: ['Blimbingan','Kedungkandang','Lowokwaru','Sukun']},
                                                    {name: 'Kota Madiun', kecamatan: ['Kartoharjo','Manguharjo','Taman']},
                                                    {name: 'Kota Kediri', kecamatan: ['Kediri','Mojoroto','Pesantren']},
                                                    {name: 'Banyuwangi', kecamatan: ['Pesanggaran','Purwoharjo', 'Muncar', 'Genteng', 'Glenmore','Rogojampi']} ] },
				{ name: 'Bali', kabupaten: [ {name: 'Buleleng', kecamatan: ['Buleleng','Gerokak','Sawan','Seririt','Tejakula']},
                                            {name: 'Kota Denpasar', kecamatan: ['Denpasar Barat','Denpasar Selatan','Denpasar Timur','Denpasar Utara']},
                                            {name: 'Gianyar', kecamatan: ['Blahbatu','Giayar','Payangan','Sukawati','Ubud']},
                                            {name: 'Jembrana', kecamatan: ['Jembrana','Melaya','Negara','Pekutaan']},
                                            {name: 'Tabanan', kecamatan: ['Baturiti','Kerambitan','Selemadeng Barat', 'Selemadeng Timur', 'Tabanan']} ] },
				{ name: 'Maluku', kabupaten: [ {name: 'Kota Ambon', kecamatan: ['Nusaniwe','Sirimau','Teluk Ambon','Leitimur Selatan']},
                                                {name: 'Kota Tual', kecamatan: ['Pulau Dullah Utara','Pulau Dullah Selatan','Tayando Tam', 'Pulau-Pulau Kur']},
                                                {name: 'Buru', kecamatan: ['Namlea', 'Air Buaya', 'Waeapo','Waplau','Lolong Guba']},
                                                {name: 'Kepulauan Aru', kecamatan: ['Aru Selatan','Aru Tengah', 'Aru Utara']}] }
			]
		});
	}
  
	changeProvinsi(event) {
		this.setState({selectedProvinsi: event.target.value});
		this.setState({kabupaten : this.state.provinsi.find(prov => prov.name === event.target.value).kabupaten});
	}

	changeKabupaten(event) {
		this.setState({selectedKabupaten: event.target.value});
		const stats = this.state.provinsi.find(prov => prov.name === this.state.selectedProvinsi).kabupaten;
		this.setState({kecamatan : stats.find(kbptn => kbptn.name === event.target.value).kecamatan});
	}
	
	render() {
		return (
			<div>
				<Row>
                    <Col xs={3} style={{paddingTop:"7px", fontSize:"16px"}}>
                        <p> Alamat Saat Ini*</p>
                    </Col>
                    <Col style={{paddingTop:"7px"}}>
                        <p>:</p>
                    </Col>               
                    <Col xs={8}>
						<Row>
							<Col md="4">
								<Form.Select className="me-sm-2" id="inlineFormCustomSelect" placeholder="Provinsi" style={{fontSize:"13px"}} value={this.state.selectedProvinsi} onChange={this.changeProvinsi}>
									<option value="0">Provinsi</option>
									{this.state.provinsi.map((e, key) => {
									return <option key={key}>{e.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col  md="4">
								<Form.Select className="me-sm-2" id="inlineFormCustomSelect" placeholder="Kabupaten" style={{fontSize:"13px"}} value={this.state.selectedKabupaten} onChange={this.changeKabupaten}>
									<option value="0">Kabupaten</option>
									{this.state.kabupaten.map((e, key) => {
									return <option key={key}>{e.name}</option>;
									})}
								</Form.Select>
							</Col>
							<Col  md="4">
								<Form.Select className="me-sm-2" id="inlineFormCustomSelect" placeholder="Kecamatan" style={{fontSize:"13px"}}>
									<option value="0">Kecamatan</option>
									{this.state.kecamatan.map((e, key) => {
									return <option key={key}>{e}</option>;
									})}
								</Form.Select>
							</Col>
						</Row>        		
                    	<Col className ="alamat" style={{marginTop:"10px"}}>
                        	<Form.Control type="text" placeholder="Alamat Lengkap" />
                    	</Col>                                  
               		</Col>
                </Row>
 
			</div>
		)
	}
}

export default Alamat;