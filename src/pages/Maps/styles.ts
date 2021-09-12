import styled from 'styled-components/native';
import Colors from '../../styles/colors.json';

export const MarkerContainer = styled.View``;

export const TrianglePointCard = styled.View`
  width: 0;
  height: 0;

  margin: auto;

  background-color: transparent;
  border-style: solid;
  border-top-width: 12px;
  border-right-width: 12px;
  border-bottom-width: 0px;
  border-left-width: 12px;
  border-top-color: ${Colors.red};
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
`;

export const CardMap = styled.View`
  background-color: ${Colors.red};

  border-radius: 12px;
  width: 120px;
  height: 80px;

  justify-content: space-between;
`;
