import React, { FC } from 'react'

import { Container, GoBackIcon } from './go-back-button.styles'
import { useNavigation } from '@react-navigation/core'

const GoBackButton: FC = () => {
  const navigation = useNavigation()

  const handleGoBack = (): void => navigation.goBack()

  return(
    <Container activeOpacity={0.8} onPress={() => handleGoBack()}>
      <GoBackIcon style={{ transform: [{ rotateY: '180deg' }] }} source={require('../../../assets/next.png')}/>
    </Container>
  )
}

export default GoBackButton