// import { map, filter } from 'lodash';
import {createSlice} from '@reduxjs/toolkit';
// moralis
import {Moralis} from '../rootReducer';
// dispatch
import {dispatch} from '../store';
// ico/evm related

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  showTab: true,
};

const slice = createSlice({
  name: 'app',
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

    setShowTabSuccess(state, action) {
      state.isLoading = false;
      state.showTab = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions

// ----------------------------------------------------------------------

export function setShowTab(value) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      dispatch(slice.actions.setShowTabSuccess(value));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------
