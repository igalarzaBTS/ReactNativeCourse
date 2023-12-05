import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export enum CapsuleType {
    dark, light
}

interface Props {
    title: string;
    mode?: CapsuleType;
    onAction: () => void;
}


export const CapsuleButton = ({ title, mode = CapsuleType.light, onAction }: Props) => {
    return (
        <TouchableOpacity
            onPress={onAction}
            activeOpacity={0.5}
            style={{
                height: 45,
                width: 100,
                backgroundColor: mode === CapsuleType.light ? 'gray' : '#31304D',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'white',
                borderWidth: 1
            }}
        >
            <Text
                style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}
            >{title}</Text>

        </TouchableOpacity >
    )
}
