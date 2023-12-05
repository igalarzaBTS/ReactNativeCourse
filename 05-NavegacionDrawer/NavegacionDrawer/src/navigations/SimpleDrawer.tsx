import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { useWindowDimensions } from 'react-native';
import { HomeScreen } from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export const SimpleDrawer = () => {

    const { width } = useWindowDimensions()


    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right',
                drawerType: width >= 768 ? 'permanent' : 'front',
                drawerHideStatusBarOnOpen: true,
                drawerActiveTintColor: 'green',

            }}
        >
            <Drawer.Screen name="HomeSreen" options={{ title: 'Home' }} component={HomeScreen} />
            <Drawer.Screen name="NotificationsScreen" options={{ title: 'Notifications' }} component={NotificationsScreen} />
        </Drawer.Navigator >
    );
}