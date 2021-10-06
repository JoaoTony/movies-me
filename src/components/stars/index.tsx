/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react'

import { Container, Star } from './stars.styles'

const stars = [1, 2, 3, 4, 5]
const Enable = require('../../../assets/enable.png')
const Disable = require('../../../assets/disable.png')

const Stars: FC <{ star: number }> = ({ star }) => (
  <Container>
    {stars.map(item => <Star type={item <= star} key={item.toString()} source={item <= star ? Enable : Disable}/>)}
  </Container>
)

export default Stars
