import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import localeReducer from './slices/locale/LocaleSlice';
import themeReducer from './slices/theme/ThemeSlice';
import scrolllockReducer from './slices/scrolllock/ScrolllockSlice';

const reducers = combineReducers({
  locale: localeReducer,
  theme: themeReducer,
  scrolllock: scrolllockReducer

});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;