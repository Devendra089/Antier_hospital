// // import React from "react";
// // import CertificatesData from "../data/CertificatesData"; // Import data file
// // import classes from "../assets/css/certificateCard.module.css";
// // import homeImage from "../assets/imgs/network-6731186_1280.jpg";
// // // import Navbar from "./homeNavbar";
// // import logo from "../assets/imgs/image-removebg-preview.png"; // Adjust path to your logo image
// // import Footer from "./footer";

// // const HomePage = () => {
// //   console.log(CertificatesData);
// //   return (
// //     <diV>
// //       <div className="nav-container">
// //         <a href={"/home"}>
// //           <img src={logo} alt="Health Insurance" className="homelogo" style={{ marginLeft: '10px', marginTop: '10px', width: '10%' }} />
// //         </a>

// //         <ul className={"nav-links"} style={{ float: 'right', margin: '0', padding: '0' }}>
// //           <li style={{ display: 'inline-block', marginRight: '10px' }}>
// //             <a href={"/"} style={{ color: '#fff', textDecoration: 'none' }}>home</a>
// //           </li>
// //         </ul>

// //         <div className="home">
// //           {/* <Navbar /> */}
// //           <img className="homeimage" src={homeImage} alt="Home" />
// //         </div>

// //         <div style={{ background: 'linear-gradient(to right, #1cb5e0, #000046)' }}>
// //           <h1 style={{ color: 'white' }}> Company's Project </h1>
// //           <div className={classes.certificateCard}>
// //             {CertificatesData.certificationsList.map((certificate, index) => (
// //               <div className={classes.certificate} key={index}>
// //                 <div className={classes.Overlay}>
// //                   <div className={classes.overlayLink}>
// //                     <a
// //                       href={certificate.link}
// //                       style={{ color: 'cyan' }}
// //                       id='overlay-text'
// //                       target="_blank"
// //                       rel="noreferrer"
// //                     >
// //                       Click Here
// //                     </a>
// //                   </div>
// //                 </div>
// //                 <div className={classes.certBody}>
// //                   <div className={`${classes.certImage}`} >
// //                     <img className={`${classes.img}`} src={certificate.image} alt="" />
// //                   </div>
// //                   <div className={classes.certInfo}>
// //                     <h1 className={classes.certInfo}>{certificate.title}</h1>
// //                     <h2 className={classes.certInfo}>{certificate.instructor}</h2>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //       <div>

// //         <Footer />
// //       </div>
// //     </diV>
// //   );
// // };

// // export default HomePage;

// import React from "react";
// // import React from "react-router-dom";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

// import CertificatesData from "../data/CertificatesData"; // Import data file
// import classes from "../assets/css/certificateCard.module.css";
// import homeImage from "../assets/imgs/rm373batch2-04.jpg";
// import Navbar from "./homenavbar";
// import logo from "../assets/imgs/image-removebg-preview.png"; // Adjust path to your logo image
// import Footer from "./footer";
// import '../assets/css/home.css';

// const HomePage = () => {
//   return (
//     <div style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', minHeight: '100vh' }}>
//       <div className="container">
//         <Navbar />
//         <div className="gradient-cards">
//           {CertificatesData.certificationsList.map((certificate, index) => (
//             <div className="card" key={index}>
//               <div className="container-card">
//                 {/* <div className="card-content"> */}
//                   <div className="title-and-link">
//                     <p className="card-title">{certificate.title}</p>
//                     <Link
//                       to={certificate.link}
//                       style={{ color: 'cyan' }}
//                       id='overlay-text'
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       Click Here
//                     </Link>
//                   </div>
//                   <p className="card-description">{certificate.instructor}</p>
//                 {/* </div> */}

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;


// import React from "react";
// import { Link } from "react-router-dom"; // Use the correct import path for Link

// import CertificatesData from "../data/CertificatesData"; // Import data file
// // import classes from "../assets/css/certificateCard.module.css";
// import homeImage from "../assets/imgs/rm373batch2-04.jpg";
// import Navbar from "./homenavbar";
// import logo from "../assets/imgs/image-removebg-preview.png"; // Adjust path to your logo image
// import Footer from "./footer";
// import '../assets/css/home.css';

// const HomePage = () => {
//   return (
//     // <div style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', minHeight: '100vh' }}>
//     // <div id="apt-container">
//     <>
//       <div id="apt-container">
//         <Navbar/>
//         <div className="gradient-cards">
//           {CertificatesData.certificationsList.map((certificate, index) => (
//             <div className="card" key={index}>
//               <div className="container-card">
//                 <div className="title-and-link">
//                   <p className="card-title">{certificate.title}</p>
//                   {/* Use a button instead of a link to handle actions within the same page */}
//                   <button
//                     onClick={() => {
//                       // Open the certificate link in a new tab or handle it differently
//                       window.location.href = certificate.link;
//                     }}
//                     style={{ color: 'cyan', border: 'none', background: 'none', cursor: 'pointer' }}
//                     id='overlay-text'
//                   >
//                     Click Here
//                   </button>
//                 </div>
//                 <p className="card-description">{certificate.instructor}</p>
//               </div>
//             </div>
//           ))}
//         {/* </div> */}
//       {/* </div> */}
//       </div>
//     </div>
//       <Footer/>
//     </>
//   );
// };

// export default HomePage;



import React from "react";
import CertificatesData from "../data/CertificatesData";
import Navbar from "./homenavbar";
import Footer from "./footer";
import '../assets/css/home.css';

const HomePage = () => {
  const handleMouseEnter = (link) => {
    window.location.href = link;
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  return (
    <>
    <div id="apt-container">
      <Navbar/>
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

                <p
                      className="copy-text-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopyText(certificate.instructor);
                      }}
                    style={{color: 'hsla(0, 13%, 94%, 0.942)' , textDecoration:'underline' }} >
                      Copy Text
                    </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer/>
     </>
  );
};

export default HomePage;
