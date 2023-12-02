import { createSlice } from '@reduxjs/toolkit'

let MenuBarSlice = createSlice({
    name : "menu",
    initialState : false,
    reducers : {
        isLoggedIn(){
            return true;
        },
        isLoggedOut(){
            return false;
        }
    }
})

export default MenuBarSlice.reducer;
export let { isLoggedIn, isLoggedOut } = MenuBarSlice.actions;