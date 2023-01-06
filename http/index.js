import instance from "./instance";

export const addExpenseFirebase = (data) => {
  return instance.post("expense.json", data);
};

export const getExpenseFirebase = () => {
  return instance.get("expense.json");
};

export const updateExpenseFirebase = (id, data) => {
  return instance.put(`expense/${id}.json`, data);
};

export const deleteExpenseFirebase = (id) => {
  return instance.delete(`expense/${id}.json`);
};
