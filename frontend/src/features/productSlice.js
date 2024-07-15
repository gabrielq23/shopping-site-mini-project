import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
    items: [],
    status: null,
    error: null
}

export const productFetch = createAsyncThunk(
    "products/productFetch", 
    async() => {
        const response = await axios.get("http://localhost:5000/products");
            return response?.data;
        // try{
        //     const response = await axios.get("http://localhost:5000/products");
        //     return response?.data;
        // }
        // catch (error){
        //     return rejectWithValue("An Error Occured");
        // }
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productFetch.pending, (state, action) => {
                state.status = "pending";
            })
            .addCase(productFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(productFetch.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload
            });
    }
});

export default productSlice.reducer