import styled from 'styled-components/native'
import { colors } from '../../utils/colors'

export const Container = styled.TouchableOpacity`
  margin: 8px;
  width: 110px;
`

export const Img = styled.Image`
  width: 110px;
  height: 160px;
  border-radius: 8px;
`

export const Title = styled.Text`
  font-size: 14px;
  color: ${colors.gray02};
  margin-top: 10px;
`
