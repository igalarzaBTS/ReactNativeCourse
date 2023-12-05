import React from 'react'
import { StyleSheet, Dimensions, View, Text, useWindowDimensions } from 'react-native';

export const DimensionsScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.20
                }}></View>
                <View style={styles.orangeBox}></View>
            </View>
            <Text style={styles.bold}>
              W: {width}, 
              H:  {height}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D5FF45',
        width: '100%',
        height: 200
    },
    orangeBox: {
        backgroundColor: 'orange',
    },
    purpleBox: {
        backgroundColor: 'purple',
        height: '50%'
    },
    testGreenBox: {
      backgroundColor: 'green',
      height: '50%'
    },
    bold: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
