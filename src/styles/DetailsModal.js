import styled from 'styled-components/native';
import {scaleSize, scaleFont} from './mixins';
import {GRAY_LIGHT} from './colors';

export const Input = styled.TextInput`
  border-color: ${GRAY_LIGHT};
  border-width: 1px;
  border-radius: 4px;
  padding: ${scaleSize(15)}px ${scaleSize(10)}px;
  margin: ${scaleSize(5)}px 0;
`;
