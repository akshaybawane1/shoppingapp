import {configureStore} from "@reduxjs/toolkit"
import {LoginSlice} from "./LoginSlice"
import {ProductSlice} from "./ProductSlice"

const store = configureStore({
        reducer : {Auth: LoginSlice.reducer,Prod: ProductSlice.reducer}
})

export default store;