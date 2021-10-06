/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { FlatList } from 'react-native'
import { Container } from './highlighted.styles'
import HighlightedCard from '../../components/highlighted-card'

import { data } from '../../constants/fake-data'

const Highlighted: FC = () => {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <HighlightedCard
              img={item.img}
              title={item.title}
              stars={item.stars}
            />
          )
        }}
      />

    </Container>
  )
}

export default Highlighted
