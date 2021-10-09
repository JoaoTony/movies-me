import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Details from '../views/details'

import BottonTabs from './bottom-tabs'

const Stak = createNativeStackNavigator()

const Router: FC = () => {
  return (
    <Stak.Navigator>
      <Stak.Screen name="BottonTabs" component={BottonTabs} options={{ headerShown: false }}/>
      <Stak.Screen name="Details" component={Details} options={{ headerShown: false }}/>
    </Stak.Navigator>
  )
}

export default Router
