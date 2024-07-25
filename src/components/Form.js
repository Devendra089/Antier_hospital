import { useState } from 'react';
import One from '../data/One';
import Two from '../data/Two';
import classes from "../data/form.module.css";
// import { useSelector } from "react-redux";

const Form = (props) => {
    // const uiColor=useSelector(state=>state.uiColor);
     const [apiData, setApiData] =  useState(null);
     const onDataReceive = (data)=>{
         setApiData(data);
         console.log("parentdta", data);
     };


    return (
        <div className={classes.getInTouch}
        //  style={{borderColor:uiColor}}
         >
           <One onDataReceive={onDataReceive}/>
           <Two apiData={apiData} />
           {/* {apiData && (
                <div>
                    <h2>Received API Data</h2>
                    <pre>{JSON.stringify(apiData, null, 2)}</pre>
                </div>
            )} */}

        </div>
    )
};
export default Form;