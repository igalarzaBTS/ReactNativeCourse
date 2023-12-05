import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { DrawerScreenProps } from '@react-navigation/drawer'

interface Props extends StackScreenProps<any, any> { };

export const FirstScreen = ({ navigation }: Props) => {
  useEffect(() => { navigation.setOptions({}) }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.mainTitle}>Welcome!!!</Text>
      <Button
        title='Go to Pokemon list'
        onPress={() => navigation.navigate('SecondScreen')}
      />
    </View>
  )
}
