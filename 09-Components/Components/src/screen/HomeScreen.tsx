import React from 'react'
import { View, FlatList } from 'react-native'
import { styles } from '../theme/appTheme';
import { MenuItemRow } from '../components/MenuItemRow';
import { MenuItemSeparator } from '../components/MenuItemSeparator';
import { menuItems } from '../data/menuItems';
import { Header } from '../components/Header';

export const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <MenuItemRow item={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <Header title='React Native Components Menu' />}
                ItemSeparatorComponent={() => <MenuItemSeparator />}
            />
        </View>
    )
}
