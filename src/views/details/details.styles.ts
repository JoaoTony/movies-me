
import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { Dimensions, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
`
export const Image = styled.Image`
  width: ${width}px;
  height: ${height}px;
`

export const Info = styled(Animated.View)`
  width: ${width}px;

  position: absolute;
  bottom: 0;
`

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
`
