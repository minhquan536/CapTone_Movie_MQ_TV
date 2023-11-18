import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        maHTR: "",
        maRap:"",
    },
    reducers: {
        maHTR: (state,action) =>{
            state.maHTR = action.payload
        },
        maRap: (state,action) =>{
            state.maRap = action.payload
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const { maHTR, maRap } = cartSlice.actions;