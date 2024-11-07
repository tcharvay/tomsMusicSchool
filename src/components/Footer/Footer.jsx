import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <ul className="list">
        <li>
          <i className="fa-brands fa-youtube"></i>Youtube Channel
        </li>
        <li>
          <i className="fa-regular fa-envelope">
            <a className="mail-to" href="mailto:example@correo.com">
              Contact
            </a>
          </i>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
