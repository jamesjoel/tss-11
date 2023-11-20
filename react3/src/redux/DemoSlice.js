import { createSlice } from '@reduxjs/toolkit'

let DemoSlice = createSlice({
    name : "demo",
    initialState : 100,
    reducers : {
        change(current_state, value){
            return current_state + value.payload;
        }
    }
})

export default DemoSlice.reducer;
export let { change } = DemoSlice.actions;
