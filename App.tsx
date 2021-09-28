import { StatusBar } from 'expo-status-bar'
import React, { FC } from 'react'
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native'
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Remote debugger']);

const { width, height } = Dimensions.get('screen')

const App: FC = () => {
  const testing = React.useRef(new Animated.Value(0)).current
  const heightt = React.useRef(new Animated.Value(0)).current

  const finalWidth = width * 0.7

  React.useEffect(() => {
    Animated.spring(testing, {
      toValue: finalWidth,
      bounciness: 10,
      speed: 10,
      useNativeDriver: false
    }).start()
    Animated.spring(heightt, {
      toValue: height * 0.4,
      bounciness: 10,
      speed: 2,
      useNativeDriver: false
    }).start()
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working jj son your app!</Text>
      <Animated.View style={[styles.testingTab, { width: testing }]}/>
      <Animated.View style={[styles.box, { height: heightt }]}/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  testingTab: {
    backgroundColor: 'red',
    height: 16,
    borderRadius: 8,
    alignSelf: 'flex-start'
  },
  box: {
    width: width,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0
  }
})

export default App
