import React from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { Header } from '../../components/Header'
import { styles } from '../../theme/appTheme'
import prompt from 'react-native-prompt-android'

export const AlertScreen = () => {

  const showAlert = () => {
    Alert.alert('Information', 'This is a simple alert',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel was pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK was pressed')
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('On dismiss')
      }
    );
  }

  const showPromptForIos = () => {
    Alert.prompt(
      'Info',
      'Simple alert',
      (valor: string) => console.log('info: ', valor),
      'plain-text',
      'pre text',
      'number-pad',
    );
  }

  const iOSAndAndroidPrompt = () => {
    prompt(
      'Enter password',
      'Please fill your password below',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel was pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK was pressed, password: ' + password) },
      ],
      {
        type: 'secure-text',
        cancelable: true,
        defaultValue: '',
        placeholder: 'Placeholder'
      }
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <BackButton />
      <View style={styles.globalMargin}>

        <Header title='Alerts' />
        <Button title='Alert - iOS & Android' onPress={showAlert} />

        <View style={{ height: 10 }} />
        <Button title='iOS Prompt' onPress={showPromptForIos} />

        <View style={{ height: 10 }} />
        <Button title='Prompt iOS & Android' onPress={iOSAndAndroidPrompt} />

      </View>
    </View>
  )
}
