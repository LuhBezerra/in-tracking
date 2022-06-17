import { createSlice } from "@reduxjs/toolkit";

import { Status } from "types/redux";
import { getStateStatus } from "utils/status-state";

import { signUp } from "./actions";

export interface Auth {
    token?: string;
    status: Status;
  }
  
  const initialState: Auth = {
    token: undefined,
    status: 'idle',
  };

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload;
      })
      getStateStatus(builder, signUp);
  },
}).reducer;
