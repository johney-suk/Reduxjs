import React from 'react';
import homeService from "./homeService";
import cartService from "./cartService";
import mapService from "./mapService";

const HomeList = () => {



    const list = homeService.getAll().map((home, idx) =>
        <li key={idx} onClick={()=>{
            cartService.append(home);
            // mapService.setCenter(home)
        }}>{home.name}</li>
    )


    return (
        <div>
            <h1>HomeList</h1>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default HomeList;