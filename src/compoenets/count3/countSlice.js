import {createSlice} from "@reduxjs/toolkit";

const initState = {count:0}

const countSlice = createSlice({

    //debugging에 자주 쓰임
    name:"count",
    //
    initialState: initState,

    // reducer에  new state
    reducers:{
        inc: (state, action) => {
            console.log("inc호출",action)
            return{count: state.count +1}
        },
        dec: (state, action) => {
            console.log("dec 호출",action)
            return{count: state.count -1}
        }
    }
    // 비동기처리에 사용됨
    //extraReducers:

})

export const {inc,dec} = countSlice.actions

export default countSlice.reducer