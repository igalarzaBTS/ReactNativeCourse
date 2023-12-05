import { useRef } from "react";
import { Animated } from "react-native";


export const useFade = () => {

  const opacity = useRef(new Animated.Value(0.2)).current;
  const position = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    // Fade
    Animated.timing(
      opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start(() => console.log('Fade anmation was finished'))

  }

  const movingAnimation = (initialPoition: number = -100, duration: number = 3000) => {

    position.setValue(initialPoition)
    Animated.timing( position, { 
      toValue: 0,
      duration,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = () => {
    Animated.timing( opacity, {
      toValue: 0.2,
      duration: 500,
      useNativeDriver: true
    }).start()

    Animated.timing( position, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }

  return {
    opacity,
    fadeIn,
    fadeOut,
    position,
    movingAnimation
  }
}