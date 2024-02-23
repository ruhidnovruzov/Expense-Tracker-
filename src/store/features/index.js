import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expense: 0,
    income: 0
}

const expenseSlice = createSlice(
    {
        name: "balance",
        initialState,
        reducers: {
            increase: (state, action) => {
                return({...state, income: state.income + action.payload})
        },
        decrease: (state, action) =>{
            return({...state, expense: state.expense + action.payload})
        }
        
    }
    
})

export const {increase, decrease} = expenseSlice.actions;
export default expenseSlice.reducer

