import { createSlice } from "@reduxjs/toolkit";

const initialState = {isExpanded: false, items:[], totalAmount: 0}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        toggle(state) {
            state.isExpanded = !state.isExpanded
        },
        increment(state, action) {
            const currentItem = state.items.find(item => item.itemId === action.payload.itemId)

            if (!currentItem) {
                state.items.push({
                    price: action.payload.price,
                    itemId: action.payload.itemId,
                    quantity: 1,
                    title: action.payload.title,
                    content: action.payload.content,
                    totalAmount: action.payload.totalAmount
                })
            }
            else {
                currentItem.totalAmount = currentItem.totalAmount + currentItem.price;
                currentItem.quantity++;
            }
        },
        decrement(state) {

        },
        addToCart(state) {

        }
    }
});

export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
