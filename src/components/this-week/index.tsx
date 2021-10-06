/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useRef, useState, useEffect } from 'react'
import { FlatList, Dimensions, Animated, View, MaskedViewComponent, TouchableOpacity } from 'react-native'
import { NavigationProp } from '@react-navigation/native'

import Backdrop from '../backdrop-card'

import Card from '../card'
import { data as apiData } from '../../constants/fake-data'
import { Container } from './this-week.styles'

const { width } = Dimensions.get('screen')
const SPACING_ITEM_SIZE = (width - width * 65 / 100) / 2

const ThisWeek: FC<{ navigation?: any }> = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData([{ key: 'left-spacing' }, ...apiData, { key: 'right-spacing' }])
  }, [])

  return (
    <Container>
      <Backdrop data={apiData} scrollX={scrollX}/>
      <Animated.FlatList
        data={data}
        horizontal
        style={{ flexDirection: 'row' }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', flexDirection: 'row' }}
        keyExtractor={item => item.id}
        snapToInterval={width * 65 / 100}
        decelerationRate={0}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={18}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * width * 65 / 100,
            (index - 1) * width * 65 / 100,
            index * width * 65 / 100
          ]
          const outputRange = [0, -50, 0]

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange
          })

          if (!item.id) {
            return <View style={{ width: SPACING_ITEM_SIZE - 8 }} />
          }

          return (
            <Animated.View style={{
              width: width * 65 / 100,
              transform: [{ translateY }]
            }}
            key={item.id}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate('Detalhes', {
                    img: item.img,
                    title: item.title,
                    stars: item.stars,
                    descriptiopn: item.description
                  })
                }}>
                <Card
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  descriptiopn={item.description}
                  stars={item.stars}
                />
              </TouchableOpacity>
            </Animated.View>
          )
        }}
      />
    </Container>
  )
}
export default ThisWeek
