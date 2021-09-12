import React from 'react';

import {TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors.json';

interface ButtonComponentProps {
  action(): void;
  width: number;
  height: number;
  type: 'linear' | 'solid';
  primaryColor: string;
  secondaryColor?: string;
  borderRadius: number;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  action,
  width,
  height,
  type,
  primaryColor,
  secondaryColor,
  borderRadius,
  children,
  ...rest
}) => {
  return (
    <>
      {type === 'solid' ? (
        <TouchableOpacity
          onPress={action}
          style={{
            width,
            height,
            borderRadius,
            backgroundColor: primaryColor,
            ...rest,
          }}>
          {children}
        </TouchableOpacity>
      ) : (
        <LinearGradient
          colors={[primaryColor, secondaryColor || Colors.white]}
          useAngle={true}
          style={{
            width,
            height,
            borderRadius,
          }}>
          <TouchableOpacity
            onPress={action}
            style={{
              flex: 1,
              ...rest,
            }}>
            {children}
          </TouchableOpacity>
        </LinearGradient>
      )}
    </>
  );
};

export default ButtonComponent;
