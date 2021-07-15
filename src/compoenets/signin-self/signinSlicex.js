import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const userState = {
    id:'',
    name:''
}

const signinSlicex = createSlice({
    name:'signinx',
    initialState:userState,
    reducers:{
        login:(state, action) =>{

        }
    }
})

export default signinSlicex.reducer