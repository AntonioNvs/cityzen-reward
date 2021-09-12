import styled from 'styled-components/native';

import Colors from '../../styles/colors.json';

export const TopInfoContainer = styled.View`
  flex-direction: row;

  padding-left: 28px;
  padding-right: 28px;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const TopInfoCardContainer = styled.View``;

export const CardInfoItemsContainer = styled.View`
  border-width: 3px;
  border-color: ${Colors.blueGray};
  border-radius: 12px;

  padding: 8px;
  padding-bottom: 16px;

  justify-content: space-between;
  align-items: center;
`;

export const CardColumnContainer = styled.View`
  height: 180px;

  justify-content: space-between;
`;

export const ColumnsCardContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 40px;
`;

export const ItemInfoCardContainer = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const BottomInfoContainer = styled.View``;

export const LineBottomContainer = styled.View`
  flex-direction: row;
  margin-top: 24px;
`;

export const CardBottomInfoContainer = styled.View`
  width: 50%;

  padding: 12px;
  align-items: center;
`;

export const ButtonMapsContainer = styled.View`
  align-items: center;

  margin-bottom: 24px;
`;
