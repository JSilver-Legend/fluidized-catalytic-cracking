import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoaded: false,
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
        setIsLoaded: (state, action) => {
            state.isLoaded = action.payload
        }
    }
})

export const { setModelIndex, setInteiorView, setConnectionState, setIsLoaded } = modelConfigSlice.actions

export default modelConfigSlice.reducer