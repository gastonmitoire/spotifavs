// userSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
  user: UserProfile | null;
}

const initialState: UserState = {
  user: null,
};

// Define the async thunk for signOut
export const signOut = createAsyncThunk(
  "user/signOut",
  async (_, { dispatch }) => {
    dispatch(clearUser());
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfile | null>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
