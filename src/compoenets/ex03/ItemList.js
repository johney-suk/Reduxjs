import React from 'react';
import service from './ItemService'

const ItemList = ({addItemToCart}) => {

    const ItemDetail = ({item}) => {
        return (
            <div>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <div>
                    <button onClick={() => { addCart(item) } }>CLICK</button>
                </div>
            </div>
        )
    }

    const list = service.getItems().map((item, idx) => <ItemDetail key={idx} item={item}></ItemDetail>)
//        <li key={idx} >{item.name} --- {item.price}</li>

    const addCart = (item) =>{
        console.log("add cart...", item )
        addItemToCart(item)
    }

    return (
        <div style={{width: "30vw"}}>
            <h2>Item List</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
};


export default ItemList;