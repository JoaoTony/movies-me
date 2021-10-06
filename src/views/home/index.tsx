/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { Container, Button, BText } from './home.styles'
import ThisWeekCard from '../../components/this-week-card'
import { FlatList } from 'react-native'
import HeaderHome from '../../components/header-home'
import Highlighted from '../../sections/highlighted/indext'

const Home: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <Container>
      <HeaderHome />
      <Highlighted />
      {!true && (
        <Button onPress={() => navigation.navigate('Details', { name: 'Jane' })}>
          <BText>Testing</BText>
        </Button>
      )}
    </Container>
  )
}

export default Home
