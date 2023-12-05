import React from 'react'
import { CalculatorScreen } from './src/screens/CalculatorScreen'
import { SafeAreaView, StatusBar } from 'react-native'
import { styles } from './src/theme/AppTheme'

export const App = () => {
  return(
    <SafeAreaView
      style={styles.background}
    >
      <StatusBar
        backgroundColor='black' // android
        barStyle='light-content' // ios
      />
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App;