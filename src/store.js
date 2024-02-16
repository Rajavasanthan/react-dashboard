import {configureStore} from "@reduxjs/toolkit"
import {blogSlice} from "./reducers/blog-reducer"

export const store = configureStore({
    reducer : {
        app : blogSlice.reducer
    }
})