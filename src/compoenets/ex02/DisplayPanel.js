import React from 'react';

const style = {
    backgroundColor: "blue",
    height: '10vh'
}

const DisplayPanel = ({num}) => {
    return (
        <div style={style}>
            <h2>DisplayPanel   {num}</h2>
        </div>
    );
};

export default DisplayPanel;