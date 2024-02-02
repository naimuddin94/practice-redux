import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, getUsers } from "./userAPI";

const initialState = {
  users: [],
  status: "idle",
};

export const asyncGetUsers = createAsyncThunk("fetch/users", async () => {
  const users = await getUsers();
  return users;
});

export const asyncCreateUser = createAsyncThunk("create/user", async (user) => {
  const response = await createUser(user);
  return response;
});

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncGetUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(asyncGetUsers.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log(state);
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(asyncCreateUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export default userSlice.reducer;
