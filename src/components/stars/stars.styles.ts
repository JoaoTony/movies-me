import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100px;
  height: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`

export const Star = styled.Image<{ type: boolean }>`
  width: ${({ type }) => !type ? '16px' : '18px'};
  height: ${({ type }) => !type ? '16px' : '18px'};
`
