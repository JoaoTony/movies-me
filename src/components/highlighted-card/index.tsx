/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { colors } from '../../utils/colors'
import {
  Container,
  Gradient,
  MivieTitile,
  MovieImg,
  Info
} from './highlighted-card.styles'
import { useNavigationContext } from '../../context'

import { HighlightedProps } from './highlighted.types'

import Stars from '../stars'

const HighlightedCard: FC<HighlightedProps> = ({ img, title, stars, description, navigation }) => {
  const { handleInfoData } = useNavigationContext()
  const handleDetails = (): any => {
    handleInfoData({ id: '', img, title, stars, description: description || '' })
    navigation.navigate('Details', { img, title, stars, description: description || '' })
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
