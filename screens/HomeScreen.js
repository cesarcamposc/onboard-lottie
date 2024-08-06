import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const {width, height} = Dimensions.get('window');

const HomeScreen = () => {

    const handleReset = ()=>{
        
    }
  return (
    <View style = {styles.container}>
      <LottieView style = {styles.lottie} source={require('../assets/animations/Animation - 1722481402276.json')} autoPlay loop/>
      <Text>HOME SCREEN</Text>
      <TouchableOpacity onPress={handleReset} style = {styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    lottie: {
        width: width*0.9,
        height: width,
    },

    resetButton: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 10,
    }
})