import React, { FC } from 'react'

import {
  Container,
  Title, Row,
  SeeMore,
  IconSeeMore
} from './most-recent.styles'

import MostRecentList from './most-recent-list'

import { whichTitle } from './most-recent.utils'

const MostRecent: FC<{ type: 'recent' | 'seen' }> = ({ type }) => {
  return (
    <Container>
      <Row>
        <Title>{whichTitle(type)}</Title>
        <SeeMore activeOpacity={0.8}>
          <IconSeeMore source={require('../../../assets/next.png')}/>
        </SeeMore>
      </Row>
      <MostRecentList type={type}/>
    </Container>
  )
}

export default MostRecent
