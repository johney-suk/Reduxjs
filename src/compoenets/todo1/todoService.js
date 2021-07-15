import axios from "axios";

const baseURL = "http://localhost:8080/todo"

const headerObj = {headers: {'Content-Type': 'application/json'}}

const todoService = () => {

    const getTime = async () => {
        console.log("getTime...........")
        // await : 요청에 대한 응답이 올 때지 기다림
        // 무조건 async와 같이 쓰임
        const result = await axios.get(baseURL+"/now")
        return result
    }

    const getList = async (page) => {
        const result = await axios.get(baseURL+"/pages?page="+page)
        const data = await result.data
        return data
    }

    const registTodo = async (todo) => {

        // 안해도 json으로 날라감
        const todoStr = JSON.stringify(todo)

        const result = await axios.post(baseURL, todoStr,headerObj)

        const data = await result.data

        return data

    }

    //
    // const modifyOne =  (todo) = > {
    //
    // }

    const getOne = async (tno)=>{

        const result = await axios.get(baseURL+"/"+ tno)
        const data = await result.data
        return data
    }

    const removeOne = async (todo) =>{
        // const todoStr = JSON.stringify(todo)
        const result = await axios.delete(baseURL+"/"+ todo.tno, {data:todo}, {header:headerObj})
        console.log("result 값",result)
        const data = await result.data
        console.log("result.data 값",result.data)

        return data
    }


    return {getTime, getList, registTodo, getOne, removeOne}
}

export default todoService()