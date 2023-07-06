import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { COLORS_URL } from "../const";

export const fetchColors = createAsyncThunk(
    "colors/fetchColors",
    async () => {
        const response = await fetch(COLORS_URL);
        const data = await response.json();
        return data;
    }
)

const colorsSlice = createSlice({
    name: 'colors',
    initialState: {
        activeColor: '',
        status: 'idle',
        colorsId: {},
        colorsList: {},
        error: null
    },
    reducers: {
        setActiveColor: (state, action) => {
            state.activeColor = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchColors.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchColors.fulfilled, (state, action) => {
            state.status = 'success';
            state.colorsList = action.payload
            console.log(state.colorsList);
        })
        .addCase(fetchColors.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })


    }
})


export const { setActiveColor } = colorsSlice.actions;

export default colorsSlice.reducer;