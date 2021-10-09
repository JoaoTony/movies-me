import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Details from '../views/details'
import MostRecentGrid from '../views/most-recent-grid'
import BottonTabs from './bottom-tabs'

const Stak = createNativeStackNavigator()

const Router: FC = () => {
  return (
    <Stak.Navigator screenOptions={{ headerShown: false  }}>
      <Stak.Screen name="BottonTabs" component={BottonTabs} />
      <Stak.Screen name="Details" component={Details} />
      <Stak.Screen name="Grid" component={MostRecentGrid} />
    </Stak.Navigator>
  )
}

export default Router
