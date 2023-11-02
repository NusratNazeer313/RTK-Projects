import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProducts: [],
        favouriteProducts: []
    },
    reducers: {
        add(state, action) {
            state.cartProducts.push(action.payload)
        },
        addFavourit(state, action) {
            state.favouriteProducts.push(action.payload)
        },
        removeAll(state, action) {
            state.cartProducts = []
        },
        remove(state, action) {
            return state.cartProducts.filter(item => item.id !== action.payload)
        },
        moveAll(state, action) {
            return state.cartProducts = action.payload;
        },
        searchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    }
});
export const { moveAll, add, removeAll, searchTerm, addFavourit, remove } = cartSlice.actions;
export default cartSlice.reducer;