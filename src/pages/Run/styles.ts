import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import Colors from '../../styles/colors.json';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

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

export const TabWarningContainer = styled.View`
  position: absolute;

  top: ${screenHeight / 2 - 100}px;
  margin: auto;
  align-self: center;

  width: 80%;
  height: 156px;

  padding: 16px;
  border-radius: 12px;

  justify-content: space-between;

  background-color: ${Colors.white};
`;

export const TabWarningButtonsContainer = styled.View`
  flex-direction: row;

  padding-right: 32px;
  padding-left: 32px;

  justify-content: space-between;
  align-items: center;
`;
