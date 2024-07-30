

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

const One = (props) => {
    const [isEntering, setIsEntering] = useState(false);
    const [btnText, setBtnText] = useState("Submit");
    const [isSent, setIsSent] = useState(false);
    const [inputdata, setinputData] = useState({
        description: "",
        input1: ""
    });

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
            resetform();
        } catch (error) {
            console.error("Some error occurred while making appointment", error);
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

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) =>
                    "Are You Sure You Want To Leave? All your entered data will be lost!"
                }
            />
            <h1 style={{color: 'black'}}>Enter Details</h1>
            <div className={classes.contactFormCard}>
                <form onFocus={formFocussedHandler} onSubmit={handleSubmit} className={classes.contactForm}>
                    <label>
                        <textarea
                            className={classes.Inputs}
                            name="Description"
                            placeholder="Description"
                            onChange={(e) =>
                                setinputData({
                                    ...inputdata,
                                    description: e.target.value
                                })
                            }
                            value={inputdata.description}
                        />
                    </label>
                    <label>
                        <input
                            type="text"
                            className={classes.Inputs}
                            placeholder="RO Remarks"
                            disabled={isSent}
                            onChange={(e) =>
                                setinputData({
                                    ...inputdata,
                                    input1: e.target.value
                                })
                            }
                            value={inputdata.input1}
                        />
                    </label>
                    <div className="btndiv" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', marginTop: '20px' , marginLeft:'10px'}}>
                        <div className="sendBtn">
                            <button type="reset" onClick={resetform}>
                                Clear
                            </button>
                        </div>
                        <div className="sendBtn">
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
