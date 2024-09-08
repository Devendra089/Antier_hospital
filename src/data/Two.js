








// import React, { Fragment, useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";

// import classes from "./two.module.css";
// // import classes from "./one.module.css";
// import Button from "../ui/ButtonUi";
// import useInput from "../hooks/useinputs";
// // import { useSelector } from "react-redux";

// const Two = (props) => {

//     const {apiData} = props;

//     const [isEntering, setIsEntering] = useState(false);

//     const { value: enteredName,
//         hasError: nameInputHasError,
//         isValid: enteredNameIsValid,
//         valueChangeHandler: nameChangedHandler,
//         inputBlurHandler: nameBlurHandler,
//     } = useInput(value => value.trim() !== '');

//     let formIsValid = false;

   

//     const [btnText, setBtnText] = useState('Flag');
//     // const [clear, setclear] = useState('Clear');


//     const [isSent, setIsSent] = useState(false);
    
     
//     const nameInputClasses = nameInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
//     const formClasses = isSent ? `${classes.contactForm} ${classes.sent}` : classes.contactForm;
    
    





//  const [responseData, setResponseData] = useState(null); // State to hold API response data
//     // const [loading, setLoading] = useState(true); // State to track loading state

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Replace with your API endpoint
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 const data = await response.json();
//                 // console.log(response);
//                 setResponseData(data);
//                 // setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 // setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);


//     const topCategoryType = apiData ? apiData['topCategoryType'] : '';
//     const topArea = apiData ? apiData['topArea'] : '';
//     const topSubArea = apiData ? apiData['topSubArea'] : '';
//     const secondaryCategoryTypes = apiData ? apiData['secondryCategoryTypes'] : '';
//     const secondaryAreas = apiData ? apiData['secondryAreas'] : '';
//     const secondarySubAreas = apiData ? apiData['secondrySubAreas'] : '';



//     const data = localStorage.getItem("responseData");
//     const x = JSON.parse(data);
//     // console.log("object11121",x);


//     return (
//         <Fragment>
//             <Prompt when={isEntering} message={(location) =>
//                 'Are You Sure You Want To Leave ? All your entered data will be lost!'}
//             />

//             <div className={classes.contactFormCard}>
//                 {/* <h1 style={{ color: nonThemeColor }}>Leave A Message</h1> */}
//                 <form 
//                 // onFocus={formFocussedHandler} 
//                 action="" 
//                 // onSubmit={formSubmitHandler} 
//                 className={formClasses}>
              
//               <label>
//                     <input 
                 
                    
//                         type="text"
//                         className={nameInputClasses}
//                         placeholder="Top Category Type"
//                         disabled={isSent}
//                         value={topCategoryType}
//                     /> 
//                     </label>
//                     <label>
//                     <input 
                
//                         type="text"
//                         className={nameInputClasses}
//                         placeholder="Top Area"
//                         disabled={isSent}
//                         value={topArea}
//                     />
//                     </label>
//                     <label>
//                     <input
//                         type="text"
//                         className={nameInputClasses}
//                         placeholder="Top Sub Area"
//                         disabled={isSent}
//                         value={topSubArea}
//                     />
//                     </label>
//                     <label>
//                     <input                        
//                         type="text"
//                         className={nameInputClasses}
//                         placeholder="Secondary Category Types"
//                         disabled={isSent}
//                         value={secondaryCategoryTypes}
//                     />
//                     </label>
//                     <label>
//                     <input 
                   
                        
//                         type="text"
//                         className={nameInputClasses}
//                         placeholder="Secondary Areas"
//                         disabled={isSent}
//                         value={secondaryAreas}
//                     />
//                     </label>
//                     <label>
//                     <input 
                    
                        
//                         type="text"
//                         className={nameInputClasses}
//                         placeholder="Secondary Sub Areas"
//                         disabled={isSent}
//                         value={secondarySubAreas}
//                     />
//                     </label>

//                     <br />
                    
//                     <div className={classes.sendBtn}>
//                         {/* <Button disabled={!formIsValid || isSent}>{btnText}</Button> */}
//                     </div>

//                 </form>
//             </div>
//         </Fragment>
//     )
// };

// export default Two;





// import React, { Fragment, useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";
// import classes from "./two.module.css";
// import useInput from "../hooks/useinputs";

// const Two = (props) => {
//     const { apiData } = props;
//     const [isEntering, setIsEntering] = useState(false);
//     console.log("after submit" +props);
//     const { value: enteredName,
//         hasError: nameInputHasError,
//         isValid: enteredNameIsValid,
//         valueChangeHandler: nameChangedHandler,
//         inputBlurHandler: nameBlurHandler,
//     } = useInput(value => value.trim() !== '');

//     // const [isSent, setIsSent] = useState(false);
    
