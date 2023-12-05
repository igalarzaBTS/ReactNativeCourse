import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    text: string;
    color?: string;
    width?: boolean
    action: (number: string) => void;
}

export const BtnCalc = ({ text: text, color = '#2D2F31', width: width = false, action: action }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View
                style={{ ...stylesButton.normalButton,
                    backgroundColor: color,
                    width: width ? 180 : 80
                }}
            >
                <Text style={{ ...stylesButton.textButton,
                    color: (color === 'gray') ? 'black' : 'white'
                }}
                >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const stylesButton = StyleSheet.create({
    normalButton: {
        height: 80,
        width: 80,
        backgroundColor: 'gray',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
});
