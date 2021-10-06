/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../views/home'
import { colors } from '../utils/colors'

import { whichIcon } from './routes.utils'

const Botton = createBottomTabNavigator()

const SimpleComponent: FC = () => <View style={{ flex: 1, backgroundColor: colors.dark }} />

const BottonTabs: FC = () => (
  <Botton.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.dark,
        borderColor: colors.dark,
        elevation: 0,
        borderTopWidth: 0,
        shadowColor: colors.dark
      },
      tabBarIcon: ({ focused }) => {
        return <Image source={whichIcon(route.name, focused)} style={{ width: 20, height: 20 }} />
      }
    })}
  >
    <Botton.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    <Botton.Screen name="Favorite" component={SimpleComponent} options={{ headerShown: false }}/>
    <Botton.Screen name="User" component={SimpleComponent} />
  </Botton.Navigator>
)

export default BottonTabs
