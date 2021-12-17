import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = ({navigation}) => {
    return (
        <Onboarding
        onDone={() => navigation.replace('Login')}
        onSkip={() => navigation.replace('Login')}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'Connect To The World',
            subtitle: 'Hello there, we are here to help you connect with the world.',
          },
         {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/onboarding-img2.png')} />,
            title: 'Share Your Thoughts',
            subtitle: 'Share Your Thoughts with the world and get feedback from the people around you.',
         },
         {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/onboarding-img3.png')} />,
            title: 'Become A Superstar',
            subtitle: 'Let the world know what you think about the world and become a superstar.',
            },       
        ]}
      />
    )
}

export default OnBoarding

const styles = StyleSheet.create({})
