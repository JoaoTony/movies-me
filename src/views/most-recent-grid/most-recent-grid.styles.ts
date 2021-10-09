import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../utils/colors";

const { width } = Dimensions.get('screen')

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.dark};
  padding: 0 10px;
` 

export const Header = styled.View`
  width: ${width - 20}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding-bottom: 20px;
`

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 900;
  color: ${colors.red01};
  margin: 0 auto;
`
