import React, {useState} from 'react';
import tourService from "./tourService";
import planService from "./planService";

const TourList = () => {

    const [spots, setSpots] = useState(tourService.getSpots())

    const list = spots.map((spot, idx) =>
        <li key={idx} onClick={() => planService.append(spot)}>{spot.name} </li>)

    const searchByCat = (str)=>{
        const filteredSpots = tourService.getByCat(str)
        setSpots(filteredSpots)

        console.log(filteredSpots)
    }

    return (
        <div>
            <div>
                <b onClick={()=>{searchByCat()}}>ALL</b>
                <b onClick={()=>{searchByCat('산')}}>산</b>
                <b onClick={()=>{searchByCat('유적지')}}>유적지</b>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default TourList;