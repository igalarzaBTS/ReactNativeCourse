import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View, ScrollView } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext'


export const NotificationsScreen = () => {

  const { top, bottom, left, right } = useSafeAreaInsets()

  return (
      <View style={{ marginTop: top }}>
          <Text style={styles.mainTitle}>Notifications Screen</Text>
      </View>
  )
}
