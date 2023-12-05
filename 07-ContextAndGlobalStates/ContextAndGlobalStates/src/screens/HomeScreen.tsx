import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props extends StackScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {
    useEffect(() => { navigation.setOptions({}) }, [])



    return (
        <View style={styles.globalMargin}>
            <Text style={styles.mainTitle}>Welcome to the Home Screen</Text>
        </View>
    )
}
