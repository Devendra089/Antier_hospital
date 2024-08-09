


import React from "react";
import CertificatesData from "../data/CertificatesData";
import Navbar from "./homenavbar";
import Footer from "./footer";
import '../assets/css/home.css';

const HomePage = () => {
  const handleMouseEnter = (link) => {
    window.location.href = link;
  };



  return (
    <>
      <div id="apt-container">
        <Navbar />
        <div className="gradient-cards">
          {CertificatesData.certificationsList.map((certificate, index) => (
            <div
              className="card"
              key={index}
              onClick={() => handleMouseEnter(certificate.link)}
            >
              <div className="container-card">
                <div className="card-content">
                  <p className="card-title">{certificate.title}</p>
                  <p className="card-description">{certificate.instructor}

                  </p>

                  {/* <p
                    className="copy-text-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyText(certificate.instructor);
                    }}
                    style={{ color: 'hsla(0, 13%, 94%, 0.942)', textDecoration: 'underline' }} >
                    Copy Text
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
