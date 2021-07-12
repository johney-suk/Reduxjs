import React from 'react';
import {makeNum} from "./numService";

const getContent = (num) => {
    if (num % 2 === 0) {
        return <h1>EVEN</h1>
    } else {
        return <h1>000</h1>
    }
}

const OddEven = ({num}) => {

    makeNum()

    return (
        <div>
            {getContent(num)}
        </div>
    );
};

export default OddEven;