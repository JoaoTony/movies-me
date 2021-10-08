interface IObject {
  description: string
  img: any
  stars: number
  title: string
}

export interface IRoute {
  key: string
  name: string
  params: IObject
  path: any
}
