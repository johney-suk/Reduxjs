import React from 'react';
import HomeList from "./HomeList";
import HomeCart from "./HomeCart";
import HomeMap from "./HomeMap";

const HomeBoard = () => {

    return (
        <div>
            <h1>HomeBoard</h1>
            <HomeMap></HomeMap>
            <HomeList></HomeList>
            <HomeCart></HomeCart>
        </div>
    );
};

export default HomeBoard;