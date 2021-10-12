import React, { FC, useState, useEffect } from 'react'
import { FlatList } from 'react-native'

import MostRecentCard from '../../components/most-recent-card'
import { NowPlaying, NowPlayingResult } from '../../types/api.types'
import { getFetcher } from '../../services/fetcher'

const MostRecentList: FC<{ type: 'recent' | 'seen' }> = ({ type }) => {
  const [data, setData] = useState<NowPlayingResult[]>([])

  useEffect(() => {
    getFetcher<NowPlaying>(type === 'seen' ? 'popular' : 'top_rated').then(res => {
      setData(res.data.results)
    })

  }, [])

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <MostRecentCard
          key={item.id}
          title={item.title}
          poster_path={item.poster_path}
          overview={item.overview}
          vote_average={item.vote_average / 2}
          genre_ids={item.genre_ids}
          release_date={item.release_date}
        />
      )}
    />
  )
}

export default MostRecentList
