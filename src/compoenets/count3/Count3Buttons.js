import React from 'react';
import {useDispatch} from "react-redux";
import {dec, inc} from "./countSlice";

const Count3Buttons = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=> {dispatch(inc()) } }> ++ </button>
            <button onClick={()=> {dispatch(dec()) } }> -- </button>
        </div>
    );
};

export default Count3Buttons;