import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {WHITE, GRAY_LIGHT} from './colors';
import {Platform} from 'react-native';

export const Card = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${scaleSize(15)}px ${scaleSize(10)}px;
  background-color: ${WHITE};
  border-radius: ${scaleSize(5)}px;
  box-shadow: ${scaleSize(5)}px ${scaleSize(5)}px ${scaleSize(10)}px #dfdccd;
  border-width: ${Platform.OS === 'ios' ? '0px' : '1px'};
  border-color: ${GRAY_LIGHT};
`;

export const Text = styled.Text`
  font-size: ${scaleFont(16)}px;
  font-weight: 600;
  margin-left: ${scaleSize(10)}px;
  color: #616161;
`;
