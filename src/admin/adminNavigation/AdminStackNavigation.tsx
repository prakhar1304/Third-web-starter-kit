import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdmineTabNavigation from './AdmineTabNavigation';
import NewProject from '../adminScreen/NewProject';
import { NavigationContainer } from '@react-navigation/native';






const Stack = createNativeStackNavigator();

 export default function AdminStackNavigation() {
  return (
   

    <Stack.Navigator screenOptions={{headerShown: false}}>
           
                 
       <Stack.Screen name="AdminTabNavigation" component={AdmineTabNavigation} 
       options={{animation: 'slide_from_bottom'}}
       />               
       <Stack.Screen name="NewProject" component={NewProject} 
       options={{animation: 'slide_from_bottom'}}
       />               


    </Stack.Navigator>

  );
} 