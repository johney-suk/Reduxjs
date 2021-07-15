import {configureStore} from "@reduxjs/toolkit";
import countSlice from "../compoenets/count3/countSlice";
import signinSlice from "../compoenets/siginin/signinSlice";
import countSlicex from "../compoenets/count3-self/countSlicex"


export const store = configureStore({
    reducer: {
        countz:countSlicex,
        count: countSlice,
        signin:signinSlice
    }
})