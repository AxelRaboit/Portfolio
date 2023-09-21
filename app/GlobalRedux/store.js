import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import thunk from 'redux-thunk';
import localeReducer from './Features/LocaleSlice';
import themeReducer from './Features/ThemeSlice';
import scrolllockReducer from './Features/ScrolllockSlice';

const reducers = combineReducers({
  locale: localeReducer,
  theme: themeReducer,
  scrolllock: scrolllockReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});
