import { createSlice } from "@reduxjs/toolkit";

const initialState = { isExpanded: false, items: [], totalAmount: 0 }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggle(state) {
            state.isExpanded = !state.isExpanded
        },
        increment(state, action) {
            const currentItem = state.items.find(item => item.itemId === action.payload)
            currentItem.quantity++;
            currentItem.totalAmount = currentItem.totalAmount + currentItem.price;
        },
        decrement(state, action) {
            const currentItem = state.items.find(item => item.itemId === action.payload)
            const index = state.items.indexOf(currentItem);

            if (currentItem.quantity <= 1) {
                state.items.splice(index, 1);
            } else {
                currentItem.quantity--;
                currentItem.totalAmount = currentItem.totalAmount - currentItem.price;
            }
        },
        addToCart(state, action) {
            const currentItem = state.items.find(item => item.itemId === action.payload.itemId)
            if (!currentItem) {
                state.items.push({
                    key: action.payload.itemId,
                    price: action.payload.price,
                    itemId: action.payload.itemId,
                    quantity: 1,
                    title: action.payload.title,
                    content: action.payload.content,
                    totalAmount: action.payload.price
                })
            }
            else {
                currentItem.totalAmount = currentItem.totalAmount + currentItem.price;
                currentItem.quantity++;
            }
        }
    }
});

export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
