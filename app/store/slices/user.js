import { createSlice } from "@reduxjs/toolkit";
// moralis
// import {Moralis} from '../rootReducer';
// dispatch
// import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
// export const { onToggleFollow, deleteUser } = slice.actions;

// ----------------------------------------------------------------------

// export function setAccountRedux(value) {
//   return () => {
//     dispatch(slice.actions.startLoading());
//     try {
//       // dispatch(slice.actions.setAccountSuccess(value));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// ----------------------------------------------------------------------
