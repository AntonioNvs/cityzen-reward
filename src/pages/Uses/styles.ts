import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/colors.json';
import {Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

export const TopPageContainer = styled.View`
  margin-bottom: 24px;
`;

export const SimbolCircleContainer = styled(LinearGradient).attrs({
  colors: [Colors.white, 'rgba(250, 251, 251, 0)'],
  start: {x: 0.5, y: 0.5},
  end: {x: 0.5, y: 0.9},
})`
  width: 240px;
  height: 240px;
  margin-bottom: 12px;

  border-radius: 120px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const InsideCircleContainer = styled(LinearGradient).attrs({
  colors: ['rgba(6, 7, 10, 0.96)', 'rgba(6, 7, 10, 0.90)'],
})`
  width: 236px;
  height: 236px;

  border-radius: 118px;

  align-items: center;
  justify-content: center;
`;

export const BottomPageContainer = styled.View`
  margin-bottom: 64px;
`;

export const DescriptionContainer = styled.View`
  height: 64px;

  justify-content: space-between;
`;

export const LineItemsContainer = styled.View`
  width: 100%;
  padding: 24px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ItemContainer = styled.View`
  align-items: center;
  justify-content: space-around;

  height: 96px;
`;

export const TabNFCContainer = styled.View`
  position: absolute;

  top: ${screenHeight / 2 - 200}px;
  margin: auto;
  align-self: center;

  width: 60%;
  height: 280px;

  padding: 8px;
  border-radius: 12px;

  justify-content: center;
  align-items: center;
  background-color: ${Colors.black};
`;
