import { createSlice } from '@reduxjs/toolkit';

let AdminMenuBarSlice = createSlice({
    name : "admin",
    initialState : false,
    reducers : {
        isAdminLoggedIn(){
            return true;
        },
        isAdminLoggedOut(){
            return false;
        }
    }
})

export default AdminMenuBarSlice.reducer;

export let { isAdminLoggedIn, isAdminLoggedOut } = AdminMenuBarSlice.actions;