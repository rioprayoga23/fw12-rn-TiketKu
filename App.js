import React from 'react';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import ResetPassword from './src/screens/ResetPassword';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ViewAll from './src/screens/ViewAll';
import {NativeBaseProvider, Box} from 'native-base';
import MovieDetails from './src/screens/MovieDetails';
import Order from './src/screens/Order';
import Payment from './src/screens/Payment';
import OrderHistory from './src/screens/OrderHistory';
import TicketResult from './src/screens/TicketResult';
import Profile from './src/screens/Profile';
import DetailsAccount from './src/screens/DetailsAccount';
const App = () => {
  return (
    <NativeBaseProvider>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <Home /> */}
      {/* <ViewAll /> */}
      {/* <MovieDetails /> */}
      {/* <Order /> */}
      {/* <Payment /> */}
      {/* <DetailsAccount /> */}
      {/* <OrderHistory /> */}
      {/* <TicketResult /> */}
      <Profile />
    </NativeBaseProvider>
  );
};

export default App;
