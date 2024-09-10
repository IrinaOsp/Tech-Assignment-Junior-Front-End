import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/types";

interface UsersState {
  users: User[];
  filter: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data as User[];
});

const initialState: UsersState = {
  users: [],
  filter: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { setFilter } = usersSlice.actions;
export default usersSlice.reducer;
