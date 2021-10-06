import styled from 'styled-components/native'

import MaskedView from '@react-native-community/masked-view'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
  position: absolute;
  width: ${width}px;
  height: ${height * 0.6}px;
  background-color: #1F1032;
`

export const Gradient = styled(LinearGradient)`
  position: absolute;
  width: ${width}px;
  height: ${height * 0.6}px;
  bottom: 0;
`

export const Image = styled.Image`
  width: ${width}px;
  height: ${height * 0.6}px;

`
