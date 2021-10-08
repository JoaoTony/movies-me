/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  createContext,
  useState,
  useCallback,
  useContext
} from 'react'
import { IObject, InitialData, INavigationContext } from './contex.types'

const Context = createContext(InitialData)

export const NavigationContext: FC = props => {
  const { children } = props
  const [infoData, setInfoDate] = useState(InitialData.infoData)

  const handleInfoData = useCallback((newObj: IObject) => {
    setInfoDate(newObj)
  }, [])

  return (
    <Context.Provider value={{ infoData, handleInfoData }}>
      {children}
    </Context.Provider>
  )
}

export const useNavigationContext = (): INavigationContext => useContext(Context)
