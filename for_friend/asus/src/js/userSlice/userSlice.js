import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const registerUser =createAsyncThunk("user/registerUser",
async(user)=>{
    try {
       let result= await axios.post("http://localhost:5000/user/register",user);
       return result.data;
        
    } catch (error) {
      console.log(error)  ;
    }
});

export const loginUser =createAsyncThunk("user/loginUser",
async(user)=>{
    try {
       let result= await axios.post("http://localhost:5000/user/login",user);
       return result.data;
        
    } catch (error) {
      console.log(error)  ;
    }
});

export const currentUser =createAsyncThunk("user/current",async()=>{
    let opts={
      headers:{
        Authorization: localStorage.getItem("token"),
      }
    }
    try {
       let result= await axios.get("http://localhost:5000/user/current",opts);
       return result.data;
        
    } catch (error) {
      console.log(error)  ;
    }
});

const initialState  = {
  user: null,
  status:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout:(state, action)=>{
      localStorage.removeItem("token");
      state.user=null;
    },
  },
  extraReducers:{


[registerUser.pending] :(state) => {
    state.status= "pending";
},
[registerUser.fulfilled] :(state,action)=>{
    state.status= "success";
    state.user=action.payload.user;
    localStorage.setItem("token",action.payload.token);
},
[registerUser.rejected] :(state)=>{
    state.status= "failed";
},



[loginUser.pending] :(state) => {
  state.status= "pending";
},
[loginUser.fulfilled] :(state,action)=>{
  state.status= "success";
  state.user=action.payload.user;
  localStorage.setItem("token",action.payload.token);
},
[loginUser.rejected] :(state)=>{
  state.status= "failed";
},


[currentUser.pending] :(state) => {
  state.status= "pending";
},
[currentUser.fulfilled] :(state,action)=>{
  state.status= "success";
  state.user=action.payload.user;
  
},
[currentUser.rejected] :(state)=>{
  state.status= "failed";
},


  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;