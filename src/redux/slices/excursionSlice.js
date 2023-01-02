import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  excursion: {},
  reviews: [],
  categories: [],
  excursions: [],
  excursionAll: []
};

export const excursionall = createAsyncThunk(
  "excursion/excursionall",
  async (args, { getState }) => {
    // const { token } = getState().user
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const response = await axios.get(`/attractions/all?limit=20`);
    return response.data;
  }
);

export const getAllExcursions = createAsyncThunk(
  "excursion/getAllExcursions",
  async (args, { getState }) => {
    // const { token } = getState().user
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const response = await axios.get(`/attractions/all?limit=100&destination=${args.destination}&category=${args.category}`);
    return response.data;
  }
);
export const getExcursion = createAsyncThunk(
  "excursion/getExcursion",
  async (args, { getState }) => {
    // const { token } = getState().user
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    console.log(args);
    const response = await axios.get(`/attractions/single/${args}`);
    return response.data;
  }
);

export const getReviews = createAsyncThunk(
  "excursion/getReviews",
  async (args, { getState }) => {
    // const { token } = getState().user
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    const response = await axios.get(`/attractions/reviews/single/${args}`);
    return response.data;
  }
);

export const getCategories = createAsyncThunk(
  "excursion/getCategories",
  async (args, { getState }) => {
    const response = await axios.get("/attractions/categories/all");
    return response.data;
  }
);

const excursionSlice = createSlice({
  name: "excursion",
  initialState,
  extraReducers: {
    [getExcursion.pending]: (state, action) => {
      state.loading = true;
    },
    [getExcursion.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursion = action.payload;
    },
    [getReviews.pending]: (state, action) => {
      state.loading = true;
    },
    [getReviews.fulfilled]: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    [getCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [getAllExcursions.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllExcursions.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursions = action.payload;
    },
    [excursionall.pending]: (state, action) => {
      state.loading = true;
    },
    [excursionall.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursionAll = action.payload;
    },
  },
});

// export const {
// } = excursionSlice.actions

export default excursionSlice.reducer;
