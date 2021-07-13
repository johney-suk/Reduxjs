import React from 'react';
import TourList from "./TourList";
import TourPlan from "./TourPlan";
import TourMap from "./TourMap";

const TourBoard = () => {
    return (
        <div>
            <h1>TourBoard</h1>
            <TourMap></TourMap>
            <TourList></TourList>

            <TourPlan></TourPlan>
        </div>
    );
};

export default TourBoard;