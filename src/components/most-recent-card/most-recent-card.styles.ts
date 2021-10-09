import styled from 'styled-components/native'
import { colors } from '../../utils/colors'

import { Size } from './most-recent-card.types'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

export const Container = styled.TouchableOpacity<Size>`
  margin: 8px;
  width: ${({ size }) => size === 'large' ? `${width / 2 - 26 }px` : '110px'};
  margin-bottom: ${({ size }) => size === 'large' ? `20px` : 0};
`

export const Img = styled.Image<Size>`
  width: 100%;
  height: ${({ size }) => size === 'large' ? `${(width - 140)}px` : '160px'};
  border-radius: 8px;
`

export const Title = styled.Text<Size>`
  font-size: ${({ size }) => size === 'large' ? '18px' : '14px'};
  color: ${colors.gray02};
  margin-top: 10px;
`
