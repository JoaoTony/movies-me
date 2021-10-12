/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { Animated, Dimensions, View } from 'react-native'
import { codeToText } from '../../utils/code-gender-to-text'
import {
  Image,
  Info,
  Container,
  Gradient,
  Title,
  GradientContent,
  Date,
  Description,
  Classification,
  GoBack,
  GoBackIcon,
  GobackGradient
} from './details.styles'
import { colors } from '../../utils/colors'
import { useRoute } from '@react-navigation/core'
import { IRoute } from '../../types/navigation-types'
import Stars from '../../components/stars'
import GoBackButton from '../../components/go-back-button'
import { DetailsProps } from './details.types'

const { height } = Dimensions.get('screen')

const Details: FC<DetailsProps> = () => {
  const heightt = React.useRef(new Animated.Value(-height)).current
  const translateY = React.useRef(new Animated.Value(200)).current 
  const route = useRoute()

  const { params } = route as IRoute

  React.useEffect(() => {
    Animated.spring(heightt, {
      toValue: 0,
      bounciness: 10,
      speed: 6,
      useNativeDriver: false
    }).start()
    Animated.spring(translateY, {
      toValue: 0,
      bounciness: 10,
      speed: 6,
      useNativeDriver: false
    }).start()
  }, [])

  return (
    <Container>
      <Image source={{ uri: `https://image.tmdb.org/t/p/original${params.img}` }} style={{  transform: [{ translateY: heightt }] }}/>
      <GobackGradient colors={['#000', 'transparent']} >
        <GoBackButton/>
      </GobackGradient>
      <Info>
        <Gradient colors={['transparent', '#000']}>
          <GradientContent style={{  transform: [{ translateY }] }}>
            <Title>{params.title}</Title>
            <Stars star={params.stars}/>
            <Date>{params.release_date}</Date>
            <Date>{codeToText(params.genre_ids)}</Date>
            <Description>{params.description}</Description>
          </GradientContent>
        </Gradient>
      </Info>
    </Container>
  )
}

export default Details
