import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { productFetch } from './features/productSlice(unused)';
import { productApi } from './features/productAPI';

import cartReducer, { getAllTotals } from "./features/cartSlice"

const store = configureStore({
  reducer:{
    // products: productReducer,
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productApi.middleware)
  },
});

store.dispatch(productFetch())
store.dispatch(getAllTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);