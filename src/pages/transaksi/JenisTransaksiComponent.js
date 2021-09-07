import { Col, Row, Form } from "react-bootstrap";

const JenisTransaksi = [
  {
    key: "laku-pandai",
    value: "disabled",
    label: "Laku Pandai",
    isDisabled: true,
  },
  {
    key: "cash-in-out",
    value: "cash-in-&-out",
    label: "Cash-in & Out",
    isDisabled: false,
  },
  {
    key: "report",
    value: "report",
    label: "Report",
    isDisabled: false,
  },
  {
    key: "setoran-uang",
    value: "setoran-uang",
    label: "Setoran Uang",
    isDisabled: false,
  },
  {
    key: "tarik-tunai",
    value: "tarik-tunai",
    label: "Tarik Tunai",
    isDisabled: false,
  },
  {
    key: "isi-ulang-pulsa",
    value: "isi-ulang-pulsa",
    label: "Isi Ulang Pulsa",
    isDisabled: false,
  },
  {
    key: "belanja-merchant",
    value: "belanja-merchant",
    label: "Belanja Merchant",
    isDisabled: false,
  },
  {
    key: "tunai",
    value: "disabled",
    label: "Tunai",
    isDisabled: true,
  },
  {
    key: "setoran-pinjaman",
    value: "setoran-pinjaman",
    label: "Setoran Pinjaman",
    isDisabled: false,
  },
  {
    key: "setoran-simpanan",
    value: "setoran-simpanan",
    label: "Setoran Simpanan",
    isDisabled: false,
  },
  {
    key: "tarik-tunai-2",
    value: "tarik-tunai-2",
    label: "Tarik Tunai",
    isDisabled: false,
  },
  {
    key: "mini-atm-bri",
    value: "mini-atm-bri",
    label: "Mini ATM BRI",
    isDisabled: true,
  },
  {
    key: "registrasi-mobile-banking",
    value: "registrasi-mobile-banking",
    label: "Registrasi Mobile Banking",
    isDisabled: false,
  },
  {
    key: "registrasi-internet-banking",
    value: "registrasi-internet-banking",
    label: "Registrasi Internet Banking",
    isDisabled: false,
  },
  {
    key: "informasi-rekening",
    value: "informasi-rekening",
    label: "Informasi Rekening",
    isDisabled: false,
  },
  {
    key: "transfer-pembayaran",
    value: "transfer-pembayaran",
    label: "Transfer Pembayaran",
    isDisabled: false,
  },
  {
    key: "isi-ulang-pulsa-2",
    value: "isi-ulang-pulsa-2",
    label: "Isi Ulang Pulsa",
    isDisabled: false,
  },
  {
    key: "setor-pasti",
    value: "setor-pasti",
    label: "Setor Pasti",
    isDisabled: false,
  },
];

const JenisTransaksiComponent = () => {
  return (
    <Form.Group as={Row} className="mb-3 center">
      <Form.Label column md={2}>
        Jenis Transaksi
      </Form.Label>
      <Col md={6}>
        <Form.Select
          onChange={(event) => {
            console.log("value >> ", event.target.value);
          }}
        >
          <option disabled selected>
            Pilih Jenis Transaksi
          </option>
          {JenisTransaksi.map((option) => (
            <option key={option.key} value={option.value} disabled={option.isDisabled}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Form.Group>
  );
};

export default JenisTransaksiComponent;
