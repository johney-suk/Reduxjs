import React, {useState} from 'react';
import cartService from "./cartService";

const HomeCart = () => {

    const [flag, setFlag] = useState(false)

    const list = cartService.getAll().map((cart, idx)=>
        <li key={idx} onClick={()=>{cartService.remove(cart)}}>{cart.name}</li>
    )

    const setFunction = () => setFlag(!flag);

    cartService.setFn(setFunction);

    return (
        <div>
            <h1>HomeCart</h1>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default HomeCart;