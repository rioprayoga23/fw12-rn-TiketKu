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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBottom from './src/components/TabBottom';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="TabBottom"
            component={TabBottom}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ViewAll"
            component={ViewAll}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Order"
            component={Order}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TicketResult"
            component={TicketResult}
            options={{headerShown: false}}
          />

          {/* <SignUp /> */}
          {/* <SignIn /> */}
          {/* <ForgotPassword /> */}
          {/* <ResetPassword /> */}
          {/* <ViewAll /> */}
          {/* <MovieDetails /> */}
          {/* <Order /> */}
          {/* <Payment /> */}
          {/* <DetailsAccount /> */}
          {/* <OrderHistory /> */}
          {/* <TicketResult /> */}
          {/* <Profile /> */}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
