/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'
import { FlatList, Dimensions, Animated } from 'react-native'
import MaskedView from '@react-native-community/masked-view'
import { Container, Image, Gradient } from './backdrop.styles'
import Svg, { Rect } from 'react-native-svg'
const { width, height } = Dimensions.get('screen')

export type BackdropProps = {
  data: any[]
  scrollX: any
}

const AnimatedSVG = Animated.createAnimatedComponent(Svg)

const Backdrop: FC<BackdropProps> = ({ data, scrollX }) => {
  return (
    <Container>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 2) * width * 0.65,
            (index - 1) * width * 0.65
          ]

          const outputRange = [-width, 0]

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange
          })

          if (!item.img) return null

          return (
            <MaskedView
              style={{ flex: 1, backgroundColor: 'transparent' }}
              maskElement={
                <AnimatedSVG
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                  style={{ transform: [{ translateX }] }}
                >
                  <Rect
                    x="0"
                    y="0"
                    width={width}
                    height={height}
                    fill="red"
                  />
                </AnimatedSVG>
              }
            >

              <Image source={item.img} style={{ resizeMode: 'cover' }} />
            </MaskedView>
          )
        }}
      />
      <Gradient colors={['transparent', '#fff']}/>

    </Container>
  )
}

export default Backdrop
