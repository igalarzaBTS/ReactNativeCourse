import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

export const SettingsScreen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.mainTitle}>Settings Screen</Text>
            <Text style={styles.profileInstructions}>Choose a method to return:</Text>
            <Button
                title='Pop'
                onPress={() => navigation.pop()}
            />

            <Button
                title='Normal GoBack'
                onPress={() => navigation.goBack()}
            />

            <Button
                title='Go to Home - popToTop'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
