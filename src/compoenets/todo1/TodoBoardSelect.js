import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoList from "./TodoList";
import {useSelector} from "react-redux";
import SiginButton from "../siginin/SiginButton";
import AsyncTime from "../async/AsyncTime";

const TodoBoard = () => {

    const countObj = useSelector(state => state.count)

    const [now, setNow] = useState('')
    const [flag, setFlag] = useState(false)

    console.log("TodoBoard...............")

    useEffect(() => {
        todoService.getTime().then((res) => {
            setNow(res.data)
        } )
    },[ flag ])

    const getTime = () => {
        setFlag(!flag)
    }


    return (
        <div>
            {/*<h1>현재 시간은  {now} </h1>*/}

            <h1>Count : {countObj.count} </h1>
            <AsyncTime></AsyncTime>
            <SiginButton></SiginButton>

            <button onClick={getTime}>current Time</button>
            <TodoList></TodoList>
        </div>
    );
};

export default TodoBoard;