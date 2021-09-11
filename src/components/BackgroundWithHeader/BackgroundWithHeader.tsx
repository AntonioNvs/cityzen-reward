import React, {useState, useEffect} from 'react';

import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/colors.json';
import {useNavigation} from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from './styles';

interface BackgroundWithHeaderProps {
  nameIcon: 'menu' | 'arrow-back';
  justifyContent: 'space-between' | 'center';
  transparent?: number;
}

const BackgroundWithHeader: React.FC<BackgroundWithHeaderProps> = ({
  nameIcon,
  children,
  justifyContent,
  transparent,
}) => {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: -100}));
  const [opacity] = useState(new Animated.Value(0));
  const [load, setLoad] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (load) {
      Animated.parallel([
        Animated.spring(offset.y, {
          toValue: 120,
          speed: 10000,
          bounciness: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 10,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(offset.y, {
          toValue: 0,
          speed: 2,
          bounciness: 0,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    }

    navigation.addListener('focus', () => setLoad(false));
    navigation.addListener('blur', () => setLoad(true));
  }, [load, navigation, opacity, offset]);

  function handlePageWithIcon() {
    if (nameIcon === 'arrow-back') {
      navigation.goBack();
    }
  }

  return (
    <LinearGradient
      colors={[Colors.black, 'rgba(6, 7, 10, 0.88)']}
      style={{
        flex: 1,
        opacity: transparent || 1,
      }}>
      <Header>
        <TouchableOpacity
          onPress={handlePageWithIcon}
          style={styles.touchableOpacity}>
          <MaterialIcons name={nameIcon} size={24} color={Colors.white} />
        </TouchableOpacity>
      </Header>
      <Animated.View
        style={[
          styles.viewAnimated,
          {
            opacity: opacity,
            transform: [{translateY: offset.y}],
            justifyContent,
          },
        ]}>
        {children}
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  viewAnimated: {
    flex: 1,
    marginHorizontal: 16,
  },
  touchableOpacity: {
    width: 32,
    height: 32,
  },
});

export default BackgroundWithHeader;
