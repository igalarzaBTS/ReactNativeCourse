import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        borderWidth: 3,
        paddingVertical: 20,
        paddingHorizontal: 100,
    },
    container: {
        flex: 1,
        backgroundColor: 'orange'
    }
});