import { createSlice } from '@reduxjs/toolkit';

let ResultSlice = createSlice({
    name : "result",
    initialState : [],
    reducers : {
        save(state, action){
            return action.payload;
        }
    }
})

export default ResultSlice.reducer;
export let { save }= ResultSlice.actions;