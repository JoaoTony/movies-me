import React, { FC, useState, useEffect  } from 'react'
import { FlatList } from 'react-native'
import { Container, Header, Title } from './most-recent-grid.styles'
import GoBackButton from '../../components/go-back-button'
import { useRoute, RouteProp } from '@react-navigation/core'
import { NowPlaying, NowPlayingResult } from '../../types/api.types'

import { whichTitle } from '../../utils/which-most-recent-title'

import MostRecentCard from '../../components/most-recent-card'
import { getFetcher } from '../../services/fetcher'

const MostRecentGrid: FC = () => {
  const route = useRoute()
  const [data, setData] = useState<NowPlayingResult[]>([])

  const { params } = route as RouteProp<any>

  useEffect(() => {
    getFetcher<NowPlaying>(params?.type === 'seen' ? 'popular' : 'top_rated').then(res => {
      setData(res.data.results)
    })

  }, [])

  return ( 
    <Container>
      <Header>
        <GoBackButton />
        <Title>{whichTitle(params?.type)}</Title>
      </Header>
      <FlatList
        data={data}
        key={'#'}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MostRecentCard 
            cardSize="large"
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            overview={item.overview}
            vote_average={item.vote_average / 2}
            genre_ids={item.genre_ids}
            release_date={item.release_date}      
          />)
        }
      />
    </Container>  
  )
}

export default MostRecentGrid