import { createSlice } from '@reduxjs/toolkit'

let CitySlice = createSlice({
    name : "city",
    initialState : ["indore", "mumbai", "pune"],
    reducers : {
        add(curr_state, value){
            curr_state.push(value.payload);
        }
    }
})

export default CitySlice.reducer;

export let {add} = CitySlice.actions;