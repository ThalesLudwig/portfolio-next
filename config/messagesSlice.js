import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: { value: [], visited: [] },
  reducers: {
    addMessage(state, { payload }) {
      if (Array.isArray(payload)) {
        state.value = [...state.value, ...payload];
      } else {
        state.value.push(payload);
      }
    },
    addToVisited(state, { payload }) {
      state.visited.push(payload);
    },
    clearMessages(state) {
      state.value = [];
    },
  },
});

export const { addMessage, addToVisited, clearMessages } =
  messagesSlice.actions;

export default messagesSlice.reducer;
