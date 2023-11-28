import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelIndex: 0,
    interiorView: false,
    connectionState: 1,
}

const modelConfigSlice = createSlice({
    name: 'modelConfig',
    initialState,
    reducers: {
        setModelIndex: (state, action) => {
            state.modelIndex = action.payload;
        },
        setInteiorView: (state) => {
            state.interiorView = !state.interiorView;
        },
        setConnectionState: (state, action) => {
            state.connectionState = action.payload;
        },
    }
})

export const { setModelIndex, setInteiorView, setConnectionState } = modelConfigSlice.actions

export default modelConfigSlice.reducer