import React from 'react'
import { Text, View } from 'react-native'

export const HelloWorld = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "green",
      justifyContent: "center"
    }}>
      <Text style={{
        fontSize: 45,
        textAlign: 'center'
      }}>
        Hello world
      </Text>

    </View>
  )
}
