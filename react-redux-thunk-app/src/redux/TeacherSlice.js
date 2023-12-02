import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let insert = createAsyncThunk("insert", async(obj)=>{
    // axios.post("http://localhost:8080/api/teach", obj).then(response=>{
    //     console.log(response.data);
    //     return response.data;
    // })

    let responose = await axios.post("http://localhost:8080/api/teach", obj);
    return responose.data;
})
let remove = createAsyncThunk("remove", async(obj)=>{
    let responose = axios.delete("http://localhost:8080/api/teach/"+obj._id);
    return obj;
})

let getAll = createAsyncThunk("get", async()=>{
    let responose = await axios.get("http://localhost:8080/api/teach/");
    return responose.data;
})


let TeacherSlice = createSlice({
    name : "teacher",
    initialState : [],
    extraReducers : {
        [insert.fulfilled] : (state, action)=>{
            console.log(action.payload, "----");
            state.push(action.payload);
        },
        [remove.fulfilled] : (state, action)=>{
            return state.filter(value=> value._id != action.payload._id);
        },
        [getAll.fulfilled] : (state, action)=>{
            return action.payload;
        }
    }
    // reducers : {
    //     insert(state, action)
    //     {
    //         state.push(action.payload);
    //     },
    //     remove(state, action){
    //         return state.filter(value=> value.name != action.payload.name);
    //     }
    // }
})

export default TeacherSlice.reducer;
export {insert, remove, getAll};