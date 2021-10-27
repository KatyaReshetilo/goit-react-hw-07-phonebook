import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from '../services/contactsAPI';
import { setupListeners } from '@reduxjs/toolkit/query';
import filter from './contacts/contacts-reducer';
import { combineReducers } from 'redux';

const contacts = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
  filter,
});

export const store = configureStore({
  reducer: contacts,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
