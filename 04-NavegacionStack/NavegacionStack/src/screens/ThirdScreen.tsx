import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/NavigationStack'


interface Props extends StackScreenProps<RootStackParams, 'ProfileScreen'> { };

export const ThirdScreen = ({ route }: Props) => {

    const navigator = useNavigation<any>()
    const info = route.params;


    return (
        <View style={styles.globalMargin}>
            <View style={styleImage.profileContainer}>
                <Image
                    style={styleImage.profilePicture}
                    source={{ uri: `${info.imagenPerfil}` }}
                />

                <Text style={{ ...styles.mainTitle, fontWeight: 'bold' }} >
                    {info.nombre}
                </Text>
            </View>

            <Button
                title='Open Settings'
                onPress={() => navigator.navigate('SettingsScreen')}
            />
        </View>
    )
}

const styleImage = StyleSheet.create({
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
});
