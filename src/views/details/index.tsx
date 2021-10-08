/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { Animated, Dimensions } from 'react-native'
import {
  Image,
  Info,
  Container,
  Gradient,
  Title,
  GradientContent,
  Date,
  Description,
  Classification
} from './details.styles'
import { colors } from '../../utils/colors'
import { useRoute } from '@react-navigation/core'
import { IRoute } from '../../components/types/navigation-types'
import Stars from '../../components/stars'

import { DetailsProps } from './details.types'

const { height } = Dimensions.get('screen')

const Details: FC<DetailsProps> = () => {
  const heightt = React.useRef(new Animated.Value(0)).current
  const route = useRoute()

  const { params } = route as IRoute

  React.useEffect(() => {
    Animated.spring(heightt, {
      toValue: height * 0.8,
      bounciness: 0,
      speed: 6,
      useNativeDriver: false
    }).start()
  }, [])

  return (
    <Container>
      <Image source={params.img} />
      <Info style={{ height: heightt }}>
        <Gradient colors={['transparent', '#000']}>
          <GradientContent>
            <Title>{params.title}</Title>
            <Stars star={params.stars}/>
            <Classification>classificacao: 16 anos</Classification>
            <Date>2021 - Acao/Aventura - 4h 2m</Date>
            <Description>{params.description}</Description>
          </GradientContent>
        </Gradient>
      </Info>
    </Container>
  )
}

export default Details
