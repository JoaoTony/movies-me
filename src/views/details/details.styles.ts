
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
  justify-content: flex-end;
`

export const GradientContent = styled.View`
  width: ${width}px;
  height: 50%;
  padding: 10px;
`

export const Title = styled.Text`
  font-size: 22px;
  color: ${colors.white01};
  margin-bottom: 2px;

`

export const Date = styled.Text`
  font-size: 14px;
  color: ${colors.white01};
`

export const Classification = styled.Text`
  font-size: 12px;
  color: ${colors.white01};
  margin: 4px 0;
`

export const Description = styled.Text`
  font-size: 16px;
  color: ${colors.gray02};
  margin-top: 6px;
`
