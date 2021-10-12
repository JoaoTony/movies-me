import React, { FC, useMemo } from 'react'

import { Container, Title, Img } from './most-recent-card.styles'
import { useNavigation, NavigationProp } from '@react-navigation/core'
import { MostRecntCardProps } from './most-recent-card.types'

const MostRecentCard: FC<MostRecntCardProps> = ({
  title,
  poster_path,
  overview,
  vote_average,
  cardSize,
  release_date,
  genre_ids
}) => {
  const navigation = useNavigation()

  const { navigate } = navigation as NavigationProp<any>

  const handleDetails = (): any => {

    navigate('Details', { 
      img: poster_path, 
      title, 
      stars: vote_average, 
      description: overview,
      release_date,
      genre_ids 
    })
  }

  return (
    <Container activeOpacity={0.8} onPress={() => handleDetails()} size={cardSize}>
      <Img source={{ uri: `https://image.tmdb.org/t/p/original${poster_path}`}} size={cardSize}/>
      <Title numberOfLines={1} size={cardSize}>{title}</Title>
    </Container>
  )
}

export default MostRecentCard
