import React from 'react';
import {useSelector} from "react-redux";

const Count3Displayx = () => {

    // state 중 countz와 관련된 state를 가져옴
    const value = useSelector(state => state.countz)

    console.log("value ->",value)

    console.log("value.countz ->",value.countz)

    return (
        <div>
            <h1>COUNT : {value.countz}</h1>
        </div>
    );
};

export default Count3Displayx;