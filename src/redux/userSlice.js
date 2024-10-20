
import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
  currentUser : null,
  error : null,
  loading : false,
}


// create slice 
const userSlice = createSlice({
  name : "user",
  initialState, 
  reducers : {
    signInStart : (state) => {
      state.loading = true;
    },
    signInSuccess : (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure : (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});


// export actions
export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

// export default reducer  
export default userSlice.reducer;






