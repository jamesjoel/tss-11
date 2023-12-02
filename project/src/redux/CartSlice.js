import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from '../util/API'

let addToCartServer = createAsyncThunk("fetchdata", async()=>{
    if(localStorage.getItem("token"))
    {
        let response = await axios.get(`${API}/cart`, {
            headers : { Authorization : localStorage.getItem("token")}
        });
        return response.data.products;
    }
    else{
        console.log("**************");
    }
});





let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        
        addToCart(state, action){
            state.push(action.payload);
        },
        removeOne(state, action){
            
            return state.filter(value=> value._id != action.payload._id);
           
        },
        clearCart(state, action){
            return [];
        }

    },
    extraReducers : {
        [addToCartServer.fulfilled] : (state, action)=>{
            return action.payload;
        }
    }
})

export default CartSlice.reducer;

export let { addToCart, removeOne, clearCart } = CartSlice.actions;
export { addToCartServer };