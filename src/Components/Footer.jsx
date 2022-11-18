import React from "react";
import "../assets/CSS/Footer.css";
import logo from "../assets/IMAGE/logo.svg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

function Footer() {
  return (
    <div>
      <footer>
        <div className='content'>
          <div className='logo'>
            <img id='logo' src={logo} alt='' />
          </div>
          <div className='address'>
            <h3>
              Bantuin.Aja Part of PT.IMPACTBYTE <br />
              TEKNOLOGI EDUKASI
            </h3>
            <p>
              Jl. Kemang Raya No.10m Bangka, Mampang Prapatan,
              <br />
              Jakarta Selatan 123730m DKI Jakarta 123730, Indonesia
            </p>
          </div>
          <div className='socmed'>
            <ul>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <BiMailSend />
              </li>
              <li>
                <FaFacebook />
              </li>
            </ul>
          </div>
        </div>
        <p>@Copyright 2022 by Bantuin.aja Skilvull</p>
      </footer>
    </div>
  );
}

export default Footer;
