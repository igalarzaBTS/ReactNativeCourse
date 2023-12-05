import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greenBox}>Green Box</Text>
            <Text style={styles.redBox}>Red Box</Text>
            <Text style={styles.yellowBox}>Yellow Box</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C5EC5',
    },
    greenBox: {
        borderColor: 'white',
        borderWidth: 2,
        color: 'green',
        fontSize: 30,
    },
    redBox: {
        borderColor: 'white',
        borderWidth: 2,
        fontSize: 30,
        color: 'red',
    },
    yellowBox: {
        borderColor: 'white',
        borderWidth: 2,
        fontSize: 30,
        color: 'yellow',
    }
});
