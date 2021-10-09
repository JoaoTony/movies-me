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

const HighlightedCard: FC<HighlightedProps> = ({ img, title, stars, description }) => {
  const navigation = useNavigation()

  const { navigate } = navigation as NavigationProp<any>

  const handleDetails = (): any => {
    navigate('Details', { img, title, stars, description: description || '' })
  }

  return (
    <Container activeOpacity={0.8} onPress={() => handleDetails()}>
      <Gradient colors={[colors.gray01, 'transparent']}>
        <MovieImg source={img}/>
      </Gradient>
      <Info>
        <MivieTitile numberOfLines={1}>{title}</MivieTitile>
        <Stars star={stars}/>
      </Info>
    </Container>
  )
}

export default HighlightedCard
