import { combineReducers, configureStore } from '@reduxjs/toolkit';
import messageReducer from './messages/message';

const root = combineReducers({
  messageReducer
});

const store = configureStore({ reducer: root });

export default store;
