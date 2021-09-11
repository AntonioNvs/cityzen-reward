import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import BackgroundWithHeader from '../../components/BackgroundWithHeader/BackgroundWithHeader';
import TextComponent from '../../components/TextComponent/TextComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/colors.json';

import {
  DistanceContainer,
  RunMainContainer,
  TextTimeContainer,
  InformationTextContainer,
} from './styles';

const Run: React.FC = () => {
  const [wasStarted, setWasStarted] = useState(false);

  function handleState() {
    setWasStarted(_ => !_);
  }

  return (
    <BackgroundWithHeader justifyContent="center" nameIcon="arrow-back">
      <RunMainContainer>
        <DistanceContainer>
          <TextComponent
            textAlign="center"
            fontSize={5.3}
            fontFamily="Lato-Bold">
            0.00
          </TextComponent>
          <TextComponent color={Colors.gray} fontSize={2.66} textAlign="center">
            km
          </TextComponent>
        </DistanceContainer>

        <TouchableOpacity onPress={handleState}>
          <LinearGradient
            colors={
              !wasStarted
                ? [Colors.green, 'rgba(33, 150, 83, 0.35)']
                : [Colors.red, 'rgba(235, 87, 87, 0.35)']
            }
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.buttonInitOrStop}>
            <MaterialIcons
              name={!wasStarted ? 'play-arrow' : 'stop'}
              size={30}
              color={Colors.white}
            />
          </LinearGradient>
        </TouchableOpacity>

        <TextTimeContainer>
          <TextComponent
            textAlign="center"
            fontSize={2}
            fontFamily="Lato-Bold"
            color={Colors.blueGray}>
            00:00:00
          </TextComponent>
          <TextComponent
            textAlign="center"
            fontSize={1.1}
            color={Colors.blueGray}>
            Tempo decorrido
          </TextComponent>
        </TextTimeContainer>
      </RunMainContainer>

      <InformationTextContainer>
        <TextComponent textAlign="center" color={Colors.gray}>
          1km = 0.5 citizen coin
        </TextComponent>
      </InformationTextContainer>
    </BackgroundWithHeader>
  );
};

const styles = StyleSheet.create({
  buttonInitOrStop: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Run;
