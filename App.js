import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OTPScreen from './screens/OTPScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import DashboardScreen from './screens/DashboardScreen';
import SendScreen from './screens/SendScreen';
import WithdrawScreen from './screens/WithdrawScreen';
import PayBillScreen from './screens/PayBillsScreen';
import MoreOptionsScreen from './screens/MoreOptionsScreen';
import ScanScreen from './screens/ScanScreen';
import WalletScreen from './screens/WalletScreen';
import CardScreen from './screens/CardScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="OTP" component={OTPScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Send" component={SendScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Withdraw" component={WithdrawScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="PayBill" component={PayBillScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MoreOptions" component={MoreOptionsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Wallet" component={WalletScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Card" component={CardScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}