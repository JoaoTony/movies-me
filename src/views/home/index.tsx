/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from 'react'
import { getFetcher } from '../../services/fetcher'

import { Container, Button, BText } from './home.styles'
import HeaderHome from '../../components/header-home'
import Highlighted from '../../sections/highlighted'
import MostRecent from '../../sections/most-recent'

const Home: FC<{ navigation: any }> = ({ navigation }) => {
  const [dataa, setData] = useState<any>([])

  getFetcher('now_playing').then(res => {
    console.log(res.status)
    console.log(res.data)
  })
  
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
