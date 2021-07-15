import React from 'react';
import {useSelector} from "react-redux";

const Count3Diplay = () => {

    const value = useSelector(state => state.count)

    console.log(value.count)

    return (
        <div>
            <h1>COUNT : {value.count}</h1>
        </div>
    );
};

export default Count3Diplay;