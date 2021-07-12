import React, {useState} from 'react';
import HellButton from "./HellButton";

const HelloWorld = () => {

    const [content, setContent] = useState('Hello World1!!');

    const changeContent = ()=>{
        alert("Content")
        setContent('HELL WORLD')
    }

    return (
        <div>
            <h1>{content}</h1>
            <HellButton action={changeContent}></HellButton>
        </div>
    );
};

export default HelloWorld;