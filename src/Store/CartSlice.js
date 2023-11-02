import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProducts: [],
        favouriteProducts: [],
        search: ''
    },
    reducers: {
        add(state, action) {
            let exist = state.cartProducts.findIndex(item => item.id == action.payload.id)
            if (exist >= 0) {
                state.cartProducts[exist] = { ...state.cartProducts[exist], count: state.cartProducts[exist].count + 1 }
            } else {
                state.cartProducts.push({ ...action.payload, count: 1 })
            }
        },
        addFavourit(state, action) {
            state.favouriteProducts.push(action.payload)
        },
        removeAll(state, action) {
            state.cartProducts = []
        },
        remove(state, action) {
            state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload)
        },
        moveAll(state, action) {
            state.cartProducts = action.payload;
        },
        searchTerm(state, action) {
            state.search = action.payload;
        },
    }
});
export const { moveAll, add, removeAll, searchTerm, addFavourit, remove } = cartSlice.actions;
export default cartSlice.reducer;