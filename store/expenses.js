import { createSlice } from "@reduxjs/toolkit";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-01-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-02-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-03-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-04-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-05-18"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-06-05"),
  },
  {
    id: "e7",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-07-01"),
  },
  {
    id: "e8",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-08-19"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-12-28"),
  },
];

const ExpenseSlice = createSlice({
  name: "expenses",
  initialState: {
    expenseState: [...DUMMY_EXPENSES],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenseState.push(action.payload);
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

export const { addExpense, updateExpense, deleteExpense } =
  ExpenseSlice.actions;

export default ExpenseSlice.reducer;
