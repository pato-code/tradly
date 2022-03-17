import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../pages/SplashScreen';
import OnBoarding from '../pages/OnBoarding';

const Stack = createNativeStackNavigator();


export default function OnBoardingRoute() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={
          {headerShown: false}
        }>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="OnBoarding" component={OnBoarding}/>
          {/* <Stack.Screen name="Login" component={Login}/> */}
        </Stack.Navigator>
    </NavigationContainer>
  )
}
