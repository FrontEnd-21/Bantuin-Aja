import React from "react";
import "../Css/CardBerita.css";
import { SlCalender } from "react-icons/sl";
import { AiOutlineLink } from "react-icons/ai";

const CardBerita = () => {
  return (
    <>
      <div className='Information'>
        <div className='Berita'>
          <h3>Information</h3>
          <p>
            Sosialisasi bantuan melalui website bantuin.aja serta pengenalan
            mitra baru pada program bantuan pada tahun 2022 melalui platform
            zoom.
          </p>

          <p className='txt'>
            <SlCalender />
            <span>Jumat, 30 Desember 2022</span>
          </p>
          <p className='txt'>
            <AiOutlineLink />
            <span>https://bit.ly/BantuinAja</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CardBerita;
