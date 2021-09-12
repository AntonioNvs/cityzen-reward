import React, {useEffect, useState} from 'react';

import {
  Alert,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import Colors from '../../styles/colors.json';
import TextComponent from '../../components/TextComponent/TextComponent';

import Geolocation from 'react-native-geolocation-service';
import {requestLocationPermission} from '../../utils/requestPermission';

import MapView, {Marker} from 'react-native-maps';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CardMap, TrianglePointCard} from './styles';
import {useNavigation} from '@react-navigation/core';

interface PositionParams {
  latitude: number;
  longitude: number;
}

const Maps: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<PositionParams>({
    latitude: -18.8722384,
    longitude: -41.9696358,
  });

  const navigation = useNavigation();

  useEffect(() => {
    requestLocationPermission().then(() =>
      // Obtendo a posição atual
      Geolocation.getCurrentPosition(
        position => {
          setCurrentPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => Alert.alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 2000, maximumAge: 0},
      ),
    );
  }, []);

  return (
    <SafeAreaView>
      <MapView
        style={styles.mapView}
        initialRegion={{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}>
        <Marker coordinate={{latitude: -18.8685335, longitude: -41.987527}}>
          <CardMap>
            <Image
              source={require('../../../assets/images/place-1.jpg')}
              style={styles.image}
            />
            <TextComponent
              textAlign="center"
              fontFamily="Lato-Bold"
              fontSize={0.8}
              marginBottom={6}>
              RECICLAR GV
            </TextComponent>
          </CardMap>
          <TrianglePointCard />
        </Marker>

        <Marker coordinate={{latitude: -18.8722384, longitude: -41.9696358}}>
          <CardMap>
            <Image
              source={require('../../../assets/images/place-2.jpg')}
              style={styles.image}
            />
            <TextComponent
              textAlign="center"
              fontFamily="Lato-Bold"
              fontSize={0.8}
              marginBottom={6}>
              Abrapel Reciclagem GV
            </TextComponent>
          </CardMap>
          <TrianglePointCard />
        </Marker>
      </MapView>

      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={32} color={Colors.gray} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  arrowBack: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  image: {
    borderRadius: 12,
    width: '100%',
    height: '75%',
  },
});

export default Maps;
