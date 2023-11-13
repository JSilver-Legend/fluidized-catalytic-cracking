import { configureStore } from "@reduxjs/toolkit";
import modelConfigReducer from '../reducer/index'

const store = configureStore({
    reducer: {
        modelConfig: modelConfigReducer
    }
})

export default store;