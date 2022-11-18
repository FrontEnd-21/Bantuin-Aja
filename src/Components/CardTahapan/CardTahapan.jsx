import React from "react";
import "../../assets/CSS/CardTahapan.css";
import { FaSearch, FaFilePdf, FaRegClock, FaUserCheck } from "react-icons/fa";

const CardTahapan = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <h1 className='text-center'>Tahapan Mendapatkan Bantuan</h1>
          </div>
        </div>
      </div>

      <div className='container' id='tahapan'>
        <div className='row d-flex justify-content-center align-items-center text-center'>
          <div className='col'>
            {" "}
            <p className='txt'>
              <b>
                1
                <br />
                <FaSearch className='span' />
                <br />
              </b>{" "}
              Memilih Program
              <br />
              Yang Ada
            </p>
          </div>

          <div className='col '>
            <p className='txt'>
              <b>
                2
                <br />
                <FaFilePdf className='span' />
                <br />
              </b>{" "}
              Melengkapi Dokumen
              <br />
              Persyaratan
            </p>
          </div>

          <div className='col'>
            <p className='txt'>
              <b>
                3
                <br />
                <FaRegClock className='span' />
                <br />
              </b>{" "}
              Menunggu
              <br />
              Pengumuman
            </p>
          </div>

          <div className='col'>
            <p className='txt'>
              <b>
                4
                <br />
                <FaUserCheck className='span' />
                <br />
              </b>{" "}
              Bantuan
              <br />
              Siap Dikirim
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTahapan;
