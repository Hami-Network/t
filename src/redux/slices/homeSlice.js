import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
    loading: false,
    initialData: {}
};


// get all data for home
export const getInitialData = createAsyncThunk(
    "general/getInitialData",
    async (args, { getState }) => {
        const response = await axios.get(`/home/initial-data`);
        return response.data;
    }
);


const homeSlice = createSlice({
    name: "home",
    initialState,
    extraReducers: {
        [getInitialData.pending]: (state, action) => {
            state.loading = true;
        },
        [getInitialData.fulfilled]: (state, action) => {
            state.loading = false;
            state.initialData = action.payload;
        },
    },
});

export default homeSlice.reducer;
