import React from 'react'
import { StyleSheet, View } from 'react-native'

export const AbsolutePositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde} />
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#005493',
        flex: 1,
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        right: 0,
        top: 0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
        backgroundColor: 'green',
        borderWidth: 5,
        borderColor: 'white',
        ...StyleSheet.absoluteFillObject
    },

});
