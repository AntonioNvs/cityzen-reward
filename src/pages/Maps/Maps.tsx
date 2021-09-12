import React, {useEffect, useState} from 'react';

import {SafeAreaView} from 'react-native';
import MapView from 'react-native-maps';

interface PositionParams {
  latitude: number;
  longitude: number;
}

const Maps: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<PositionParams>(
    {} as PositionParams,
  );

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <MapView initialRegion={{}} />
    </SafeAreaView>
  );
};

export default Maps;
