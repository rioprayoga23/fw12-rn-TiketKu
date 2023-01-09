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
      <Order />
    </NativeBaseProvider>
  );
};

export default App;
