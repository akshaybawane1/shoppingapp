import {createSlice} from "@reduxjs/toolkit"

const initialState = {token:false,name:"",errorMsg:null,formVisible:false,}

export const LoginSlice = createSlice({
        name: "LoginSclice",
        initialState : initialState,
        reducers : {
                Login(state,action){
                        state.token = action.payload
                },
                setErrorMsg(state,action){
                        state.errorMsg = action.payload
                },
                ToggleForm(state,action){
                        state.formVisible = !state.formVisible
                },
        }
})

const LogInActions = LoginSlice.actions

export default LogInActions;