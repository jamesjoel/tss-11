import { createSlice } from '@reduxjs/toolkit'

let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addToCart(curr_state, action){
            curr_state.push(action.payload);
        }
    }
})

export default CartSlice.reducer;

export let { addToCart } = CartSlice.actions;