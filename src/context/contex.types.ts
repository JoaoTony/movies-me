/* eslint-disable @typescript-eslint/no-empty-function */
export interface IObject {
  id: string
  img: any
  title: string
  stars: number
  description: string
}

export interface INavigationContext {
  infoData: IObject
  handleInfoData: (newObj: IObject) => void
}

export const InitialData: INavigationContext = {
  infoData: {
    id: '',
    img: '',
    title: '',
    stars: 0,
    description: ''
  },
  handleInfoData: () => {}
}
