import styled from 'styled-components/native'

export const Container = styled.View`

  height: 18px;
  flex-direction: row;
  align-items: center;

  margin-top: 2px;
`

export const Star = styled.Image<{ type: boolean }>`
  width: ${({ type }) => !type ? '14px' : '16px'};
  height: ${({ type }) => !type ? '14px' : '16px'};
`
