import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const transactionAction = createAsyncThunk(
  'transaction/createTransaction',
  async ({dataTrx}, {getState}) => {
    const {token} = getState().auth;
    try {
      const {data} = await http(token).post(
        '/transactions/createOrder',
        dataTrx,
      );
      return data;
    } catch (err) {
      throw err.response.data.message;
    }
  },
);
