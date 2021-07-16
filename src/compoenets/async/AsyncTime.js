import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncGetTime} from "./asyncTimeService";


// 07.16 복습 시작
const AsyncTime = () => {

    const dispatch = useDispatch()

    const msg = useSelector(state => state.async.msg)

    useEffect(() => {
        dispatch(asyncGetTime())

    },[])

    return (
        <div>
            <h1>AsyncTime {msg}</h1>
        </div>
    );
};

export default AsyncTime;