import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    menu: [],
    traveling: [],
}

export const fetchMenu = createAsyncThunk('menu/fetchMenu', () => {
    return axios
        .get('http://localhost:8000/api/menu?format=json')
        .then((response) => response.data)
})

export const fetchTraveing = createAsyncThunk('traveling/fetchTraveings', () => {
    return axios
        .get('http://localhost:8000/api/traveling?format=json')
        .then((response) => response.data)
})

const menuSlice = createSlice({
    name: 'dara',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchMenu.fulfilled, (state, action) => {
            state.menu = action.payload
        })
        builder.addCase(fetchTraveing.fulfilled, (state, action) => {
            state.traveling = action.payload
        })
    }
})

export default menuSlice.reducer