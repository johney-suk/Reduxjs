import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "./signinSlice";

const SiginButton = () => {

    const userObject = useSelector(state => state.signin)
    const dispatch = useDispatch()

    console.log(userObject)


    return (
        <div>
            <h1>{userObject.name}</h1>
            <button onClick={() =>{ dispatch(login())}}>SIGININ</button>
        </div>
    );
};

export default SiginButton;