//     const nameInputClasses = nameInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
//     // const formClasses = isSent ? `${classes.contactForm} ${classes.sent}` : classes.contactForm;

//     const topCategoryType = apiData ? apiData['topCategoryType'] : '';
//     const topArea = apiData ? apiData['topArea'] : '';
//     const topSubArea = apiData ? apiData['topSubArea'] : '';
//     const secondaryCategoryTypes = apiData ? apiData['secondryCategoryTypes'] : '';
//     const secondaryAreas = apiData ? apiData['secondryAreas'] : '';
//     const secondarySubAreas = apiData ? apiData['secondrySubAreas'] : '';
// // console.log("two "+isSent);

//     return (
//         <Fragment>
//             <Prompt when={isEntering} message={(location) =>
//                 'Are You Sure You Want To Leave ? All your entered data will be lost!'}
//             />
//             {
//             // isSent && 
//             (
//                 <div className={classes.contactFormCard}>
//                     <form 
//                     // className={formClasses}
//                     >
//                         <label>
//                             <input 
//                                 type="text"
//                                 className={nameInputClasses}
//                                 placeholder="Top Category Type"
//                                 // disabled={isSent}
//                                 value={topCategoryType}
//                             /> 
//                         </label>
//                         <label>
//                             <input 
//                                 type="text"
//                                 className={nameInputClasses}
//                                 placeholder="Top Area"
//                                 // disabled={isSent}
//                                 value={topArea}
//                             />
//                         </label>
//                         <label>
//                             <input
//                                 type="text"
//                                 className={nameInputClasses}
//                                 placeholder="Top Sub Area"
//                                 // disabled={isSent}
//                                 value={topSubArea}
//                             />
//                         </label>
//                         <label>
//                             <input
//                                 type="text"
//                                 className={nameInputClasses}
//                                 placeholder="Secondary Category Types"
//                                 // disabled={isSent}
//                                 value={secondaryCategoryTypes}
//                             />
//                         </label>
//                         <label>
//                             <input 
//                                 type="text"
//                                 className={nameInputClasses}
//                                 placeholder="Secondary Areas"
//                                 // disabled={isSent}
//                                 value={secondaryAreas}
//                             />
//                         </label>
//                         <label>
//                             <input 
//                                 type="text"
//                                 className={nameInputClasses}
//                                 placeholder="Secondary Sub Areas"
//                                 // disabled={isSent}
//                                 value={secondarySubAreas}
//                             />
//                         </label>
//                         <br />
//                         <div className={classes.sendBtn}>
//                             {/* Button or any other elements */}
//                         </div>
//                     </form>
//                 </div>
//             )}
//         </Fragment>
//     );
// };

// export default Two;





// import React, { Fragment, useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";
// import classes from "./two.module.css";
// import useInput from "../hooks/useinputs";

// const Two = (props) => {
//     const { apiData } = props;
//     const [isEntering, setIsEntering] = useState(false);
//     console.log("after submit" + props);

//     const { value: enteredName,
//         hasError: nameInputHasError,
//         isValid: enteredNameIsValid,
//         valueChangeHandler: nameChangedHandler,
//         inputBlurHandler: nameBlurHandler,
//     } = useInput(value => value.trim() !== '');

//     const nameInputClasses = nameInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;

//     const topCategoryType = apiData ? apiData['topCategoryType'] : '';
//     const topArea = apiData ? apiData['topArea'] : '';
//     const topSubArea = apiData ? apiData['topSubArea'] : '';
//     const secondaryCategoryTypes = apiData ? apiData['secondryCategoryTypes'] : '';
//     const secondaryAreas = apiData ? apiData['secondryAreas'] : '';
//     const secondarySubAreas = apiData ? apiData['secondrySubAreas'] : '';

//     // Function to clear the form and reload the page
//     const handleClear = () => {
//         window.location.reload();
//     };

//     return (
//         <Fragment>
//             <Prompt when={isEntering} message={(location) =>
//                 'Are You Sure You Want To Leave? All your entered data will be lost!'}
//             />
//             <div className={classes.contactFormCard}>
//                 <form>
//                     <label>
//                     <p className={classes.example}>Top Category Type</p>
//                         <input 
//                             type="text"
//                             className={nameInputClasses}
//                             placeholder="Top Category Type"
//                             value={topCategoryType}
//                         /> 
//                     </label>
                    
