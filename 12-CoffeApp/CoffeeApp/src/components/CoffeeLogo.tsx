import React from 'react'
import { Image, View } from 'react-native'

export const CoffeeLogo = () => {
  return (
    <View style={{ alignItems: 'center' }} >
      <Image
        source={require('../assets/cafe.png')}
        style={{
          width: 200,
          height: 200
        }}
      />
    </View>
  )
}
