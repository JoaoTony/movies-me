import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
  width: ${width / 1.6}px;
  height: 350px;
  border: 2px solid #fff;
  border-width: 2px;
  border-radius: 6px;
`
