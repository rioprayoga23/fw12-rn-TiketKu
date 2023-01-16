import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';
import profile from './profile';
import transactions from './transactions';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['message'],
};

const profileConfig = {
  key: 'profile',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  profile: persistReducer(profileConfig, profile),
  transactions,
});

export default reducer;
