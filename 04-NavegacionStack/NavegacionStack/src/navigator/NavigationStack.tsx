import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FirstScreen } from '../screens/HomeScreen';
import { PokemonList } from '../screens/PokemonList';
import { ThirdScreen } from '../screens/ThirdScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type RootStackParams = {
    FirstScreen: undefined,
    SecondScreen: undefined,
    ProfileScreen: { 
      id: number,
      nombre: string,
      imagenPerfil: string
    },
    SettingsScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export function NavigationStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {/* // Suscribe todas las pantallas disponibles para navegar */}
            <Stack.Screen name="FirstScreen" options={{ title: 'FristScreen' }} component={FirstScreen} />
            <Stack.Screen name="SecondScreen" options={{ title: 'SecondScreen' }} component={PokemonList} />
            <Stack.Screen name="ProfileScreen" options={{ title: 'Profile' }} component={ThirdScreen} />
            <Stack.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Stack.Navigator >
    );
}