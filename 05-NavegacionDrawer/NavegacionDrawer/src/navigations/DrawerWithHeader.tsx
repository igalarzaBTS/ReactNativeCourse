import React from 'react'

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { useWindowDimensions, View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';
import { HomeScreen } from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();

export const DrawerWithHeader = () => {

    const { width } = useWindowDimensions()


    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right',
                drawerType: width >= 768 ? 'permanent' : 'front',
                drawerHideStatusBarOnOpen: true,
                drawerActiveTintColor: 'purple',

            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
        </Drawer.Navigator >
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            {/* Avatar Header */}
            <View style={styles.avatarContainer}>
                <Image source={{
                    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
                }}
                    style={styles.avatar}
                />
                <Text style={styles.mainTitle}>Mewtwo</Text>
            </View>

            {/* Opciones de Menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Text style={styles.textMenu}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => navigation.navigate('NotificationsScreen')}
                >
                    <Text style={styles.textMenu}>Notifications</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}