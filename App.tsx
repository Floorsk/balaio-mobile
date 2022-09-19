import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading } from './src/screens/Loading';
import { Login } from './src/screens/Login';
import { Enter } from './src/screens/Enter';
import { Register } from './src/screens/Register';
import { EnterClient } from './src/screens/EnterClient';
import { ClientRegister } from './src/screens/ClientRegister';
import { SellerRegister } from './src/screens/SellerRegister';
import { StoreData } from './src/screens/StoreData';
import { Benefits } from './src/screens/Benefits';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false}}
        initialRouteName='Loading'
      >
        <Stack.Screen name='Loading' component={Loading}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Enter' component={Enter}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='EnterClient' component={EnterClient}/>
        <Stack.Screen name='ClientRegister' component={ClientRegister}/>
        <Stack.Screen name='SellerRegister' component={SellerRegister}/>
        <Stack.Screen name='StoreData' component={StoreData}/>
        <Stack.Screen name='Benefits' component={Benefits}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}