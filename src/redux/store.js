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
import localeReducer from './slices/locale/LocaleSlice';
import themeReducer from './slices/theme/ThemeSlice';
import scrolllockReducer from './slices/scrolllock/ScrolllockSlice';
import userReducer from './slices/user/UserSlice';

const reducers = combineReducers({
  locale: localeReducer,
  theme: themeReducer,
  scrolllock: scrolllockReducer,
  user: userReducer

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
