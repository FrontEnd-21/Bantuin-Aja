import React from "react";
import "../Css/DataStyle.css";

const DataCompany = () => {
  return (
    <>
      <div className='section-bantuan'>
        <h3>Bantuan</h3>
        <span>See More..</span>
      </div>

      <section className='company'>
        <div className='main'>
          <img src='' alt='Gambar' className='img' />

          <div className='info'>
            <span>Title</span>
            <span>Date</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataCompany;
