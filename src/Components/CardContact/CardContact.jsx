import React from "react";
import mitra from "../../assets/IMAGE/mitra.svg";
import "../../assets/CSS/CardContact.css";

const CardContact = () => {
  return (
    <>
      <div className='mitra'>
        <h1>Ingin bergabung menjadi mitra kami?</h1>
        <button>Daftar</button>

        <div className='imgmitra'>
          <img src={mitra} alt='' />
        </div>
      </div>
    </>
  );
};

export default CardContact;
