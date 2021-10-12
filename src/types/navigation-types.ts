interface IObject {
  description: string
  img: any
  stars: number
  title: string,
  release_date?: string
  genre_ids: Array<number>
}

export interface IRoute {
  key: string
  name: string
  params: IObject
  path: any
}
