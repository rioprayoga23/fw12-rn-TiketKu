import {createSlice} from '@reduxjs/toolkit';
import {getProfileAction} from '../actions/profile';

const initialState = {
  user: null,
  isLoading: true,
  message: '',
};
const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile: (state, action) => {
      return initialState;
    },
  },
  extraReducers: build => {
    build.addCase(getProfileAction.fulfilled, (state, {payload}) => {
      state.user = payload;
    });
  },
});

export const {clearProfile: clearProfileAction} = profile.actions;
export default profile.reducer;
