/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { Container, Title, Img } from './most-recent-card.styles'
import { useNavigation, NavigationProp } from '@react-navigation/core'
import { MostRecntCardProps } from './most-recent-card.types'

const MostRecentCard: FC<MostRecntCardProps> = ({
  title,
  img,
  description,
  stars
}) => {
  const navigation = useNavigation()

  const { navigate } = navigation as NavigationProp<any>

  const handleDetails = (): any => {
    navigate('Details', { img, title, stars, description })
  }

  return (
    <Container activeOpacity={0.8} onPress={() => handleDetails()}>
      <Img source={img}/>
      <Title numberOfLines={1}>{title}</Title>
    </Container>
  )
}

export default MostRecentCard
