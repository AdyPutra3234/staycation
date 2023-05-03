import {configureStore} from '@reduxjs/toolkit';
import checkoutSlice from './slices/checkout-slice';
import dataPageSlice from './slices/dataPage-slice';

const store = configureStore({
    reducer: {
        checkout: checkoutSlice.reducer,
        dataPage: dataPageSlice.reducer
    }
});

export default store;