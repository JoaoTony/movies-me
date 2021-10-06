export const whichIcon = (name: string, focused: boolean): any => {
  if (name === 'Home') {
    return focused ? require('../../assets/home01.png') : require('../../assets/home02.png')
  }
  if (name === 'Favorite') {
    return focused ? require('../../assets/favorite01.png') : require('../../assets/favorite02.png')
  }
  return focused ? require('../../assets/user01.png') : require('../../assets/user02.png')
}
