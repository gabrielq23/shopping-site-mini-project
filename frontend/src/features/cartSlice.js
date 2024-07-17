import { createSlice } from "@reduxjs/toolkit";
// import { createDispatchHook } from "react-redux";
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
                    position: "bottom-left"
                })
            }
            else{
                const tempProduct = {...action.payload, cartQuant: 1}
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} has been added to the cart`,{
                    position: "bottom-left"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeFromCart(state, action){
            const tempCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
            state.cartItems = tempCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.name} has been removed from the cart`,{position:"bottom-left"
            })
        },
        decreaseCartQuantity(state, action){
            const itemId = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (state.cartItems[itemId].cartQuant > 1){
                state.cartItems[itemId].cartQuant -= 1;
                toast.info(`${action.payload.name} quantity decreased`,{position: "bottom-left"})
            }
            else if (state.cartItems[itemId].cartQuant === 1){
                const tempCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
                state.cartItems = tempCartItems;
                toast.error(`${action.payload.name} has been removed from the cart`,{position:"bottom-left"
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        increaseCartQuantity(state,action){
            const itemId = state.cartItems.findIndex(item => item.id === action.payload.id);
            state.cartItems[itemId].cartQuant += 1;
            toast.info(`${action.payload.name} quantity increased`,{position: "bottom-left"})
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCartItems(state, action){
            state.cartItems = [];
            toast.info("Cart has been cleared", {position:"bottom-left"});
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getAllTotals(state, action) {
            state.cartTotalAmt = state.cartItems.reduce((total, cartItem) => {
                return total + cartItem.price * cartItem.cartQuant;
            }, 0);
        
            state.cartTotalQuant = state.cartItems.reduce((quantity, cartItem) => {
                return quantity + cartItem.cartQuant;
            }, 0);
        }
    },
})

export const {addToCart, removeFromCart, decreaseCartQuantity, increaseCartQuantity, clearCartItems, getAllTotals} = cartSlice.actions;

export default cartSlice.reducer