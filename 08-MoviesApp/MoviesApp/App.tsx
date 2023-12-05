import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { } from 'react-native';
import { NavigationStack } from './src/navigation/NavigationStack';
import { GradientProvider } from './src/context/GradiantContext';

export const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}


export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationStack />
      </AppState>
    </NavigationContainer>
  )
}

export default App;