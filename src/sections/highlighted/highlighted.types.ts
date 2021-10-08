/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationProp } from '@react-navigation/native'

export type HighlightedProps = {
  id: string
  img: any
  title: string
  stars: number
  description: string
}

export interface SideSpacing {
  key: string
  id?: string
}

export type NavigationProps = {
  navigation: NavigationProp<any>
}
