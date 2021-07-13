import React, {useState} from 'react';
import planService from "./planService";

const TourPlan = () => {

    const [flag, setFlag] = useState(false)

    const changeFlag = () =>{
        setFlag(!flag)
    }

    planService.setFn(changeFlag)


    const spotList = planService.getAll()

    const list = spotList.map((spot,idx) =>
        <li key={idx}>{spot.name}</li>)

    return (
        <div>
            <h2>TourPlan</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default TourPlan;