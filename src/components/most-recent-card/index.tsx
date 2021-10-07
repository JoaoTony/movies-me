/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { Container, Title, Img } from './most-recent-card.styles'

import { MostRecntCardProps } from './most-recent-card.types'

const MostRecentCard: FC<MostRecntCardProps> = ({ title, img }) => {
  return (
    <Container activeOpacity={0.8}>
      <Img source={img}/>
      <Title numberOfLines={1}>{title}</Title>
    </Container>
  )
}

export default MostRecentCard
