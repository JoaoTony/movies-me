import React, { FC } from 'react'
import { colors } from '../../utils/colors'
import {
  Container,
  Gradient,
  MivieTitile,
  MovieImg,
  Info
} from './highlighted-card.styles'

import { HighlightedProps } from './highlighted.types'
import { useNavigation, NavigationProp } from '@react-navigation/core'

import Stars from '../stars'

const HighlightedCard: FC<HighlightedProps> = 
({ 
  backdrop_path, 
  title, 
  vote_average, 
  overview,
  release_date,
  genre_ids 
}) => {
  const navigation = useNavigation()

  const { navigate } = navigation as NavigationProp<any>

  const handleDetails = (): any => {
    navigate('Details', { 
      img: backdrop_path, 
      title, 
      stars: vote_average / 2, 
      description: overview || '',
      release_date,
      genre_ids 
    })
  }

  return (
    <Container activeOpacity={0.8} onPress={() => handleDetails()}>
      <Gradient colors={[colors.gray01, 'transparent']}>
        <MovieImg source={{ uri: `https://image.tmdb.org/t/p/original${backdrop_path}` }}/>
      </Gradient>
      <Info>
        <MivieTitile numberOfLines={1}>{title}</MivieTitile>
        <Stars star={vote_average / 2}/>
      </Info>
    </Container>
  )
}

export default HighlightedCard
