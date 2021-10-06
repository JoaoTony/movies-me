/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { Header as Container, Logo, Search, SearchIcon } from './header-home.styles'

const HeaderHome: FC = () => {
  return (
    <Container>
      <Logo>MVM</Logo>
      <Search>
        <SearchIcon source={require('../../../assets/search.png')}/>
      </Search>
    </Container>
  )
}

export default HeaderHome
