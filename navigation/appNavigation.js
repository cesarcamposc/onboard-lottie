import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import OnboardScreen from '../screens/OnboardScreen';
import { getItem } from '../utils/asyncStorage';

const Stack = createNativeStackNavigator();

export default function appNavigation() {

    const [showOnboarder, setShowOnboarder] = useState();

    useEffect(()=>{
        checkIfAlreadyOnboard();
    }, [])

    const checkIfAlreadyOnboard = async ()=>{
        let onboarder = await getItem('onboarder');
        if(onboarder == 1){
            setShowOnboarder(false);
        }else{
            setShowOnboarder(true);
        }

    }
  return (
    <Stack.Navigator>
        <Stack.Screen name='Onboarding' options={{headerShown: false}} component={OnboardScreen}/>
        <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})