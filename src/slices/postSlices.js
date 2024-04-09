import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const getPosts = async () => {
  const response = await fetch("/assets/posts.json");
  const { data = [] } = await response.json();
  return data;
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const data = await getPosts();
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {}, // No reducers needed for fetching data (handled by thunk)
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
