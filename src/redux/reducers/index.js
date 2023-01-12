import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['message'],
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
});

export default reducer;
