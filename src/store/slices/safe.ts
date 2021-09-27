import { createSlice } from "@reduxjs/toolkit";

interface SafeState {}

const initialState: SafeState = {};

const safeSlice = createSlice({
  initialState,
  name: "safe",
  reducers: {},
});

export default safeSlice.reducer;
