import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { ProtectedScreen } from "../screens/ProtectedScreen";
import { AuthContext } from "../context/authContext";
import { LoadingScreen } from "../screens/LoadingScreen";
import { ProductsNavigator } from "./ProductsNavigator";

const Stack = createStackNavigator();

export const NavigationStack = () => {
  const { status } = useContext(AuthContext)

  if (status === 'checking') return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      {
        (status !== 'authenticated')
          ? (
            <>
              <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" options={{ title: 'Register' }} component={RegisterScreen} />
            </>
          )
          :
          <>
            <Stack.Screen name="ProductsNavigator" component={ProductsNavigator} />
            <Stack.Screen name="ProtectedScreen" options={{ title: 'Protected' }} component={ProtectedScreen} />
          </>
      }
    </Stack.Navigator>
  );
}