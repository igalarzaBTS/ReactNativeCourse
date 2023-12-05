import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { DrawerWithHeader } from './src/navigations/DrawerWithHeader';
import { SimpleDrawer } from './src/navigations/SimpleDrawer';


export const App = () => {
  return (
    <NavigationContainer>
      <SimpleDrawer />
      {/* <DrawerWithHeader/> */}
    </NavigationContainer>
  )
}

export default App;
