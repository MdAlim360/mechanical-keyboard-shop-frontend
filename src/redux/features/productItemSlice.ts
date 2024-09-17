/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface ProductItemState {
    totalPrice: number;
}

// Initial state with typed state
const initialState: ProductItemState = {
    totalPrice: 0,
};

// Create the slice with typed actions
const productItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        addTotalPrice: (state, action: PayloadAction<number>) => {
            state.totalPrice = action.payload;
        },
        // removeFromCart: (state, action: PayloadAction<string>) => {
        //     // Placeholder for removeFromCart logic, where 'action.payload' would be the product ID
        // },
    },
});

// Export actions and reducer
export const { addTotalPrice, } = productItemSlice.actions;
export default productItemSlice.reducer;
