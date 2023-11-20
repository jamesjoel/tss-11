import { createSlice } from '@reduxjs/toolkit'
let WhishListSlice = createSlice({
    name : "whishlist",
    initialState : [],
    reducers : {
        add(state, action){
            state.push(action.payload);
        },
        clear(state, action){
            return [];
        }
    }
})

export default WhishListSlice.reducer;
export let { add, clear } = WhishListSlice.actions