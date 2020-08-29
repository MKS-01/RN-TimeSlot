import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {FONT_FAMILY_REGULAR} from './typography';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Touchable = styled.TouchableOpacity`
  margin-top: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.cardBackground};
  padding: ${scaleSize(10)}px;
  border-radius: ${scaleSize(5)}px;
`;
export const TouchableText = styled.Text`
  font-size: ${scaleFont(18)}px;
  color: #b71c1c;
  font-family: ${FONT_FAMILY_REGULAR};
  text-align: center;
`;

export const EmptyView = styled.View`
  height: ${scaleSize(30)}px;
  width: ${scaleSize(30)}px;
`;
