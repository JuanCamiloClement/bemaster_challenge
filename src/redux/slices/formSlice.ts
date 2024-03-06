import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { validateField } from "../../assets/validators";

const initialState = {
  form: {
    email: "",
    password: ""
  },
  errors: {
    email: "",
    password: ""
  }
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    fillOutForm: (state, { payload }) => {
      state.form = {
        ...state.form,
        [payload.fieldName]: payload.value
      }
    },
    defineErrors: (state, { payload }) => {
      state.errors = validateField(state.errors, payload.fieldName, payload.value);
    }
  }
});

export const {
  fillOutForm,
  defineErrors
} = formSlice.actions;

export const selectForm = (state: RootState) => state.form.form;
export const selectErrors = (state: RootState) => state.form.errors

export default formSlice.reducer;