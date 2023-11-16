import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modelIndex: 0,
    interiorView: false,
    isConnectionState: false,
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
        setIsConnectionState: (state) => {
            state.isConnectionState = !state.isConnectionState;
        }
    }
})

export const { setModelIndex, setInteiorView, setIsConnectionState } = modelConfigSlice.actions

export default modelConfigSlice.reducer