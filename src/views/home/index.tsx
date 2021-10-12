/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { Container } from './home.styles'
import HeaderHome from '../../components/header-home'
import Highlighted from '../../sections/highlighted'
import MostRecent from '../../sections/most-recent'

const Home: FC<{ navigation: any }> = ({ navigation }) => {
  
  return (
    <Container>
      <HeaderHome />
      <Highlighted />
      <MostRecent type="recent" />
      <MostRecent type="seen" />
    </Container>
  )
}

export default Home
