import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { colors } from '../../utils/colors'

const { width } = Dimensions.get('screen')

export const Header = styled.View`
  width: ${width - 24}px;
  height: 60px;
  
  border-radius: 6px;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 60px;
  flex-direction: row;
  justify-content: space-between;
`
export const Logo = styled.Text`
  font-size: 20px;
  font-weight: 900;
  color: ${colors.red01};
`

export const Search = styled.TouchableOpacity`
  width: auto;
  height: auto;
`
export const SearchIcon = styled.Image`
  width: 30px;
  height: 30px;
`
