import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/colors.json';

export const CardAndTransactionContainer = styled.View``;

export const CardContainer = styled(LinearGradient).attrs({
  colors: ['#1B647E', '#9CCFE2'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
`;

export const CardTopContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const CardBottomContainer = styled.View``;

export const TransactionsContainer = styled.View`
  margin-top: 20px;
`;

export const TransactionCardContainer = styled.View`
  margin-top: 12px;

  flex-direction: row;
  justify-content: space-between;

  align-items: center;
`;

export const LeftTransactionContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;

  align-items: center;
`;

export const IconTransactionContainer = styled(LinearGradient).attrs({
  colors: [Colors.blue, Colors.blueGray],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  width: 42px;
  height: 42px;
  margin-right: 8px;
  border-radius: 24px;

  align-items: center;
  justify-content: center;
`;

export const InformationTextTransactionContainer = styled.View`
  justify-content: space-between;
`;

export const CoinTransactionContainer = styled.View`
  width: 48px;
  height: 24px;

  padding-left: 5px;
  padding-right: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  background-color: ${Colors.gray};
`;

export const TabContainer = styled(LinearGradient).attrs({
  colors: [Colors.white, 'rgba(250, 251, 251, 0.80)'],
  start: {x: 0, y: 1},
  end: {x: 1, y: 0},
})`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 56px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const OptionTabContainer = styled.View`
  align-items: center;
`;
