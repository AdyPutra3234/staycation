import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: { 
        checkout: {},
    },
    reducers: {
        startCheckout: (state, action) => {
            state.checkout = action.payload;
        }
    }
});

export const { startCheckout } = checkoutSlice.actions;
export default checkoutSlice;