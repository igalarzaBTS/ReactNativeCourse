import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { CoffeeLogo } from '../components/CoffeeLogo'
import { loginStyles } from '../theme/loginTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { useForm } from '../hooks/useForm'
import { AuthContext } from '../context/authContext'

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

  const { signUp, errorMessage, removeError } = useContext(AuthContext);

  const { name, email, password, onChange, } = useForm({
    name: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Incorrect registration', errorMessage, [{
      text: 'Okay',
      onPress: removeError
    }]);

  }, [errorMessage])

  const onRegister = () => {
    console.log({ email, password, name });
    Keyboard.dismiss();
    signUp({
      nombre: name,
      correo: email,
      password
    });
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#31304D' }}
        behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
      >
        <View style={loginStyles.formContainer}>
          <CoffeeLogo />
          <Text style={loginStyles.title}>New account</Text>

          <Text style={loginStyles.label}>Name:</Text>
          <TextInput
            placeholder='Enter your name'
            placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
            autoCorrect={false}
            autoCapitalize='words'
            underlineColorAndroid={'white'}
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldiOS
            ]}
            onChangeText={(text) => onChange(text, 'name')}
            value={name}
            onSubmitEditing={onRegister}
          />

          <Text style={loginStyles.label}>Email:</Text>
          <TextInput
            placeholder='Enter your email'
            placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
            keyboardType='email-address'
            autoCorrect={false}
            autoCapitalize='none'
            underlineColorAndroid={'white'}
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldiOS
            ]}
            onChangeText={(text) => onChange(text, 'email')}
            value={email}
            onSubmitEditing={onRegister}
          />

          <Text style={loginStyles.label}>Password:</Text>
          <TextInput
            placeholder='* * * * * *'
            placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
            keyboardType='default'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            underlineColorAndroid={'white'}
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldiOS
            ]}
            onChangeText={(text) => onChange(text, 'password')}
            value={password}
            onSubmitEditing={onRegister}
          />

          {/* Create an account */}
          <View style={loginStyles.buttonLoginContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.buttonLogin}
              onPress={onRegister}
            >
              <Text style={loginStyles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>

          {/* Go to Login */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('LoginScreen')}
            style={loginStyles.backToLoginButton}
          >
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    </>
  )
}
