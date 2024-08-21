// app/_users/_services/usersSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define el thunk
export const fetchUserProfile = createAsyncThunk<
  UserProfile | null,
  void,
  { rejectValue: string }
>("user/fetchUserProfile", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("/api/spotify/profile");
    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue("Failed to fetch user profile");
  }
});

// Define el slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null as UserProfile | null,
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
