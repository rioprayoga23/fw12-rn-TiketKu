import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
});

export const {logout: logoutAction} = auth.actions;
export default auth.reducer;
