import React from "react";
import bantuan from "../../assets/IMAGE/bantuan2.jpg";
import NUS from "../../assets/IMAGE/NUS.svg";
import "../../assets/CSS/CardBantuan.css";

// Bootstrap
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";

// ICONS
import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineTimelapse } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io";

const CardBantuan = () => {
  return (
    <>
      <Card className='Container'>
        <Card.Body className='body'>
          <Breadcrumb>
            <Breadcrumb.Item href='/Bantuan'>
              <FaChevronLeft />
              Kembali
            </Breadcrumb.Item>
          </Breadcrumb>
          <Card.Title className='title'>
            Bantuan Pedidikan Jenjang S1
          </Card.Title>
          <Card.Subtitle className='text'>Pendidikan</Card.Subtitle>
          <Card.Text className='text2'>
            <MdOutlineTimelapse />
            12 Desember 2022
          </Card.Text>
          <Button className='btn'>Apply</Button>

          <Card.Img variant='right' src={bantuan} className='bimg' />
          <Card.Text className='btxt'>
            Offered BY
            <Card.Img variant='right' src={NUS} className='bob' />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='Container2'>
        <Card.Body>
          <Card.Title>
            <strong>Deskripsi Bantuan</strong>
          </Card.Title>
          <Card.Text>
            Bantuan pendidikan jenjang S1 Merupakan program bantuan yang
            diadakan oleh NUS University adapun bantuan yang diberikan berupa :
            <ul>
              <li>SPP dan Uang Gedung Gratis Selama Perkuliahan</li>
              <li>Bantuan Uang Saku Rp 4.000.000/Semester</li>
              <li>Bantuan Dana Buku Sebesar Rp 500.000</li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card.Body className='body2'>
          <Card.Title>
            <strong>Persyaratan bantuan</strong>
          </Card.Title>
          <Card.Text>
            <ol>
              <li>KTP</li>
              <li>Rapor SMA (Sudah Legalitas) </li>
              <li>TOEFL</li>
              <li>Surat Keterangan Sehat</li>
              <li>SKTM</li>
            </ol>
          </Card.Text>

          <Card.Text>
            <strong>*Point 1-4 Dijadikan satu File dan berbentuk ZIP</strong>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Title>Tahapan Bantuan</Card.Title>
        <Card.Body>
          <IoDocumentTextOutline />
          <Card.Text>Melengkapi Dokumen</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardBantuan;
