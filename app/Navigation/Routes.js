import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import AuthStack from "./AuthStack";

const Route = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    )
}

export default Route

const styles = StyleSheet.create({})
