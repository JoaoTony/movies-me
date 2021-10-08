/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { Container, Button, BText } from './home.styles'
import HeaderHome from '../../components/header-home'
import Highlighted from '../../sections/highlighted/indext'
import MostRecent from '../../sections/most-recent'

const Home: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <Container>
      <HeaderHome />
      <Highlighted navigation={navigation}/>
      <MostRecent type="recent" />
      <MostRecent type="seen" />
      {true && (
        <Button onPress={() => navigation.navigate('Details', { name: 'Jane' })}>
          <BText>Testing</BText>
        </Button>
      )}
    </Container>
  )
}

export default Home
