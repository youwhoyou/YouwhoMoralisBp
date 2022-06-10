import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({serializableCheck: false, immutableCheck: false}),
  ],
});

const {dispatch} = store;

export {store, dispatch};
