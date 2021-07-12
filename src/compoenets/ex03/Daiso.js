import React, {useState} from 'react';
import ItemList from "./ItemList";
import ItemCart from "./ItemCart";

const style = {
    display: 'flex',
    flexDirection: 'row'
}


const Daiso = () => {


    const [userItems, setUserItems] = useState([])

    const addItemToCart = (item) => {
        // 새로운 참조
        setUserItems([...userItems, item])

    }


    // 호출하는 위치
    return (
        <div>
            <h1>Welcome to Daiso</h1>
            <div style={style}>
                <ItemList addItemToCart={addItemToCart}></ItemList>
                <ItemCart userItems={userItems}></ItemCart>
            </div>
        </div>
    );
};

export default Daiso;