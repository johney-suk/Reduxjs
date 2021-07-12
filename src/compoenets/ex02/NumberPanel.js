import React, {useState} from 'react';
import DisplayPanel from "./DisplayPanel";
import ControlPanel from "./ControlPanel";
import {makeNum} from "../ex01/numService";
import OddEven from "../ex01/OddEven";

const NumberPanel = () => {
    const [num, setNum] = useState(makeNum());

    const change = () => {
        console.log("change......")
        setNum(makeNum())
    }

    return (
        <div>
            <h1>Number Panel</h1>
            <DisplayPanel num = {num}></DisplayPanel>
            <OddEven num={num}></OddEven>
            <ControlPanel change = {change}></ControlPanel>
        </div>
    );
};

export default NumberPanel;