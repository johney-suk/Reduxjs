import {createSlice} from "@reduxjs/toolkit";
import {asyncGetTime} from "./asyncTimeService";

const initState = {
    msg:''
}

// Slice는 상태를 유지
const asyncSlice = createSlice({
    name:'asyncSlice',
    initialState:initState,
    extraReducers:builder => {
        builder
            .addCase(asyncGetTime.pending,(state, action) => {
                console.log("pending...")
                return {msg:"loading....."}
            })
            .addCase(asyncGetTime.fulfilled, (state, action) => {
                console.log("fulfilled...")
                return {msg:"Finished....."}
            })
    }
})

export default asyncSlice.reducer