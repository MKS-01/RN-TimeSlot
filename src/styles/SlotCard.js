import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {WHITE, GRAY_LIGHT} from './colors';
import {Platform} from 'react-native';

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: ${scaleSize(15)}px ${scaleSize(10)}px;
  /* background-color: ${WHITE}; */

  background-color: ${(props) => (props.booked ? `${'#ef9a9a'}` : `${WHITE}`)};
  border-radius: ${scaleSize(5)}px;
  box-shadow: ${scaleSize(2)}px ${scaleSize(2)}px ${scaleSize(4)}px #dfdccd;
  border-width: ${Platform.OS === 'ios' ? '0px' : '1px'};
  border-color: ${GRAY_LIGHT};
  margin: ${scaleSize(10)}px 0;
`;

export const Text = styled.Text`
  font-size: ${scaleFont(16)}px;
  font-weight: 600;
  margin-left: ${scaleSize(10)}px;
  color: #616161;
`;
