import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { useWindowDimensions, View, Image, Text, TouchableOpacity } from 'react-native';
import { Colors, styles } from '../theme/AppTheme';
import { Tabs } from '../screens/tabs/Tabs';


const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {

    const { width } = useWindowDimensions()
    const isLandscape = width >= 768 ? true : false


    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                drawerType: isLandscape ? 'permanent' : 'front',
                drawerHideStatusBarOnOpen: true,
                drawerActiveTintColor: 'purple',

                headerLeft: () =>
                    <TouchableOpacity onPress={navigation.toggleDrawer} style={{ paddingLeft: 8 }}>
                        <Text>
                            <Icon name='fast-food-outline' size={24} color={Colors.secondary} />
                        </Text>
                    </TouchableOpacity >
            })}
            drawerContent={(props) => <InternalMenu {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
        </Drawer.Navigator >
    );
}

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            {/* Header */}
            <View style={styles.avatarContainer}>
                <Image source={{
                    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
                }}
                    style={styles.avatar}
                />
                <Text style={styles.mainTitle}>Mewtwo</Text>
            </View>

            {/* Menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <View style={styles.iconMenu}>
                        <Icon name='home-sharp' size={24} color='#009BE9' />
                    </View>
                    <Text style={styles.textMenu}>Tabs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonMenu}
                    onPress={() => navigation.navigate('NotificationsScreen')}
                >
                    <View style={styles.iconMenu}>
                        <Icon name='notifications-sharp' size={24} color='#009BE9' />
                    </View>
                    <Text style={styles.textMenu}>Notifications</Text>
                </TouchableOpacity>
            </View >
        </DrawerContentScrollView >
    );
}