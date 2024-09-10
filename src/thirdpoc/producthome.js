
// import React, { Fragment, useState } from "react";
// import { Prompt } from "react-router-dom";
// import classes from "./producthome.module.css";
// import axios from "axios";
// // import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom";
// // import certificate from "";


// const Producthome = (props) => {
//     const [isEntering, setIsEntering] = useState(false);
//     const [btnText, setBtnText] = useState("Submit");
//     const [isSent, setIsSent] = useState(false);
//     const [inputdata, setinputData] = useState({
//         description: "",
//         input1: ""
//     });
//     const [apidata, setapidata] = useState({});

//     const navigate = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(
//                 "https://api2-ai-showcase.antiersolutions.com/predict"
//                 ,
//                 inputdata
//             );
//             if (response) {
//                 console.log("api data ", response.data);
//                 // props.onDataReceive(response.data); // Pass data to parent
//                 localStorage.setItem("responseData", JSON.stringify(response.data));

//                 setapidata(response.data);

//                 setIsSent(true); // Indicate that the form has been submitted

//             }
//             // resetform();
//         } catch (error) {
//             // Enhanced error logging
//             console.error("Error during API request:", error);
//             console.error("Error response:", error.response ? error.response.data : "No response data");

//             if (error.response && error.response.status === 404) {
//                 console.error("Endpoint not found");
//             } else if (error.response && error.response.status === 500) {
//                 console.error("Server error on the backend");
//             } else {
//                 console.error("Other error:", error.message);
//             }
//         }
//     };

//     const resetform = () => {
//         setinputData({
//             description: "",
//             input1: ""
//         });
//     };

//     const formFocussedHandler = () => {
//         setIsEntering(true);
//     };

//     // const routechange = () => {
//     //     const path = '/';
//     //     navigate.push(path);
//     // }

//     const handleclear = () => {
//         resetform();
//         // setIsSent(false);
//         // props.onClear();
//     }


//     const clearform = () => {
//         setIsSent(false);
//     }

//     return (

//         <div className={classes.bodycolor}>
//             {/* <div> */}
//             {/* <Fragment> */}
//             <div>
//                 <Prompt
//                     when={isEntering}
//                     message={(location) =>
//                         "Are You Sure You Want To Leave? All your entered data will be lost!"
//                     }
//                 />
//                 <div className={classes.contactFormCard}>
//                     <form onFocus={formFocussedHandler} onSubmit={handleSubmit} className={classes.contactForm}>
//                         <h1 className={classes.heading}>Enter Details</h1>
//                         <div className={classes.Inputs}>
//                             <p className={classes.label}>Description</p>
//                             <input
//                                 type="text"
//                                 placeholder="Ex: iphone 15 pro"
//                                 className={classes.Input}
//                                 required
//                                 onChange={(e) =>
//                                     setinputData({
//                                         ...inputdata,
//                                         description: e.target.value
//                                     })
//                                 }
//                                 value={inputdata.description}
//                             />

//                         </div>

//                         <div className={classes.btnDiv}>
//                             <div className={classes.sendBtn}>
//                                 <button type="submit" disabled={isSent}>
//                                     Analyse
//                                 </button>
//                             </div>
//                             <div className={classes.sendBtn}>
//                                 <button type="reset" onClick={handleclear}>
//                                     Clear
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>



//                 {/* <div className={classes.hyundaibody} id='apt-container'> */}

//                 {isSent &&
//                     <div className={classes.contactFormCard}>

//                         <form onFocus={formFocussedHandler} className={classes.contactForm}>
//                             <div className={classes.Inputs}>
//                                 <p className={classes.label}>Sentiments</p>
//                                 <input
//                                     type="text"
//                                     className={classes.Input}
//                                     placeholder="Sentiments"
//                                 // value={topCategoryType}
//                                 />
//                             </div>
//                             <div className={classes.Inputs}>
//                                 <p className={classes.label}>Score</p>
//                                 <input
//                                     type="text"
//                                     className={classes.Input}
//                                     placeholder="Score"
//                                 // value={topArea}
//                                 />
//                             </div>
//                             <div className={classes.Inputs}>
//                                 <p className={classes.label}> Review</p>
//                                 <input
//                                     type="text"
//                                     className={classes.Input}
//                                     placeholder="Review"
//                                 // value={topSubArea}
//                                 />
//                             </div>
//                             <div className={classes.sendBtn}>
//                                 <button type="reset" onClick={() => clearform()}>
//                                     CLEAR
//                                 </button>
//                             </div>

//                         </form>


//                     </div>
//                 }


//             </div>

//             {/* </Fragment> */}
//         </div>
//     );
// };

// export default Producthome;



import React, { useState } from "react";
import { Prompt } from "react-router-dom";
import classes from "./producthome.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from '../components/homenavbar'

// import classes from "../data/formmaruti.module.css"; // Ensure correct path
import Footer from '../components/footer';
// import Navbar from './hyundaiNavbar';
import { ClipLoader, FadeLoader } from 'react-spinners';
// import {FadeLoader} from "react-spinners";

