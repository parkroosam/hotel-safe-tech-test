import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const VALID_STORED_PIN_LENGTH = 4;

interface SafeState {
  error: boolean;
  locked: boolean;
  pin: string;
  storedPin: string | null;
}

export const initialState: SafeState = {
  error: false,
  locked: false,
  pin: "",
  storedPin: null,
};

const safeSlice = createSlice({
  initialState,
  name: "safe",
  reducers: {
    clear: (state) => {
      state.pin = "";
      state.error = false;
    },
    enter: (state) => {
      if (state.pin.length < VALID_STORED_PIN_LENGTH) {
        state.error = true;
        state.pin = "";
        return;
      }

      if (state.locked) {
        if (state.pin === state.storedPin) {
          state.locked = false;
          state.storedPin = null;
        } else {
          state.error = true;
        }
      } else {
        state.locked = true;
        state.storedPin = state.pin;
      }

      state.pin = "";
    },
    pressNumber: (state, action: PayloadAction<string>) => {
      if (state.pin.length >= VALID_STORED_PIN_LENGTH) return;

      if (state.error) state.error = false;

      state.pin = `${state.pin}${action.payload}`;
    },
  },
});

export const { clear, enter, pressNumber } = safeSlice.actions;

export default safeSlice.reducer;
