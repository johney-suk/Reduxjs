import {createSlice} from "@reduxjs/toolkit";

const initState = {countz:0}

const countSlicex = createSlice({

    //해당 모듈의 이름
    name:"countx",

    //해당 모듈의 초기값을 세팅
    initialState:initState,

    // 해당 리듀서의 키값 (countz)으로 액션함수가 자동으로 생성
    reducers:{
        inc:(state, action) => {
            console.log("inc호출",action)
            return{countz: state.countz +1}
        },
        dec:(state, action) => {
            console.log("dec호출",action)
            return{countz: state.countz -1}
        }
    }

})

export const {inc,dec} = countSlicex.actions

export default countSlicex.reducer