import React from 'react'
import { StyleSheet, View } from 'react-native'

export const RelativePositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2EA8FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 5,
        borderColor: 'white',
        top: 20
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'white'
    },

});
