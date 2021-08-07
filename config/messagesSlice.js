import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: { value: [] },
  reducers: {
    addMessage(state, { payload }) {
      if (Array.isArray(payload)) {
        state.value = [...state.value, ...payload];
      } else {
        state.value.push(payload);
      }
    },
    clearMessages(state) {
      state.value = [];
    },
  },
});

export const { addMessage, clearMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
