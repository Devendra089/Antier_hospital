// import { useState } from 'react';
// import One from '../data/One';
// import Two from '../data/Two';
// import classes from "../data/form.module.css"; // Ensure correct path
// import Footer from './footer';
// import Navbar from './hyundaiNavbar';
// // import { useSelector } from "react-redux";
// // import '../data/form.module.css'

// const Form = (props) => {
//     // const uiColor = useSelector(state => state.uiColor);
//     const [apiData, setApiData] = useState(null);
//     const [formOneSubmitted, setFormOneSubmitted] = useState(false);


//     const onDataReceive = (data) => {
//         setApiData(data);
//         console.log("parent data", data);
//     };

//     return (
//         <div className= {classes.hyundaibody}>
//             <Navbar />
//             <div className={classes.getInTouch}>
//                 <div className="oneform">
//                     <One onDataReceive={onDataReceive} />
//                 </div>
//                 {formOneSubmitted && (
//                 <div className='twoform' style={{ marginTop: '20px' }}>
//                     <Two apiData={apiData} />
//                 </div>)
//                 }
//                 {/* {apiData && (
//                     <div>
//                         <h2>Received API Data</h2>
//                         <pre>{JSON.stringify(apiData, null, 2)}</pre>
//                     </div>
//                 )} */}
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Form;

import React, { useState } from 'react';
import One from '../data/One';
import Two from '../data/Two';
import classes from "../data/formmaruti.module.css"; // Ensure correct path
import Footer from './footer';
import Navbar from './hyundaiNavbar';

const Form = () => {
    const [apiData, setApiData] = useState(null);
    const [isFormOneSubmitted, setIsFormOneSubmitted] = useState(false);

    const onDataReceive = (data) => {
        setApiData(data);
        setIsFormOneSubmitted(true); // Indicate that form one is submitted
        // console.log("parent data", data);
    };

    console.log("check submit ", isFormOneSubmitted);


    return (
        <>
        <div className={classes.hyundaibody} id='apt-container'>
            <Navbar />
            <div className={classes.getInTouch}>
                <div className="oneform">
                    <One onDataReceive={onDataReceive} />
                </div>
                {isFormOneSubmitted && (
                    <div className='twoform' style={{ marginTop: '20px' }}>   
                        <Two apiData={apiData} />
                    </div>
                )}
            </div>
        </div>
            <Footer style={{}}/>
        </>
    );
};

export default Form;
