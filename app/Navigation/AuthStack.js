import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login , SignUp , OnBoarding } from "../Screens";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setisFirstLaunch] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        setisFirstLaunch(true)
        AsyncStorage.setItem('alreadyLaunched', 'true')
      } else {
        setisFirstLaunch(false)
      }
    });
  }, [])
  
  if (isFirstLaunch === null) {
    return null
  }
  else if (isFirstLaunch) {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}  initialRouteName={isFirstLaunch ? 'OnBoarding' : 'Login'}>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
  } else {
    return (
      <Login/>
    )}
}

export default AuthStack

const styles = StyleSheet.create({})
