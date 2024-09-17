/* eslint-disable @typescript-eslint/no-explicit-any */
// import { configureStore } from '@reduxjs/toolkit'
// import { baseApi } from './api/baseApi'
// import cartReducer from './features/productSlice'
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'cart',//*in local storage data save by using this name
//     storage,
// }
// const persistedCartReducer = persistReducer(persistConfig, cartReducer)

// export const store = configureStore({
//     reducer: {
//         // Add the generated reducer as a specific top-level slice
//         [baseApi.reducerPath]: baseApi.reducer,
//         // cart: cartReducer,
//         cart: persistedCartReducer

//     },
//     // Adding the api middleware enables caching, invalidation, polling,
//     // and other useful features of `rtk-query`.
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }).concat(baseApi.middleware),
// })



// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
// export const persistor = persistStore(store)



import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { baseApi } from "./api/baseApi";
import cartReducer from './features/cartSlice'
import productItemReducer from './features/productItemSlice'
import updateId from './features/productUpdateSlice'

// Persist configuration
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], // List of reducers you want to persist
};

// Combine reducers
const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    item: productItemReducer,
    updateId: updateId,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
