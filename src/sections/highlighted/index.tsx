import React, { FC, useRef, useState, useEffect } from 'react'
import { Dimensions, Animated, View } from 'react-native'
import { Container } from './highlighted.styles'
import HighlightedCard from '../../components/highlighted-card'
import { HighlightedProps } from './highlighted.types'

import { data as fakeData } from '../../constants/fake-data'

const { width } = Dimensions.get('screen')
const SPACING_ITEM_SIZE = (width / 1.9) / 2.5

const Highlighted: FC = () => {
  const scrollX = useRef(new Animated.Value(0)).current
  const [data, setData] = useState<HighlightedProps[] | any[]>([])

  useEffect(() => {
    setData([{ key: 'left-spacing' }, ...fakeData, { key: 'right-spacing' }])
  }, [])

  return (
    <Container>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width / 1.9}
        decelerationRate={0}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={18}
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

          if (!item.id) {
            return <View style={{ width: SPACING_ITEM_SIZE - 10, marginHorizontal: 10 }} />
          }
          return (
            <Animated.View
              style={{
                transform: [{ translateY }]
              }}
              key={item.id.toString()}
            >
              <HighlightedCard
                img={item.img}
                title={item.title}
                stars={item.stars}
                description={item.description}
              />
            </Animated.View>
          )
        }}
      />

    </Container>
  )
}

export default Highlighted
