export interface Size {
  size?: 'large' | 'smal'
}

export type MostRecntCardProps = {
  img: any
  title: string
  description: string
  stars: number
  cardSize?: 'large' | 'smal'
}
