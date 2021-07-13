import React, {useState} from 'react';

const Counter1 = () => {

    const [num, setNum] = useState(0)



    return (
        <div>
            <h1>Counter1</h1>
            <ConstDisplay num = {num}></ConstDisplay>
            <div>
                <h2>{num}</h2>
            </div>
            <div>
                <button onClick={()=>{setNum(num+1)}}>+</button>
                <button onClick={()=>{setNum(num-1)}}>-</button>
            </div>
            <div>
                <CountButtons></CountButtons>
            </div>
        </div>

    );
};

const ConstDisplay = ({num}) => {
    return(
        <div>
            <h2>{num}</h2>
        </div>
    )

}
const CountButtons = ({changeNum}) =>{
    return(
        <div>
            <button onClick={()=>{changeNum(1)}  }>++</button>
            <button onClick={()=>{changeNum(-1)}  }>--</button>
        </div>
    )
}

export default Counter1;