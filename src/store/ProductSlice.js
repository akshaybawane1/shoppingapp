import {createSlice} from "@reduxjs/toolkit"

const initialState = {products:[],cart:[],priceSortState:false,nameSortState:false}

export const ProductSlice = createSlice({
        name: "ProductSlice",
        initialState : initialState,
        reducers : {
                setProducts(state,action){
                        state.products = action.payload
                },
                addToCart(state,action){
                        state.cart.unshift(action.payload)
                },
                updateCart(state,action){
                        state.cart = action.payload
                },
                setPriceSortState(state,action){
                        state.priceSortState = !state.priceSortState
                },
                setNameSortState(state,action){
                        state.nameSortState = !state.nameSortState
                },
        }
})

const ProductActions = ProductSlice.actions

export default ProductActions;