/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { Container, Button, BText } from './home.styles'

const Home: FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Details', { name: 'Jane' })}>
        <BText>Testing</BText>
      </Button>
    </Container>
  )
}

export default Home
