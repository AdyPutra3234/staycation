import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dataPage = createSlice({
    name: 'datapage',
    initialState: {
        home: {},
        detail: {},
    },
    reducers: {
        setData: (state, action) => {
            const { page } = action.payload
            state[page] = action.payload
        }
    }
});

export const getDataAsync = (path, page) => async (dispatch) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1${path}`);
        const data = {
            ...response.data,
            page
        }
        dispatch(setData(data));
    } catch (error) {
        throw new Error(error);
    }
} 

export const { setData } = dataPage.actions;
export default dataPage;