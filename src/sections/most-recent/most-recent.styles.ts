import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { colors } from '../../utils/colors'

const { width } = Dimensions.get('screen')

export const Container = styled.View`
  width: ${width}px;
  margin-bottom: 20px;
`

export const Row = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.white01};
`

export const SeeMore = styled.TouchableOpacity`
`

export const IconSeeMore = styled.Image`
  width: 22px;
  height: 22px;
`
