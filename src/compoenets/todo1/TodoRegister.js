import React, {useState} from 'react';
import todoService from "./todoService";

const initState = {
    title: '',
    content: ''
}

const TodoRegister = (movePage) => {

    const [todo, setTodo] = useState({...initState})

    const change = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const resetTodo = () => {
        setTodo(initState)
    }

    // 07.15 오전
    // 새로운 객체 todo를 만들어 꼬일일이없어짐
    const clickRegister = async () => {
        const result = await todoService.registTodo({...todo})
        console.log(result)
        movePage(1)
    }

    return (
        <div>
            <div>
                <input type={'text'} name={'title'} value={todo.title} onChange={change}/>
            </div>
            <div>
                <input type={'text'} name={'content'} value={todo.content} onChange={change}/>
            </div>
            <div>
                <button onClick={clickRegister}>REGISTER</button>
                <button onClick={resetTodo}>RESET</button>
            </div>
        </div>
    );
};

export default TodoRegister;