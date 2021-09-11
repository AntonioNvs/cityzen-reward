import React from 'react';

import {Text} from 'react-native';
import Colors from '../../styles/colors.json';

interface TextComponentProps {
  fontSize?: 1 | number;
  color?: string;
  fontFamily?: 'Lato-Regular' | 'Lato-Bold';
  textAlign: 'right' | 'center' | 'left';
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  margin?: number;
}

const TextComponent: React.FC<TextComponentProps> = ({
  fontSize,
  color,
  fontFamily,
  textAlign,
  children,
  ...rest
}) => {
  // Responsividade na propriedade de tamanho da fonte do texto
  fontSize = (fontSize || 1) * 12;

  return (
    <Text
      style={{
        fontSize: fontSize,
        color: color || Colors.white,
        fontFamily: fontFamily || 'Lato-Regular',
        textAlign: textAlign,
        ...rest,
      }}>
      {children}
    </Text>
  );
};

export default TextComponent;
