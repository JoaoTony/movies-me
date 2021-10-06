
import styled from 'styled-components/native'
import { colors } from '../../utils/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark};
  justify-content: flex-start;
  align-items: center;
`
export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const BText = styled.Text`
  font-size: 16px;
  color: #606060;
`
