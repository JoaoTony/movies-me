/* eslint-disable @typescript-eslint/no-unused-vars */
import {  NowPlayingResult } from '../../types/api.types'

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


export interface DataFiltered {
  item: NowPlayingResult
  index: number
}