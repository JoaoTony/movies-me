import React, { FC } from 'react'
import { FlatList } from 'react-native'

import { data } from '../../constants/fake-data'
import MostRecentCard from '../../components/most-recent-card'

const MostRecentList: FC<{ type: 'recent' | 'seen' }> = ({ type }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <MostRecentCard
          key={item.id}
          title={item.title}
          img={item.img}
          description={item.description}
          stars={item.stars}
        />
      )}
    />
  )
}

export default MostRecentList
