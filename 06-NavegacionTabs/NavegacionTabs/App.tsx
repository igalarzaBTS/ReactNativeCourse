import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerMenu } from './src/navigations/DrawerMenu';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  )
}

export default App;
