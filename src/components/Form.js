import { useState } from 'react';
import One from '../data/One';
import Two from '../data/Two';
import classes from "../data/form.module.css"; // Ensure correct path
import Footer from './footer';
import Navbar from './hyundaiNavbar';
// import { useSelector } from "react-redux";
// import './formHyundai.css'

const Form = (props) => {
    // const uiColor = useSelector(state => state.uiColor);
    const [apiData, setApiData] = useState(null);

    const onDataReceive = (data) => {
        setApiData(data);
        console.log("parent data", data);
    };

    return (
        <div className='hyundaibody' style={{backgroundColor:'#EBECF0'}}>
            <Navbar />
            <div className={classes.getInTouch}>
                <One onDataReceive={onDataReceive} className="oneform" />
                <Two apiData={apiData} className="twoform" />
                {/* {apiData && (
                    <div>
                        <h2>Received API Data</h2>
                        <pre>{JSON.stringify(apiData, null, 2)}</pre>
                    </div>
                )} */}
            </div>
            <Footer />
        </div>
    );
};

export default Form;
