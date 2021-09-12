import React, {useState, useEffect} from 'react';

import {Alert} from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import {requestLocationPermission} from '../../code/requestPermission';
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
  const [position, setPosition] = useState<Geolocation.GeoPosition[]>([]);
  const [watchId, setWatchId] = useState(0);
  const [distance, setDistance] = useState(0);
  const [loadWarning, setLoadWarning] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  // Permissão
  useEffect(() => {
    requestLocationPermission().then(() => {});
  }, []);

  // Opacidade do background
  useEffect(() => {
    setBackgroundOpacity(loadWarning ? 0.9 : 1);
  }, [loadWarning]);

  // Atualização do estado da corrida
  function handleStateRun() {
    !wasStarted ? _start() : _stop();
  }

  function _start() {
    setWatchId(
      Geolocation.watchPosition(
        latPos => {
          // Atualizando a distância
          setDistance(dis => dis + calcDistance(latPos));

          // Atualizando a posição
          const newPos = position;
          newPos.push(latPos);
          setPosition(newPos);

          console.log(position);
        },
        error => Alert.alert(JSON.stringify(error)),
        {
          enableHighAccuracy: true, // Uso de GPS ao invés de Wi-fi
          distanceFilter: 2, // Distância mínima (m) de atualização
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
    setPosition([]);
  }

  // Cálculo da distância entre duas geolocalizações
  function calcDistance(currentPos: Geolocation.GeoPosition) {
    let dis = 0;

    if (position.length !== 0) {
      const lastIndex = position.length - 1;

      /*
        AQUI LOCALIZARIA A FUNÇÃO DE VERIFICAÇÃO DA VERACIDADE DA CORRIDA,
        OU SEJA, O ALGORITMO ANTI-BURLAGEM, COM O FUNCIONAMENTO IDEALIZADO
        NO VÍDEO DO PROTÓTIPO
      */

      dis = getPreciseDistance(
        {
          latitude: position[lastIndex].coords.latitude,
          longitude: position[lastIndex].coords.longitude,
        },
        {
          latitude: currentPos.coords.latitude,
          longitude: currentPos.coords.longitude,
        },
      );
    }

    return dis;
  }

  // Transforma os kilômetros andados na moeda
  function kmToCityzen(): number {
    return (distance * 3) / 1000;
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
              fontSize={5.6}
              fontFamily="Lato-Bold">
              {
                // Transformando a distância 'm' em 'km'
                (distance / 1000).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })
              }
            </TextComponent>
            <TextComponent color={Colors.gray} fontSize={3} textAlign="center">
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
                size={48}
                color={Colors.white}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TextTimeContainer>
            <Cronometer started={wasStarted} />
            <TextComponent
              textAlign="center"
              fontSize={1.5}
              color={Colors.blueGray}>
              Tempo decorrido
            </TextComponent>
          </TextTimeContainer>
        </RunMainContainer>

        <InformationTextContainer>
          <TextComponent textAlign="center" color={Colors.gray} fontSize={1.4}>
            1km = 3 cityzen coin
          </TextComponent>
        </InformationTextContainer>
      </BackgroundWithHeader>
      {
        // Carregar aviso
        loadWarning && (
          <TabRunWarning
            text={`Deseja realmente parar sua corrida? Você está ganhando ${kmToCityzen()} CT`}
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

// Componente de confimação do término da corrida
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
            // Realização da ação de término e alterando o estado de visualização do componente
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

    // Se o cronômetro estiver ativo, acrescente 1 segundo no estado determinado
    if (started) {
      interval = setInterval(() => {
        setSeconds(sec => sec + 1);
      }, 1000);
    } else {
      // Caso esteja desativado, zere o cronômetro
      setSeconds(0);
    }

    return () => clearInterval(interval); // Reseta o setInterval
  }, [started, seconds]);

  return (
    <TextComponent
      textAlign="center"
      fontSize={2.6}
      fontFamily="Lato-Bold"
      color={Colors.blueGray}>
      {secondsToTimezone(seconds)}
    </TextComponent>
  );
};

const styles = StyleSheet.create({
  buttonInitOrStop: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Run;
