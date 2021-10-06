/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/home'
import Details from '../views/details'

const Stak = createNativeStackNavigator()

const Router: FC = () => {
  return (
    <Stak.Navigator>
      <Stak.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stak.Screen name="Details" component={Details} />
    </Stak.Navigator>
  )
}

export default Router
