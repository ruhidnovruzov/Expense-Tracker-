import { configureStore } from "@reduxjs/toolkit"
import expenseReducer from "./features/index"


export const store = configureStore({
    reducer: {
        expense: expenseReducer
    }
}
)
