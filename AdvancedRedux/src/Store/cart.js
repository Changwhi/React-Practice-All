import { createSlice } from "@reduxjs/toolkit";

const initialState = {isExpanded: false}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        toggle(state) {
            state.isExpanded = !state.isExpanded
        }
    }
});

export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
