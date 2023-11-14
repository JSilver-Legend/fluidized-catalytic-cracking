import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelIndex: 0,
    interiorView: false,
}

const modelConfigSlice = createSlice({
    name: 'modelConfig',
    initialState,
    reducers: {
        setModelIndex: (state, action) => {
            state.modelIndex = action.payload;
        },
        setInteiorView: (state) => {
            state.interiorView = !state.interiorView
        }
    }
})

export const { setModelIndex, setInteiorView } = modelConfigSlice.actions

export default modelConfigSlice.reducer