import React from 'react';

import BackgroundWithHeader from '../../components/BackgroundWithHeader/BackgroundWithHeader';

import {NameText} from './styles';

const Dashboard: React.FC = () => (
  <BackgroundWithHeader nameIcon="menu">
    <NameText>Antônio Neves</NameText>
  </BackgroundWithHeader>
);

export default Dashboard;
