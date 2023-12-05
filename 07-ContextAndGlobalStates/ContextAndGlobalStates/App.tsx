import React from 'react'
import 'react-native-gesture-handler';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { DrawerMenu } from './src/navigations/DrawerMenu';
import { AuthProvider } from './src/context/AuthContext';
// import { Tabs } from './src/navigations/Tabs';



export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerMenu />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}

export default App;
