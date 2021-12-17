import React from 'react'
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Providers from './app/Navigation';
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Providers/>
    )
}

export default App

const styles = StyleSheet.create({})
