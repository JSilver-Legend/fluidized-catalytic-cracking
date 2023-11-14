import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelIndex: 0,
}

const modelConfigSlice = createSlice({
    name: 'modelConfig',
    initialState,
    reducers: {
        setModelIndex: (state, action) => {
            state.modelIndex = action.payload;
        },
    }
})

export const { setModelIndex } = modelConfigSlice.actions

export default modelConfigSlice.reducer