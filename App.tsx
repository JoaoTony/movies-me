/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusBar } from 'expo-status-bar'
import React, { FC } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationContext } from './src/context'

import Router from './src/routes'
import { colors } from './src/utils/colors'

const App: FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <NavigationContext>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </NavigationContext>
      <StatusBar style="light"/>
    </View>
  )
}

export default App
