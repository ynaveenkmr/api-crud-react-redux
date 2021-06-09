import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" }
  });
  const users = await response.json();
  return users;
});

export const postUsers = createAsyncThunk("users/postUsers", async data => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(data)
  });
  const postusers = await response.json();
  return postusers;
});

const usersApiSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: false
  },
  reducers: {
    setUsers: (state, action) => [(state.entities = action.payload)]
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
    },
    [postUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [postUsers.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [postUsers.rejected]: (state, action) => {
      state.loading = false;
    }
  }
});

export const { userDeleted } = usersApiSlice.actions;

export default usersApiSlice.reducer;
