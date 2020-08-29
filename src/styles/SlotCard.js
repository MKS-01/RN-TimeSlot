import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {WHITE, GRAY_LIGHT} from './colors';
import {Platform} from 'react-native';

export const Card = styled.View`
  width: 100%;
  height: ${scaleSize(60)}px;
  background-color: ${WHITE};
  border-radius: ${scaleSize(5)}px;
  box-shadow: ${scaleSize(5)}px ${scaleSize(5)}px ${scaleSize(10)}px #dfdccd;
  border-width: ${Platform.OS === 'ios' ? '0px' : '1px'};
  border-color: ${GRAY_LIGHT};
`;
