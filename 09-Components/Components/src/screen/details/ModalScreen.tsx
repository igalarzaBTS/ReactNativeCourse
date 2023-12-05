import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { Header } from '../../components/Header'
import { styles } from '../../theme/appTheme'

export const ModalScreen = () => {

  const [visible, setVisible] = useState(false)


  const showModal = () => {
    setVisible(!visible)
  }

  return (
    <View style={{ flex: 1 }}>
      <BackButton />
      <View style={styles.globalMargin}>

        <Header title='Modal' />
        <Button title='Open Modal' onPress={() => showModal()} />

        <Modal animationType='slide'
          visible={visible}
          transparent={true}>

          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
              height: 300,
              width: 300,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 10
            }}>
              
              <Header title='Modal' />
              <Text>Modal details</Text>
              <Button title='Close Modal' onPress={() => showModal()} />

            </View>
          </View>

        </Modal>
      </View>
    </View>
  )
}