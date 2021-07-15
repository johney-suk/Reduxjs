import {createSlice} from "@reduxjs/toolkit";

const userState = {
    id:'',
    name:''
}

const signinSlice = createSlice({
    name:'signin',
    initialState:userState,
    reducers: {
        login: (state, action) => {
            console.log("login.....")
            //fixed
            // userState.id = 'user00'
            // userState.name = 'Hong Gil Dong'

            return{id:'user00',name: 'Hong Gil Dong'}

        }
    }

})
export const {login} = signinSlice.actions

export default signinSlice.reducer