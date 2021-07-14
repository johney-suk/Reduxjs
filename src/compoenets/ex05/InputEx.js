import React, {useState} from 'react';

const InputEx = ({str}) => {

    const [title, setTitle] = useState(str)

    const changeTitle = (e) => {
        e.stopPropagation()
        setTitle(e.target.value)
    }

    const clearTitle = (e) =>{

        setTitle('')
    }

    return (
        <div>
            <input type={'text'} name={'title'} value={title} onChange={changeTitle}/>
            <button onClick={clearTitle}>CLEAR</button>
        </div>
    );
};

export default InputEx;
