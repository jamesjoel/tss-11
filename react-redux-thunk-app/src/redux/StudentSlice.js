import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

let API = "http://localhost:8080/student";

let getAllStudent = createAsyncThunk("getallstudent", async()=>{
    let response = await axios.get(API);
    return response.data;
})

let addStudent = createAsyncThunk("addstuent", async(data)=>{
    let response = await axios.post(API, data);
    return response.data;
})

let deleteStudent = createAsyncThunk("deletestudent", async(data)=>{
    let response = await axios.delete(`${API}/${data.id}`);
    return data;
})
let updateStudent = createAsyncThunk('updatestudent', async(data)=>{
    
    let response = await axios.put(`${API}/${data.id}`, data);
    return data;
    
})




let StudentSlice = createSlice({
    name : "student",
    initialState : [],
    extraReducers : {
        [getAllStudent.fulfilled] : (state, action)=>{
            return action.payload;
        },
        [addStudent.fulfilled] : (state, action)=>{
            state.push(action.payload);
        },
        [deleteStudent.fulfilled] : (state, action)=>{
            return state.filter(value=>value.id != action.payload.id);
        },
        [updateStudent.fulfilled] : (state, action)=>{
            return state.map(value=>{
                if(value.id == action.payload.id){
                    return action.payload;
                }
                else{
                    return value;
                }
            })
        }
    }
})

export default StudentSlice.reducer;
export { getAllStudent, addStudent, deleteStudent, updateStudent };