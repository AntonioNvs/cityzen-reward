import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import Colors from '../../styles/colors.json';

const screenWidth = Dimensions.get('screen').width;

export const RunMainContainer = styled.View`
  position: absolute;
  top: ${screenWidth * 0.2}px;

  width: 100%;
  height: 60%;

  align-items: center;
  justify-content: space-between;
`;

export const DistanceContainer = styled.View``;

export const TextTimeContainer = styled.View``;

export const InformationTextContainer = styled.View`
  position: absolute;

  bottom: 0;
  width: 100%;
  margin-bottom: 16px;
  justify-content: center;
`;
