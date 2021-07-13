import React, {useState} from 'react'
import cartService from "./cartService";

const StoreCart = ()=>{

    const [flag, setFlag] = useState(false)

    const changeFlag = () => {
        setFlag(!flag)
    }

    cartService.setFn(changeFlag)



    const storeItems = cartService.getAll()

    const list = storeItems.map( (store,idx) =>
        <li key={idx}>{store.name}<button onClick={()=> cartService.remove(store)}>DEL</button> </li>)


    return (
        <div>
            <h2>StoreCart</h2>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default  StoreCart;