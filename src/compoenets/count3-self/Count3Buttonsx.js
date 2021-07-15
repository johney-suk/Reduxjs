import React from 'react';
import {useDispatch} from "react-redux";
import {dec, inc} from "./countSlicex";

const Count3Buttonsx = () => {

    // ?
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>{dispatch(inc()) } }>++</button>
            <button onClick={()=>{dispatch(dec()) } }>--</button>
        </div>
    );
};

export default Count3Buttonsx;