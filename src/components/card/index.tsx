/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { SharedElement } from 'react-navigation-shared-element'
import { Container, CardImg, CardTitle, CardDescription, StarsWrapper } from './cars.styles'
import { CardProps } from './card.types'
import Stars from '../stars'
import { View } from 'react-native'

const Card: FC<CardProps> = ({ img, title, id, descriptiopn, stars }) => (
  <Container>
    <View style={{ padding: 10, backgroundColor: '#fff', borderRadius: 16 }}>
      <SharedElement id={id}>
        <CardImg source={img}/>
      </SharedElement>
      <CardTitle numberOfLines={1}>{title}</CardTitle>
      <StarsWrapper>
        <Stars star={stars}/>
      </StarsWrapper>
      <CardDescription numberOfLines={3}>{descriptiopn}</CardDescription>
    </View>
  </Container>
)

export default Card
