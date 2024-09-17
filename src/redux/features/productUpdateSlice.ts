// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     id: ''
// }

// const productUpdateSlice = createSlice({
//     name: 'id',
//     initialState,
//     reducers: {
//         addUpdateId(state, action) {
//             state.id = action.payload
//         }
//     }
// })

// console.log(initialState.id);

// export const { addUpdateId } = productUpdateSlice.actions;
// export default productUpdateSlice.reducer


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    updateId: null,
};

const productUpdateSlice = createSlice({
    name: 'productUpdate',
    initialState,
    reducers: {
        addUpdateId: (state, action) => {
            state.updateId = action.payload;
        },
        clearUpdateId: (state) => {
            state.updateId = null;
        },
    },
});

export const { addUpdateId, clearUpdateId } = productUpdateSlice.actions;
export default productUpdateSlice.reducer;
