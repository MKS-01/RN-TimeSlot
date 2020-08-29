import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {WHITE} from './colors';

export const Card = styled.View`
  width: 100%;
  height: ${scaleSize(60)}px;
  background-color: ${WHITE};

  border-radius: ${scaleSize(5)}px;
  box-shadow: ${scaleSize(5)}px ${scaleSize(5)}px ${scaleSize(10)}px #dfdccd;
  /* elevation: 1; */
`;
