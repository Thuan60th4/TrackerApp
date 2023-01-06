import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenseState: [],
    loading: true,
    error: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    setInitState: (state, action) => {
      state.expenseState = action.payload;
    },

    addExpense: (state, action) => {
      state.expenseState.unshift(action.payload);
    },
    updateExpense: (state, action) => {
      const pos = state.expenseState.findIndex(
        (state) => state.id == action.payload.id
      );
      state.expenseState[pos] = {
        id: action.payload.id,
        ...action.payload.data,
      };
    },
    deleteExpense: (state, action) => {
      //ko return trực tiếp ra filter đc vì state của mình bây giờ là state.expenseState chứ ko phải state,chỗ khác sẽ bị lỗi
      state.expenseState = state.expenseState.filter(
        (state) => state.id != action.payload
      );
    },
  },
});

export const {
  setLoading,
  setError,
  setInitState,
  addExpense,
  updateExpense,
  deleteExpense,
} = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
