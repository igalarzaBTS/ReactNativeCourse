import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from './Tab1Screen';
import { Tab2Screen } from './Tab2Screen';
import { Colors } from '../../theme/AppTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from '../../navigations/TopTabNavigator';


export const Tabs = () => {
  return Platform.OS == 'ios'
    ? <TabsForiOS />
    : <TabsForAndroid />
}

const TabMaterial = createMaterialBottomTabNavigator();


const TabsForAndroid = () => {
  return (
    <TabMaterial.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: Colors.activeBackground,

        tabBarStyle: {
          borderTopColor: Colors.primary,
          borderTopWidth: 0,
        },

        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'normal'
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home-sharp'
              break;

            case 'Tab2Screen':
              iconName = 'newspaper-sharp'
              break;

            case 'TopTabNavigator':
              iconName = 'logo-android'
              break;
          }
          return <Icon name={iconName} size={24} color={Colors.primary} />
        }

      })}
    >
      <TabMaterial.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <TabMaterial.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={Tab2Screen} />
      <TabMaterial.Screen name="TopTabNavigator" options={{ title: 'Top Tab' }} component={TopTabNavigator} />
    </TabMaterial.Navigator>
  );
}


const TabView = createBottomTabNavigator();

const TabsForiOS = () => {
  return (
    <TabView.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}

      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: Colors.activeBackground,
        tabBarStyle: {
          borderTopColor: Colors.primary,
          borderTopWidth: 0
        },

        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'normal'
        },

        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'home-sharp'
              break;

            case 'Tab2Screen':
              iconName = 'newspaper-sharp'
              break;

            case 'TopTabNavigator':
              iconName = 'logo-apple'
              break;


          }
          return <Icon name={iconName} size={24} color={Colors.primary} />
        }

      })}
    >
      <TabView.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
      <TabView.Screen name="Tab2Screen" options={{ title: 'Tab 2' }} component={Tab2Screen} />
      <TabView.Screen name="TopTabNavigator" options={{ title: 'Top Tab' }} component={TopTabNavigator} />
    </TabView.Navigator>
  );
}