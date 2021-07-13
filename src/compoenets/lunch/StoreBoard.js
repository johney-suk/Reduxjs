import React from 'react';
import StoreList from "./StoreList";
import StoreCart from "./StoreCart";
import StoreMap from "./StoreMap";

const StoreBoard = () => {
    return (
        <div>
            <h1>StoreBoard</h1>
            <StoreMap></StoreMap>
            <StoreList></StoreList>
            <hr/>
            <StoreCart></StoreCart>
        </div>
    );
};

export default StoreBoard;