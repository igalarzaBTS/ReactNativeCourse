import React from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { Header } from '../../components/Header'
import { styles } from '../../theme/appTheme'
import { useRefresh } from '../../hooks/useRefresh'

export const PullToRefreshScreen = () => {
  const { refreshing, onRefresh } = useRefresh()

  return (
    <View style={{ flex: 1 }}>
      <BackButton />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor={'black'}
            tintColor={'red'}
          />
        }>

        <View style={styles.globalMargin}>
          <Header title='Pull to Refresh' />
        </View>

      </ScrollView>
    </View>
  )
}