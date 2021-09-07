import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const DataAlamat = [
  {
    name: "Jawa Barat",
    kabupaten: [
      {
        name: "Kota Bandung",
        kecamatan: ["Coblong", "Lengkong Gudang", "Buahbatu", "Ujung Berung", "Antapani"],
      },
      {
        name: "Bogor",
        kecamatan: ["Bojong Gede", "Ciawi", "Cibinong", "Cileungsi", "Cijeruk"],
      },
      {
        name: "Tasikmalaya",
        kecamatan: ["Bantarkalong", "Bojongasih", "Cibalong", "Cipatujah"],
      },
    ],
  },
  {
    name: "Jawa Tengah",
    kabupaten: [
      {
        name: "Grobogan",
        kecamatan: ["Brati", "Gabus", "Geyer", "Karangrayu", "Kradenan", "Purwodadi"],
      },
      {
        name: "Kudus",
        kecamatan: ["Jekulo", "Kaliwungu", "Kudus", "Mejobo", "Undaan"],
      },
      {
        name: "Pekalongan",
        kecamatan: ["Bojong", "Buaran", "Karangayar", "Kedungwungi", "Lebakbarang"],
      },
      {
        name: "Semarang",
        kecamatan: ["Ambarawa", "Bancak", "Bawen", "Banyubiru", "Bringin", "Getasan"],
      },
    ],
  },
  {
    name: "Jawa Timur",
    kabupaten: [
      {
        name: "Kota Surabaya",
        kecamatan: ["Gubeng", "Kenjeran", "Tambaksari", "Tandes", "Wonokromo"],
      },
      {
        name: "Kota Malang",
        kecamatan: ["Blimbingan", "Kedungkandang", "Lowokwaru", "Sukun"],
      },
      { name: "Kota Madiun", kecamatan: ["Kartoharjo", "Manguharjo", "Taman"] },
      { name: "Kota Kediri", kecamatan: ["Kediri", "Mojoroto", "Pesantren"] },
      {
        name: "Banyuwangi",
        kecamatan: ["Pesanggaran", "Purwoharjo", "Muncar", "Genteng", "Glenmore", "Rogojampi"],
      },
    ],
  },
  {
    name: "Bali",
    kabupaten: [
      {
        name: "Buleleng",
        kecamatan: ["Buleleng", "Gerokak", "Sawan", "Seririt", "Tejakula"],
      },
      {
        name: "Kota Denpasar",
        kecamatan: ["Denpasar Barat", "Denpasar Selatan", "Denpasar Timur", "Denpasar Utara"],
      },
      {
        name: "Gianyar",
        kecamatan: ["Blahbatu", "Giayar", "Payangan", "Sukawati", "Ubud"],
      },
      {
        name: "Jembrana",
        kecamatan: ["Jembrana", "Melaya", "Negara", "Pekutaan"],
      },
      {
        name: "Tabanan",
        kecamatan: ["Baturiti", "Kerambitan", "Selemadeng Barat", "Selemadeng Timur", "Tabanan"],
      },
    ],
  },
  {
    name: "Maluku",
    kabupaten: [
      {
        name: "Kota Ambon",
        kecamatan: ["Nusaniwe", "Sirimau", "Teluk Ambon", "Leitimur Selatan"],
      },
      {
        name: "Kota Tual",
        kecamatan: ["Pulau Dullah Utara", "Pulau Dullah Selatan", "Tayando Tam", "Pulau-Pulau Kur"],
      },
      {
        name: "Buru",
        kecamatan: ["Namlea", "Air Buaya", "Waeapo", "Waplau", "Lolong Guba"],
      },
      {
        name: "Kepulauan Aru",
        kecamatan: ["Aru Selatan", "Aru Tengah", "Aru Utara"],
      },
    ],
  },
];

const AlamatComponent = () => {
  const [selectedProvinsi, setSelectedProvinsi] = React.useState(null);
  const [selectedKabupaten, setSelectedKabupaten] = React.useState(null);
  const [selectedKecamatan, setSelectedKecamatan] = React.useState(null);

  const handleSelectedProvinsi = (event) => {
    setSelectedProvinsi(event.target.value);
    console.log("provinsi >> ", event.target.value);
  };

  const handleSelectedKabupaten = (event) => {
    setSelectedKabupaten(event.target.value);
    console.log("kabupaten >>", event.target.value);
  };

  const handleSelectedKecamatan = (event) => {
    setSelectedKecamatan(event.target.value);
    console.log("kecamatan >> ", event.target.value);
  };

  const dataKabupaten = React.useMemo(() => {
    return DataAlamat?.find((provinsi) => provinsi.name === selectedProvinsi)?.kabupaten || [];
  }, [selectedProvinsi]);

  const dataKecamatan = React.useMemo(() => {
    return dataKabupaten?.find((kabupaten) => kabupaten.name === selectedKabupaten)?.kecamatan || [];
  }, [selectedKabupaten, dataKabupaten]);

  return (
    <>
      <Form.Group as={Row} className="mb-3 center">
        <Form.Label column md={2}>
          Alamat Saat Ini
        </Form.Label>
        <Col md={2}>
          <Form.Select onChange={handleSelectedProvinsi}>
            <option disabled selected>
              Pilih Provinsi
            </option>
            {DataAlamat.map((provinsi, index) => (
              <option key={index.toString()} value={provinsi.name}>
                {provinsi.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select onChange={handleSelectedKabupaten}>
            <option disabled selected>
              Pilih Kabupaten
            </option>
            {dataKabupaten.map((kabupaten, index) => (
              <option key={index.toString()} value={kabupaten.name}>
                {kabupaten.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select onChange={handleSelectedKecamatan}>
            <option disabled selected>
              Pilih Kecamatan
            </option>
            {dataKecamatan.map((kecamatan, index) => (
              <option key={index.toString()} value={kecamatan}>
                {kecamatan}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 center">
        <Form.Label column md={2}></Form.Label>
        <Col md={6}>
          <Form.Control placeholder="Alamat Lengkap" />
        </Col>
      </Form.Group>
    </>
  );
};

export default AlamatComponent;
