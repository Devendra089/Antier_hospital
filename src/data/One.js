

// import React, { Fragment, useState } from "react";
// import { Prompt } from "react-router-dom";
// import classes from "./one.module.css";
// import Button from "../ui/ButtonUi";
// import axios from "axios";

// const One = (props) => {
//   const [isEntering, setIsEntering] = useState(false);
//   const [btnText, setBtnText] = useState("Submit");
//   const [isSent, setIsSent] = useState(false);

//   const [inputdata, setinputData] = useState({
//     description: "",
//     input1: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://api2-ai-showcase.antiersolutions.com/predict",
//         inputdata
//       );
//       if (response) {
//         props.onDataReceive(response.data);
//         localStorage.setItem("responseData", JSON.stringify(response.data));
//         console.log("response", response.data);
//       }
//       resetform();
//     } catch (error) {
//       console.error("Some error occurred while making appointment", error);
//     }
//   };

//   const resetform = () => {
//     setinputData({
//       description: "",
//       input1: ""
//     });
//   };

//   const formFocussedHandler = () => {
//     setIsEntering(true);
//   };

//   const nameInputClasses = classes.Inputs;
//   const messageInputClasses = classes.Inputs;

//   return (
//     <Fragment>
//       <Prompt
//         when={isEntering}
//         message={(location) =>
//           "Are You Sure You Want To Leave? All your entered data will be lost!"
//         }
//       />
//       <h1 style={{color: 'white'}}>Enter Details</h1>
//       <div className={classes.contactFormCard}>

//         <form onFocus={formFocussedHandler} onSubmit={handleSubmit} className={classes.contactForm}>
//           <label>
//             <textarea
//               className={messageInputClasses}
//               name="Description"
//               placeholder="Description"
//               onChange={(e) =>
//                 setinputData({
//                   ...inputdata,
//                   description: e.target.value
//                 })
//               }
//               value={inputdata.description}
//             />
//           </label>
//           <label>
//             <input
//               type="text"
//               className={nameInputClasses}
//               placeholder="RO Remarks"
//               disabled={isSent}
//               onChange={(e) =>
//                 setinputData({
//                   ...inputdata,
//                   input1: e.target.value
//                 })
//               }
//               value={inputdata.input1}
//             />

//           </label>

//           <div className="btndiv" style={{display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   gap: '16px', marginTop: '20px' , marginLeft:'10px'}}>
//             <div className="sendBtn">
//               <button type="reset" onClick={resetform}>
//                 Clear
//               </button>
//             </div>
//             <div className="sendBtn">
//               <button type="submit" disabled={isSent}>
//                 {btnText}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </Fragment>
//   );
// };

// export default One;


import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";
import classes from "./one.module.css";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import certificate from "./CertificatesData";


const One = (props) => {
    const [isEntering, setIsEntering] = useState(false);
    const [btnText, setBtnText] = useState("Submit");
    const [isSent, setIsSent] = useState(false);
    const [inputdata, setinputData] = useState({
        description: "",
        input1: ""
    });

    const navigate = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://api2-ai-showcase.antiersolutions.com/predict",
                inputdata
            );
            if (response) {
                props.onDataReceive(response.data); // Pass data to parent
                localStorage.setItem("responseData", JSON.stringify(response.data));
                setIsSent(true); // Indicate that the form has been submitted
            }
            // resetform();
        } catch (error) {
            console.error("Some error occurred while making prediction", error);
        }
    };

    const resetform = () => {
        setinputData({
            description: "",
            input1: ""
        });
    };

    const formFocussedHandler = () => {
        setIsEntering(true);
    };

    // const routechange = () => {
    //     const path = '/';
    //     navigate.push(path);
    // }

    const handleclear = () => {
        resetform();
        setIsSent(false);
        props.onClear();
    }


    const handleCopyText = (text) => {
        
            alert("Text copied to clipboard!");
        
            // console.error("Failed to copy text: ");
       
    };

    const example1 = "1.customer complaint that he went to workshop for front wind shield glass replacement 2. as per voc workshop told that part is not available from hyundai and there is no update about part availability ";
    const example2 = "vehicle pickup, work under process. inform to cust. : Windshield replacement in insurance under process "

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    "Are You Sure You Want To Leave? All your entered data will be lost!"
                }
            />
            <h1 className={classes.heading}>Enter Details</h1>
            <div className={classes.contactFormCard}>
                <form onFocus={formFocussedHandler} onSubmit={handleSubmit} className={classes.contactForm}>
                    <div className={classes.Inputs}>
                        <p className={classes.label}>Description</p>
                        <input
                            type="text"
                            // placeholder="Description"
                            className={classes.Input}
                            required
                            onChange={(e) =>
                                setinputData({
                                    ...inputdata,
                                    description: e.target.value
                                })
                            }
                            value={inputdata.description}
                        />
                        <p className={classes.example}>Example: {example1} 
                        <span className="copy-text-button"
                            onClick={(e) => {
                                // e.stopPropagation();
                                handleCopyText(example1);
                            }}
                            style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }} >
                            Copy Text
                        </span>
                        </p>
                    </div>
                    <div className={classes.Inputs}>
                        <p className={classes.label}>Regional Officer Remarks</p>
                        <input
                            type="text"
                            // placeholder="Regional Officer (RO) remarks"
                            className={classes.Input}
                            required
                            onChange={(e) =>
                                setinputData({
                                    ...inputdata,
                                    input1: e.target.value
                                })
                            }
                            value={inputdata.input1}
                        />
                        <p className={classes.example} >Example: {example2}
                        <span className="copy-text-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCopyText(example2);
                            }}
                            style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }} >
                            Copy Text
                        </span>
                        </p>
                    </div>
                    <div className={classes.btnDiv}>
                        <div className={classes.sendBtn}>
                            <button type="reset" onClick={handleclear}>
                                Clear
                            </button>
                        </div>
                        <div className={classes.sendBtn}>
                            <button type="submit" disabled={isSent}>
                                {btnText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default One;
