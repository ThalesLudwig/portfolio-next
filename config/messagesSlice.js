import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
  name: "messages",
  initialState: { value: [], isLoading: false },
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
    setIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const { addMessage, clearMessages, setIsLoading } =
  messagesSlice.actions;

export default messagesSlice.reducer;
