import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnectWallet from '../Screen/ConnectWallet';
import Login from '../Main/Login';
import AdminStackNavigation from '../admin/adminNavigation/AdminStackNavigation';
import HomeScreen from '../Screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

 export default function StackNavigator() {
  return (
    <NavigationContainer >
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} 
      options={{animation: 'slide_from_bottom'}}
      />       
      <Stack.Screen name="GOV" component={AdminStackNavigation} 
      options={{animation: 'slide_from_bottom'}}
      />       
      <Stack.Screen name="Contractor" component={HomeScreen} 
      options={{animation: 'slide_from_bottom'}}
      />       
    

    </Stack.Navigator>
    </NavigationContainer>
  );
} 