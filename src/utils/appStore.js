import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{
        cart:cartReducer, // as much as u can combine reducers here
    }
})

export default appStore;