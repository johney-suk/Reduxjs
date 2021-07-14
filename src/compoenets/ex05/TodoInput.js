import React, {useState} from 'react';

//state
const initState = {
    title: '',
    content: ''
}
// 1. 뼈대 잡고
// 2. state 잡기
const TodoInput = () => {

    const [todo, setTodo] = useState({...initState})

    const change = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        todo[e.target.name] = e.target.value
        //복사하고 새로운 객체를 만듬 setTodo({...todo})
        setTodo({...todo})
    }

    const resetTodo = () => {
        setTodo(initState)
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
                <button onClick={resetTodo}>RESET</button>
            </div>
        </div>
    );
};

export default TodoInput;