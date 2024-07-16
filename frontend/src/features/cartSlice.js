import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuant: 0,
    cartTotalAmt: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action){
            const itemId = state.cartItems.findIndex(item => item.id === action.payload.id);
            
            if (itemId >= 0){
                state.cartItems[itemId].cartQuant += 1;
                toast.info(`${action.payload.name} quantity in cart has been increased`,{
                    position: "bottom-right"
                })
            }
            else{
                const tempProduct = {...action.payload, cartQuant: 1}
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} has been added to cart`,{
                    position: "bottom-right"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
    },
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer