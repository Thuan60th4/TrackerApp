import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "./expenses";

export const store = configureStore({
  reducer: {
    // nó tự lấy cái initState luôn nên ở đây coi như là 1 object initState
    expenses: ExpenseSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
