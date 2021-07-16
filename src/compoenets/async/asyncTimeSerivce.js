import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


const asyncGetTime = createAsyncThunk('async/asyncTimeSerivce', async() => {

    const res = await axios.get("http://localhost:8080/todo/now")

    console.log(111111111,res)

    const data =await res.data

    return data

}   )

export default asyncGetTime