import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./api/productAPI";
import { userAPI } from "./api/userAPI";
import { userReducer } from "./reducer/user-reducer";
import { cartReducer } from "./reducer/cart-reducer";
import { orderApi } from "./api/orderAPI";
import { dashboardApi } from "./api/dashboardAPI";

export const server= import.meta.env.VITE_SERVER

export const store = configureStore({
    reducer:{
        [userAPI.reducerPath] : userAPI.reducer,
        [productAPI.reducerPath]: productAPI.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,


        [userReducer.name]: userReducer.reducer,
        [cartReducer.name]: cartReducer.reducer,


    },
    middleware:(mid) => mid()
    .concat(userAPI.middleware)
    .concat(productAPI.middleware)
    .concat(orderApi.middleware)
    .concat(dashboardApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>