//                     <label>
//                     <p className={classes.example}>Top Area</p>
//                         <input 
//                             type="text"
//                             className={nameInputClasses}
//                             placeholder="Top Area"
//                             value={topArea}
//                         />
//                     </label>
//                     <label>
//                     <p className={classes.example}>Top Sub Area</p>
//                         <input
//                             type="text"
//                             className={nameInputClasses}
//                             placeholder="Top Sub Area"
//                             value={topSubArea}
//                         />
//                     </label>
//                     <label>
//                     <p className={classes.example}>Secondary Category Types</p>
//                         <input
//                             type="text"
//                             className={nameInputClasses}
//                             placeholder="Secondary Category Types"
//                             value={secondaryCategoryTypes}
//                         />
//                     </label>
//                     <label>
//                     <p className={classes.example}>Secondary Areas</p>
//                         <input 
//                             type="text"
//                             className={nameInputClasses}
//                             placeholder="Secondary Areas"
//                             value={secondaryAreas}
//                         />
//                     </label>
//                     <label>
//                     <p className={classes.example}>Secondary Sub Areas</p>
//                         <input 
//                             type="text"
//                             className={nameInputClasses}
//                             placeholder="Secondary Sub Areas"
//                             value={secondarySubAreas}
//                         />
//                     </label>
//                     <br />
//                     <div className={classes.sendBtn}>
//                         <button type="button" onClick={handleClear}>Clear</button>
//                         {/* Add other buttons or elements here */}
//                     </div>
//                 </form>
//             </div>
//         </Fragment>
//     );
// };

// export default Two;



import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";
import classes from "./two.module.css";
import useInput from "../hooks/useinputs";

const Two = (props) => {
    const { apiData } = props;
    const [isEntering, setIsEntering] = useState(false);
    console.log("after submit" + props);

    const { value: enteredName,
        hasError: nameInputHasError,
        isValid: enteredNameIsValid,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput(value => value.trim() !== '');

    const nameInputClasses = nameInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;

    const topCategoryType = apiData ? apiData['topCategoryType'] : '';
    const topArea = apiData ? apiData['topArea'] : '';
    const topSubArea = apiData ? apiData['topSubArea'] : '';
    const secondaryCategoryTypes = apiData ? apiData['secondryCategoryTypes'] : '';
    const secondaryAreas = apiData ? apiData['secondryAreas'] : '';
    const secondarySubAreas = apiData ? apiData['secondrySubAreas'] : '';

    // Function to clear the form and reload the page
    const handleClear = () => {
        window.location.reload();
    };

    const formFocussedHandler = () => {
        setIsEntering(true);
    };

    return (
        <Fragment>
            <Prompt when={isEntering} message={(location) =>
                'Are You Sure You Want To Leave? All your entered data will be lost!'}
            />
            <h2 style={{ color: 'black' }}>Predictions</h2>
            <h5 className={classes.label} style={{textAlign: 'left'}} >Top Predictions</h5>
            <div className={classes.contactFormCard}>
                <form onFocus={formFocussedHandler} className={classes.contactForm}>
                    <div className={classes.Inputs}>
                        <p className={classes.label}>Top Category Type</p>
                        <input 
                            type="text"
                            className={classes.Input}
                            placeholder="Top Category Type"
                            value={topCategoryType}
                        /> 
                    </div>
                    <div className={classes.Inputs}>
                        <p className={classes.label}>Top Area</p>
                        <input 
                            type="text"
                            className={classes.Input}
                            placeholder="Top Area"
                            value={topArea}
                        />
                    </div>
                    <div className={classes.Inputs}>
                        <p className={classes.label}>Top Sub Area</p>
                        <input
                            type="text"
                            className={classes.Input}
                            placeholder="Top Sub Area"
                            value={topSubArea}
                        />
                    </div>

                    </form>


            </div>

                    <h5 className={classes.label} style={{textAlign: 'left'}} >Secondary Predictions</h5>
                    <div className={classes.contactFormCard}>
                    <form onFocus={formFocussedHandler} className={classes.contactForm}>

                    <div className={classes.Inputs}>
                        <p className={classes.label}>Secondary Category Types</p>
                        <input
                            type="text"
                            className={classes.Input}
                            placeholder="Secondary Category Types"
                            value={secondaryCategoryTypes}
                        />
                    </div>
                    <div className={classes.Inputs}>
                        <p className={classes.label}>Secondary Areas</p>
                        <input 
                            type="text"
                            className={classes.Input}
                            placeholder="Secondary Areas"
                            value={secondaryAreas}
                        />
                    </div>
                    <div className={classes.Inputs}>
                        <p className={classes.label}>Secondary Sub Areas</p>
                        <input 
                            type="text"
                            className={classes.Input}
                            placeholder="Secondary Sub Areas"
                            value={secondarySubAreas}
                        />
                    </div>
                    <div className={classes.btndiv}>
                        {/* <button type="button" onClick={handleClear}>Clear</button> */}
                        {/* Add other buttons or elements here */}
                    </div>
                </form>


            </div>
        </Fragment>
    );
};

export default Two;
