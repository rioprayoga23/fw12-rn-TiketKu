import {createSlice} from '@reduxjs/toolkit';
import {transactionAction} from '../actions/transactions';

const initialState = {
  movieId: null,
  title: null,
  cinemaId: null,
  cinemaName: null,
  bookingDate: null,
  bookingTime: null,
  price: null,
  total: null,
  seatNum: null,
  paymentMethodId: null,
  fullName: null,
  email: null,
  phoneNumber: null,
  isLoading: true,
  message: null,
};

const transactionsReducer = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    chooseMovie: (state, action) => {
      console.log(action);
      state.movieId = action.payload.movieId;
      state.title = action.payload.title;
      state.cinemaId = action.payload.cinemaId;
      state.cinemaName = action.payload.cinemaName;
      state.bookingDate = action.payload.bookingDate;
      state.bookingTime = action.payload.bookingTime;
      state.price = action.payload.price;
    },
    chooseSeat: (state, action) => {
      state.seatNum = action.payload.seatNum;
      state.total = action.payload.total;
    },
  },
  extraReducers: build => {
    build.addCase(transactionAction.fulfilled, (state, {payload}) => {
      state.isLoading = true;
      state.message = payload.message;
      console.log(payload);
    });
  },
});

export const {chooseMovie, chooseSeat} = transactionsReducer.actions;

export default transactionsReducer.reducer;
