import React from "react";
import Footer from "./footer";
import CertificatesData from "../data/CertificatesData"; // Import data file
import classes from "../assets/css/certificateCard.module.css";

const HomePage = () => {
   console.log(CertificatesData);
  return (
    <React.Fragment>
      <div  style={{ background: 'linear-gradient(to right, #1cb5e0, #000046)', }}>
      <h1  style={{color:'white'}}> Company's Work  </h1>
        <div className={classes.certificateCard}>
          {CertificatesData.certificationsList.map((certificate, index) => (
            <div className={classes.certificate} >
            <div className={classes.Overlay}>
                <div className={classes.overlayLink}>
                    <a href={certificate.link} style={{color:'cyan'}} id='overlay-text' target="_blank noreferrer">
                        Click Here
                    </a>
                </div>
            </div>
            <div className={classes.certBody}>
                <div className={`${classes.certImage}`} >
                    <img className={`${classes.img}`} src={certificate.image.imglogo} alt="Certificate Image" />
                </div>
                <div className={classes.certInfo}>
                    <h1 className={classes.certInfo }>{certificate.title}</h1>
                    <h2 className={classes. certInfo}>{certificate.instructor}</h2>
                </div>
            </div>
        </div>
          ))}
        </div>
      </div>
     
    </React.Fragment>
  );
};

export default HomePage;
