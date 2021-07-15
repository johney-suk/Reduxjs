import React, {useEffect, useState} from 'react';
import todoService from "./todoService";
import TodoRegister from "./TodoRegister";
import TodoRead from "./TodoRead";

const initState = {
    dtoList: [],
    pageList: [],
    page: 1,
    size: 0,
    start: 0,
    end: 0,
    totalPage: 0,
    prev: false,
    next: false
}


const TodoList = () => {

    const [data, setData] = useState(initState)
    const [loading, setLoading] = useState(false)
    const [flag, setFlag] = useState(false)
    const [targetTno, setTargetTno] = useState(null)

    useEffect(() => {
        setLoading(true)
        todoService.getList(data.page).then(resJson => {
            setData(resJson)
            setLoading(false)
        })
    }, [data.page, flag])

    const movePage = (num) => {
        setFlag(!flag)
        setData({...data, page: num})
        setTargetTno(null)
    }

    const readTodo = (tno) => {
        setTargetTno(tno)
        alert(tno)

    }

    const list = data.dtoList.map(t =>
        <li key={t.tno} onClick={() => readTodo(t.tno)}>
            {t.tno} - {t.title}</li>
    )

    return (
        <div>
            <button onClick={() => movePage(3)}>MOVE</button>
            {loading ? <h3>Loading....</h3> :
                <>
                    <ul>
                        {list}
                    </ul>
                    <PageList data={data} movePage={movePage}></PageList>
                    <hr/>
                    {targetTno && <TodoRead targetTno={targetTno} movePage={movePage}></TodoRead> }
                    <hr/>
                    <TodoRegister movePage={movePage}></TodoRegister>
                </>
            }
        </div>
    )
}


const PageList = ({data, movePage}) => {

    return (
        <>
            {data.prev && <button onClick={() => movePage(data.start - 1)}>PREV</button>}
            {data.pageList.map(p => <button key={p} onClick={() => movePage(p)}>{p}</button>)}
            {data.next && <button onClick={() => movePage(data.end + 1)}>NEXT</button>}
        </>
    )

}

export default TodoList;