const Producthome = () => {
    const [isEntering, setIsEntering] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [inputData, setInputData] = useState({
        product: ""
    });
    const [error, setError] = useState(null);

    const [loading, setloading] = useState(null);


    const [apiData, setApiData] = useState(null);
    const navigate = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        //     const response = await axios.get(
        //         "http://192.168.10.68:5000/sentimentanalysis"
        //     );

        try {
            setloading(true);
            console.log("loading false");

            console.log("enter---------");
            // const response = await axios.post(
            //     "http://192.168.10.68:5000/sentimentanalysis",
            //     inputData,
            // );
            const response = await axios.post(
                "http://192.168.10.68:5000/sentimentanalysis",
                inputData
            );


            console.log("responsee data ", response);

            if (response) {
                console.log("API Data: ", response.data);
                localStorage.setItem("responseData", JSON.stringify(response.data));

                setApiData(response.data);

                setIsSent(true); // Show second form after submission
            }
            else {
                console.log("resphondcser dfdn d-----------------", response);
            }

        }
        catch (error) {
            console.error("Error during API request:", error);

            if (error.response) {
                const { status, data } = error.response;
                console.log("not found dtata check repdata", data.error);
                alert(data.error);
                console.log("not found dtata check rep", status);

                // console.error(
                //     status === 404
                //         ? "Endpoint not found"
                //         : status === 500
                //             ? "Server error on the backend"
                //             : data || "Unknown error"
                // );
            } else {
                console.error("No response from server:", error.message);
            }
        }
        finally {
            console.log("loading false");

            setloading(false);
        }
    };

    const resetForm = () => {
        setInputData({ product: "" });

        setIsSent(false); // Show submission form again
    };

    const formFocussedHandler = () => {
        setIsEntering(true);
    };

    // const override= {
    //     display: "block",
    //     margin: "0 auto",
    //     borderColor: "red",

    //   };

    const styles = {
        overlay: {
            position: 'fixed',   // Covers the entire screen
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            //   backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Faded background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,  // Ensures it appears above all other content
        }
    };

    if (loading) {
        return (
            <div style={styles.overlay}>
                <ClipLoader size={100} color={"#36D7B7"} loading={loading} />
            </div>
        );
    }

    return (
        <>
         {loading && (
         <div style={styles.overlay}>
         <ClipLoader size={80} color={"#36D7B7"} loading={loading} />
     </div>
      )}

           
            <div id="apt-container">

                <Navbar />
                <p id={"Appointment-sub-head"} >
                    Welcome to the AI/ML Product Analysis Demo
                </p>
                <div className="description-card">
                    <h2>Project Description</h2>
                    <p>
                        Developed a proof of concept for classifying Maruti's Voice of Customer feedback into subcategories of Area, Sub-Area, and Domain, improving the analysis and addressing customer concerns efficiently, used Gradiant Boosting and N-gram for classification.
                    </p>
                </div>

                <div className={classes.bodycolor}>


                    <Prompt
                        when={isEntering}
                        message="Are You Sure You Want To Leave? All your entered data will be lost!"
                    />
                    <div className={classes.formContainer}>
                        <div className={classes.contactFormCard}>
                            <form
                                onFocus={formFocussedHandler}
                                onSubmit={handleSubmit}
                                className={classes.contactForm}
                            >
                                <h1 className={classes.heading}>Enter Details</h1>
                                <div className={classes.Inputs}>
                                    <p className={classes.label}>Product Name</p>
                                    <input
                                        type="text"
                                        placeholder="Ex: iPhone 15 Pro"
                                        className={classes.Input}
                                        required
                                        onChange={(e) =>
                                            setInputData({ ...inputData, product: e.target.value })
                                        }
                                    // value={inputData.description}
                                    />
                                </div>
                                <div className={classes.btnDiv}>
                                    <button type="submit" className={classes.sendBtn}>
                                        Analyse
                                    </button>
                                    <button
                                        type="reset"
                                        onClick={resetForm}
                                        className={classes.sendBtn}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </div>

                        {(!loading && isSent) && (
                            <div className={classes.contactFormCard}>
                                <form className={classes.contactForm}>
                                    <h4 style={{ textAlign: 'center' }}>Records</h4>
                                    <div className={classes.Inputs}>
                                        <p className={classes.label}>Sentiments</p>
                                        <input
                                            type="text"
                                            className={classes.Input}
                                            placeholder="Sentiments"
                                            value={apiData.Product_Recommended || ""}
                                            readOnly
                                        />
                                    </div>
                                    <div className={classes.Inputs}>
                                        <p className={classes.label}>Score</p>
                                        <input
                                            type="text"
                                            className={classes.Input}
                                            placeholder="Score"
                                            value={apiData.Confidence_Score || ""}
                                            readOnly
                                        />
                                    </div>
                                    <div className={classes.Inputs}>
                                        <p className={classes.label}>Review</p>
                                        <input
                                            type="text"
                                            className={classes.Input}
                                            placeholder="Review"
                                            value={apiData.Review || ""}
                                            readOnly
                                        />
                                    </div>
                                    {/* <div className={classes.sendBtn}> */}
                                    <button
                                        type="reset"
                                        onClick={resetForm}
                                        className={classes.sendBtn}
                                    >
                                        Clear
                                    </button>
                                    {/* </div> */}
                                </form>
                            </div>
                        )}
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Producthome;
