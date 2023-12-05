import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const PokemonList = () => {
    const navigator = useNavigation<any>();

    useEffect(() => {
        navigator.setOptions({
            title: 'Pokemon List Screen',
            headerBackTitle: 'Back' // Back button text for iOS
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.mainTitle}>Pokemon List</Text>


            <View style={{
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigator.navigate('ProfileScreen', {
                        id: 1234567890,
                        nombre: 'Charizard',
                        imagenPerfil: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
                    })}>
                    <Text style={styles.customTextButton}>Charizard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigator.navigate('ProfileScreen', {
                        id: 1234567890,
                        nombre: 'Mew',
                        imagenPerfil: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png'
                    })}>
                    <Text style={styles.customTextButton}>Mew</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigator.navigate('ProfileScreen', {
                        id: 1234567890,
                        nombre: 'Mewtwo',
                        imagenPerfil: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
                    })}>
                    <Text style={styles.customTextButton}>Mewtwo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
