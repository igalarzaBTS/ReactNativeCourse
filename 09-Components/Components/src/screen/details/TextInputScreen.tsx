import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { Header } from '../../components/Header'
import { styles } from '../../theme/appTheme'
import { useForm } from '../../hooks/useForm'
import { CustomSwitch } from '../../components/CustomSwitch'

export const TextInputScreen = () => {

  const { form, setvalue, isSubscribed } = useForm({
    username: '',
    email: '',
    phone: '',

    isSubscribed: false
  })

  return (

    <View style={{ flex: 1 }}>
      <BackButton />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.globalMargin}>
              <Header title='Text Inputs' />

              <TextInput
                style={tStyles.field}
                placeholder='username'
                keyboardType='ascii-capable'
                autoCorrect={false}
                onChangeText={(text: string) => setvalue(text, 'username')}
              />

              <TextInput
                style={tStyles.field}
                placeholder='email'
                keyboardType='email-address'
                autoCorrect={false}
                onChangeText={(text: string) => setvalue(text, 'email')}
              />

              <TextInput
                style={tStyles.field}
                placeholder='phone'
                keyboardType='phone-pad'
                onChangeText={(text: string) => setvalue(text, 'phone')}
              />

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={tStyles.switchTextRow}>isSubscribed</Text>
                <CustomSwitch isOn={isSubscribed} onChange={(enabled) => setvalue(enabled, 'isSubscribed')} />
              </View>

              <Text style={tStyles.json}>{JSON.stringify(form, null, 3)}</Text>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>

  )
}

const tStyles = StyleSheet.create({
  field: {
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 40,
    borderColor: 'silver',
    borderWidth: 1,
    marginVertical: 8
  },
  json: {
    fontSize: 16,
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 10
  },
  switchTextRow: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});
