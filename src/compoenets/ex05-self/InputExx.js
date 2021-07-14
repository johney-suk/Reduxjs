import React, {useState} from 'react';

const InputExx = ({str}) => {

    const[title, setTitle] = useState(str)

    const changeTitle = (e) =>{
        e.stopPropagation()
        setTitle(e.target.value)
    }

    return (
        <div>
            <input type={'text'}/>
            <button></button>
        </div>
    );
};

export default InputExx;