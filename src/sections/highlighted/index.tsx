import React, { FC, useRef, useState, useEffect } from 'react'
import { Dimensions, Animated, View } from 'react-native'
import { Container } from './highlighted.styles'
import HighlightedCard from '../../components/highlighted-card'
import { HighlightedProps, DataFiltered } from './highlighted.types'
import { getFetcher } from '../../services/fetcher'
import { OnlyExtremeSpacing } from './highlighted.utils'

import { NowPlaying, NowPlayingResult } from '../../types/api.types'

import { data as fakeData } from '../../constants/fake-data'

const { width } = Dimensions.get('screen')
const SPACING_ITEM_SIZE = (width / 1.9) / 2.5

const Highlighted: FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current
  const [data, setData] = useState<NowPlayingResult[]>([])
  const [dataa, setDataa] = useState<any>([])
  
  useEffect(() => {

    getFetcher<NowPlaying>('now_playing').then(res => {
      setData(res.data.results)
      console.log(res.data.results[0])
    })

  }, [])
  

  console.log(data)

  return (
    <Container>
      <Animated.FlatList
        data={[OnlyExtremeSpacing,...data, OnlyExtremeSpacing]}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width / 1.9}
        decelerationRate={0}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={3}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * width / 1.9,
            (index - 1) * width / 1.9,
            index * width / 1.9
          ]
          const outputRange = [0, -50, 0]

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange
          })

          if (item.title === 'OnlyExtremeSpacing') {
            return <View key={Math.floor(Math.random() * 10000)} style={{ width: SPACING_ITEM_SIZE - 10, marginHorizontal: 10 }} />
          } 
          return (
            <Animated.View
              style={{
                transform: [{ translateY }]
              }}
              key={item.id.toString()}
            >
              <HighlightedCard
                backdrop_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
                overview={item.overview}
                release_date={item.release_date}
                genre_ids={item.genre_ids}
              />
            </Animated.View>
          )
        }}
      />

    </Container>
  )
}

export default Highlighted
