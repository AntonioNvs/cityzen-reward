import React, {useState, useEffect} from 'react';

import {PermissionsAndroid, Alert} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import {getPreciseDistance} from 'geolib';

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
  TabWarningContainer,
  TabWarningButtonsContainer,
} from './styles';

// Transformar segundos em texto no formato HH:MM:SS
function secondsToTimezone(seconds: number): string {
  return `${
    Math.floor(seconds / 3600) < 10
      ? `0${Math.floor(seconds / 3600)}`
      : Math.floor(seconds / 3600)
  }:${
    Math.floor((seconds % 3600) / 60) < 10
      ? `0${Math.floor((seconds % 3600) / 60)}`
      : Math.floor((seconds % 3600) / 60)
  }:${
    Math.floor(seconds % 60) < 10
      ? `0${Math.floor(seconds % 60)}`
      : Math.floor(seconds % 60)
  }`;
}

const Run: React.FC = () => {
  const [wasStarted, setWasStarted] = useState(false);
  const [position, setPosition] = useState<Geolocation.GeoPosition>(
    {} as Geolocation.GeoPosition,
  );
  const [informationHasBeenLoaded, setInformationHasBeenLoaded] =
    useState(false);
  const [watchId, setWatchId] = useState(0);
  const [distance, setDistance] = useState(0);
  const [loadWarning, setLoadWarning] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  // Informações iniciais
  useEffect(() => {
    requestLocationPermission().then(() =>
      // Obtendo a posição atual
      Geolocation.getCurrentPosition(
        position => {
          setPosition(position);
          setInformationHasBeenLoaded(true);
        },
        error => Alert.alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 2000, maximumAge: 0},
      ),
    );
  }, []);

  // Opacidade do background
  useEffect(() => {
    setBackgroundOpacity(loadWarning ? 0.9 : 1);
  }, [loadWarning]);

  // Atualização do estado da corrida
  function handleStateRun() {
    // Informação da posição atual tem que ser carregada primeiro
    if (!informationHasBeenLoaded) {
      return;
    }

    !wasStarted ? _start() : _stop();
  }

  function _start() {
    setWatchId(
      Geolocation.watchPosition(
        latPos => {
          // Atualizando a distância
          setDistance(dis => dis + calcDistance(latPos));
        },
        error => Alert.alert(JSON.stringify(error)),
        {
          enableHighAccuracy: true, // Uso de GPS ao invés de Wi-fi
          interval: 5000, // Intervalo máximo de atualização
          distanceFilter: 12, // Distância mínima (m) de atualização
        },
      ),
    );

    setWasStarted(true);
  }

  function _stop() {
    setLoadWarning(true);
  }

  // Se for confirmado o interrompimento da corrida, essa função é executada
  function stopWatching() {
    Geolocation.clearWatch(watchId); // Removendo o observador
    setWasStarted(false);
    setDistance(0);
  }

  // Cálculo da distância entre duas geolocalizações
  function calcDistance(currentPos: Geolocation.GeoPosition) {
    const dis = getPreciseDistance(
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      {
        latitude: currentPos.coords.latitude,
        longitude: currentPos.coords.longitude,
      },
    );

    setPosition(currentPos);

    return dis;
  }

  // Permissão de geolocalização
  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert(
          'Sem a permissão, não será possível usar a funcionalidade.',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <>
      <BackgroundWithHeader
        justifyContent="center"
        nameIcon="arrow-back"
        transparent={backgroundOpacity}>
        <RunMainContainer>
          <DistanceContainer>
            <TextComponent
              textAlign="center"
              fontSize={5.3}
              fontFamily="Lato-Bold">
              {
                // Transformando a distância 'm' em 'km'
                (distance / 1000).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })
              }
            </TextComponent>
            <TextComponent
              color={Colors.gray}
              fontSize={2.66}
              textAlign="center">
              km
            </TextComponent>
          </DistanceContainer>

          <TouchableOpacity onPress={handleStateRun}>
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
            <Cronometer started={wasStarted} />
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
      {
        // Carregar aviso
        loadWarning && (
          <TabRunWarning
            text={`Deseja realmente parar sua corrida? Você está ganhando ${
              distance / 2000
            } CT`}
            action={stopWatching}
            setLoadWarning={setLoadWarning}
          />
        )
      }
    </>
  );
};

interface TabWarningProps {
  text: string;
  action(): void;
  setLoadWarning: React.Dispatch<React.SetStateAction<boolean>>;
}

const TabRunWarning: React.FC<TabWarningProps> = ({
  text,
  action,
  setLoadWarning,
}) => {
  return (
    <TabWarningContainer>
      <TextComponent textAlign="center" color={Colors.black} fontSize={1.5}>
        {text}
      </TextComponent>

      <TabWarningButtonsContainer>
        <TouchableOpacity
          onPress={() => {
            action();
            setLoadWarning(false);
          }}>
          <TextComponent textAlign="center" fontSize={1.5} color={Colors.gray}>
            Sim
          </TextComponent>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setLoadWarning(false)}>
          <TextComponent textAlign="center" fontSize={1.5} color={Colors.gray}>
            Não
          </TextComponent>
        </TouchableOpacity>
      </TabWarningButtonsContainer>
    </TabWarningContainer>
  );
};

interface CronometerProps {
  started: boolean;
}

const Cronometer: React.FC<CronometerProps> = ({started}) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (started) {
      interval = setInterval(() => {
        setSeconds(sec => sec + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }

    return () => clearInterval(interval);
  }, [started, seconds]);

  return (
    <TextComponent
      textAlign="center"
      fontSize={2}
      fontFamily="Lato-Bold"
      color={Colors.blueGray}>
      {secondsToTimezone(seconds)}
    </TextComponent>
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
