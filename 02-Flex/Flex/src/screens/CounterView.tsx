import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterView = () => {
    const [count, setCount] = useState(0)

    const sum = (amount: number) => {
        const total = count + amount
        if (total >= 0) {
            setCount(count + amount);
        }
    }

    return (
        <View style={style.container}>

            <Text style={style.title}> Counter </Text>

            <Text style= {style.title}>{count}</Text>

            < Fab
                title='-1'
                position='bottomLeft'
                onPress={() => sum(-1)}
            />

            < Fab
                title='+1'
                position='bottomRight'
                onPress={() => sum(1)}
            />

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
        top: -15
    }
})