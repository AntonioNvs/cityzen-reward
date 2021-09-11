import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors.json';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from './styles';

interface BackgroundWithHeaderProps {
  nameIcon: 'menu' | 'arrow-back';
}

const BackgroundWithHeader: React.FC<BackgroundWithHeaderProps> = ({
  nameIcon,
  children,
  ...rest
}) => {
  return (
    <LinearGradient
      colors={[Colors.black, 'rgba(6, 7, 10, 0.88)']}
      style={{flex: 1, ...rest}}>
      <Header>
        <MaterialIcons name={nameIcon} size={24} color={Colors.white} />
      </Header>
      {children}
    </LinearGradient>
  );
};

export default BackgroundWithHeader;
