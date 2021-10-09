import React, { FC, useMemo } from 'react'

import { Container, Title, Img } from './most-recent-card.styles'
import { useNavigation, NavigationProp } from '@react-navigation/core'
import { MostRecntCardProps } from './most-recent-card.types'

const MostRecentCard: FC<MostRecntCardProps> = ({
  title,
  img,
  description,
  stars,
  cardSize
}) => {
  const navigation = useNavigation()

  const { navigate } = navigation as NavigationProp<any>

  const handleDetails = (): any => {
    navigate('Details', { img, title, stars, description })
  }

  return (
    <Container activeOpacity={0.8} onPress={() => handleDetails()} size={cardSize}>
      <Img source={img} size={cardSize}/>
      <Title numberOfLines={1} size={cardSize}>{title}</Title>
    </Container>
  )
}

export default MostRecentCard
