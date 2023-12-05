import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { Colors, styles } from '../../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  useEffect(() => { console.log('Tab 1 effect'); }, [])



  return (
    <View
      style={styles.globalMargin}
    >
      <Text style={styles.mainTitle}> Tab 1</Text>
      <Text style={styles.marginIcons}> <Icon name='beer-outline' size={50} color={Colors.primary} /> </Text>
      <Text style={styles.marginIcons}> <Icon name='pizza-outline' size={50} color={Colors.secondary} /> </Text>
      <Text style={styles.marginIcons}> <Icon name='fast-food-outline' size={50} color={Colors.activeBackground} /> </Text>
    </View>
  )
}
