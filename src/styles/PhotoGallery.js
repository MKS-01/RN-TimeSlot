import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {GRAY_LIGHT} from './colors';

export const Text = styled.Text`
  font-size: ${scaleFont(20)}px;
  font-weight: 600;
  color: #212121;
`;

export const Container = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  padding: ${scaleSize(15)}px ${scaleSize(20)}px;
  background-color: #2e7d32;
  border-radius: 10px;
`;

export const BtnText = styled.Text`
  font-size: ${scaleFont(20)}px;
  font-weight: 600;
  color: #fafafa;
`;
