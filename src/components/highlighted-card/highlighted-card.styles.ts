import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { colors } from '../../utils/colors'
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('screen')

export const Container = styled.TouchableOpacity`
  width: ${width / 1.9}px;
  height: ${(width / 2.1) * 2}px;
  padding: 0 10px;
  border-radius: 12px;
  margin-top: 50px;
`

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 78%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 10px;
`

export const Info = styled.View`
  padding: 10px;
  padding-top: 4px;
  align-items: center;
`

export const MovieImg = styled.Image`
  width: ${(width / 2.1) - 20}px;
  height: 100%;
  border-radius: 10px;
`

export const MivieTitile = styled.Text`
  font-size: 18px;
  color: ${colors.white01};
  margin-bottom: 4px;
`
