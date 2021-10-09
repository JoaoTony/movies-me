import React, { FC } from 'react'
import { FlatList } from 'react-native'
import { Container, Header, Title } from './most-recent-grid.styles'
import GoBackButton from '../../components/go-back-button'
import { useRoute, RouteProp } from '@react-navigation/core'

import { whichTitle } from '../../utils/which-most-recent-title'
import { data } from '../../constants/fake-data'

import MostRecentCard from '../../components/most-recent-card'

const MostRecentGrid: FC = () => {
  const route = useRoute()

  const { params } = route as RouteProp<any>

  console.log(params?.type)

  return ( 
    <Container>
      <Header>
        <GoBackButton />
        <Title>{whichTitle(params?.type)}</Title>
      </Header>
      <FlatList
        data={data}
        key={'#'}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MostRecentCard 
            img={item.img} 
            title={item.title}
            description={item.description}
            stars={item.stars}
            cardSize="large"         
          />)
        }
      />
    </Container>  
  )
}

export default MostRecentGrid