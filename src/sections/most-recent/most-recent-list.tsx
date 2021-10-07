/* eslint-disable @typescript-eslint/no-unused-vars */
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
        <MostRecentCard title={item.title} img={item.img}/>
      )}
    />
  )
}

export default MostRecentList
