
import styled from 'styled-components/native'
import { colors } from '../../utils/colors'
import { Dimensions, Animated } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark};
`
export const Image = styled(Animated.Image)`
  width: ${width}px;
  height: ${height}px;
  margin-top: 0;
`
export const GoBack = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`

export const GobackGradient = styled(LinearGradient)`
  width: 100%;
  height: 100px;
  padding-left: 10px;
  padding-top: 50px;
  position: absolute;
  z-index: 5;
`

export const GoBackIcon = styled.Image`
  width: 24px;
  height: 24px;
`

export const Info = styled(Animated.View)`
  width: ${width}px;
  height: ${height}px;
  position: absolute;
  bottom: 0;
`

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`

export const GradientContent = styled(Animated.View)`
  width: ${width}px;
  padding: 10px;
  padding-bottom: 40px;
`

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 900;
  color: ${colors.red01};
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
