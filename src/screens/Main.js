import React from 'react';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import ResetPassword from './ResetPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ViewAll from './ViewAll';
import {NativeBaseProvider, Box} from 'native-base';
import MovieDetails from './MovieDetails';
import Order from './Order';
import Payment from './Payment';
import OrderHistory from './OrderHistory';
import TicketResult from './TicketResult';
import Profile from './Profile';
import DetailsAccount from './DetailsAccount';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabBottom from '../components/TabBottom';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
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

export default Main;