import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {GRAY_LIGHT} from './colors';
import {WINDOW_WIDTH} from './mixins';

export const Input = styled.TextInput`
  border-color: ${GRAY_LIGHT};
  border-width: 1px;
  border-radius: 4px;
  padding: ${scaleSize(15)}px ${scaleSize(10)}px;
  margin: ${scaleSize(5)}px 0;
`;

export const BTNContainer = styled.View`
  flex-direction: row;
  margin: ${scaleSize(50)}px 0;
  justify-content: space-between;
`;

export const TouchableBTN = styled.TouchableOpacity`
  padding: ${scaleSize(15)}px 0;
  width: ${WINDOW_WIDTH / 2 - 30}px;
  background-color: ${(props) =>
    props.type === 'SAVE' ? '#2e7d32' : '#b71c1c'};
  border-radius: 3px;
`;

export const Text = styled.Text`
  font-size: ${scaleFont(15)}px;
  color: #fff;
  text-align: center;
  font-weight: 600;
`;
