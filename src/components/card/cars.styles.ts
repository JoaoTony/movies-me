import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')

export const Container = styled.View`
  width: ${width * 65 / 100}px;
  height: auto;
  border-radius: 16px;
  padding: 10px;
  margin: 10px !important;
  margin-top: 100px;
`

export const CardImg = styled.Image`
  width: 100%;
  height:  ${height / 2.5}px;
  border-radius: 12px;
`

export const CardTitle = styled.Text`
  font-size: 20px;
  color: #000;
  margin-top: 10px;
  margin-left: 10px;
`

export const CardDescription = styled.Text`
  font-size: 16px;
  color: #606060;
  margin-left: 10px;
  margin-top: 6px;
`

export const StarsWrapper = styled.View`
  margin-left: 10px;
`
