import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexHomework = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purple} />
            <View style={styles.blue} />
            <View style={styles.orange} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404985',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    purple: {
        width: 100,
        height: 100,
        backgroundColor: '#9465FF',
        borderWidth: 5,
        borderColor: 'white',
    },
    blue: {
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      borderWidth: 5,
      borderColor: 'white',
    },
    orange: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'white',
    }
});
