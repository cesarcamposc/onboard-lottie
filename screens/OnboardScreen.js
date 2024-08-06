import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const OnboardScreen = () => {

    const navigation = useNavigation();


    const handleDone = ()=>{
        navigation.navigate('Home');
    }

    const doneButton = ({...props})=>{
        return(
            <TouchableOpacity style = {styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent = {doneButton}
        containerStyles = {{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: "#dd0960",
            image: (
              <View>
                <LottieView source={require('../assets/animations/seotraffic.json')} autoPlay loop style = {styles.lottie}/>
              </View>
            ),
            title: "Onboarding Screen",
            subtitle: "Done with React Native Onboarding Swiper this is better pretty",
          },

          {
            backgroundColor: "#09ddca",
            image: (
              <View>
                <LottieView source={require('../assets/animations/firstprojectjson.json')} autoPlay loop style = {styles.lottie}/>
              </View>
            ),
            title: "HOme Screen",
            subtitle: "Done with React Native Onboarding Swiper",
          },

          {
            backgroundColor: "#7d09dd",
            image: (
              <View>
                <LottieView source={require('../assets/animations/secondproject.json')} autoPlay loop style = {styles.lottie}/>
              </View>
            ),
            title: "Super Screen",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}

export default OnboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },

    lottie: {
        width: width*0.9,
        height: width,
    },

    doneButton: {
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: '100%'
    }
})