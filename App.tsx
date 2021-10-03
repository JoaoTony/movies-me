/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusBar } from 'expo-status-bar'
import React, { FC } from 'react'
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Router from './src/routes'

const App: FC = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
