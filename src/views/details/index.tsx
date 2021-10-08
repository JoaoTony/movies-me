/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { Animated, Dimensions } from 'react-native'
import { Image, Info, Container, Gradient } from './details.styles'
import { colors } from '../../utils/colors'

const { height } = Dimensions.get('screen')

const Details: FC = () => {
  const heightt = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.spring(heightt, {
      toValue: height * 0.5,
      bounciness: 0,
      speed: 6,
      useNativeDriver: false
    }).start()
  }, [])

  return (
    <Container>
      <Image source={require('../../../assets/01.jpg')} />
      <Info style={{ height: heightt }}>
        <Gradient colors={['transparent', '#000']}/>
      </Info>
    </Container>
  )
}

export default Details
