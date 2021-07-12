import React from 'react';

// 함수에 인자를 받을려면 브라켓이 필요하다라고 생각중..
const ItemCart = ({userItems}) => {
    // 필드에서는 필요없어요

    //구조분해 할당 객체,
    // 차이점 기억해둘것...
    // const a = "a";
    //
    // const b = {a,b,c}

    console.dir(userItems)
    return (
        <div style={{width:"30vw"}}>
            <h2>ItemCart</h2>
            <ul>
                {userItems.map((item,idx) =>
                    <li key = {idx}>{item.name}{item.price + idx}</li>)}
            </ul>
        </div>
    );
};

export default ItemCart;