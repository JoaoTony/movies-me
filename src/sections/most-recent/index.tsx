import React, { FC } from 'react'

import {
  Container,
  Title, Row,
  SeeMore,
  IconSeeMore
} from './most-recent.styles'

import MostRecentList from './most-recent-list'
import { useNavigation, NavigationProp } from '@react-navigation/core'

import { whichTitle } from '../../utils/which-most-recent-title'

const MostRecent: FC<{ type: 'recent' | 'seen' }> = ({ type }) => {
  const navigation = useNavigation<NavigationProp<any>>()

  const handleShowAll = () => {
    navigation.navigate('Grid', { type })
  }

  return (
    <Container>
      <Row>
        <Title>{whichTitle(type)}</Title>
        <SeeMore activeOpacity={0.8} onPress={() => handleShowAll()}>
          <IconSeeMore source={require('../../../assets/next.png')}/>
        </SeeMore>
      </Row>
      <MostRecentList type={type}/>
    </Container>
  )
}

export default MostRecent
