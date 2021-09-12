import React from 'react';
import {useNavigation} from '@react-navigation/core';

import BackgroundWithHeader from '../../components/BackgroundWithHeader/BackgroundWithHeader';
import TextComponent from '../../components/TextComponent/TextComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import Colors from '../../styles/colors.json';

import {
  BottomInfoContainer,
  CardBottomInfoContainer,
  CardInfoItemsContainer,
  ItemInfoCardContainer,
  LineBottomContainer,
  ColumnsCardContainer,
  CardColumnContainer,
  TopInfoCardContainer,
  TopInfoContainer,
  ButtonMapsContainer,
} from './styles';

const Recycling: React.FC = () => {
  const navigation = useNavigation();

  function goToMaps() {
    navigation.navigate('maps');
  }
  return (
    <BackgroundWithHeader justifyContent="space-between" nameIcon="arrow-back">
      <TopInfoContainer>
        <TopInfoCardContainer>
          <TextComponent
            fontFamily="Lato-Bold"
            fontSize={4.2}
            textAlign="center">
            12
          </TextComponent>
          <TextComponent fontSize={1.4} textAlign="center" color={Colors.gray}>
            kg já doados
          </TextComponent>
        </TopInfoCardContainer>

        <TopInfoCardContainer>
          <TextComponent
            fontFamily="Lato-Bold"
            fontSize={4.2}
            textAlign="center">
            150
          </TextComponent>
          <TextComponent fontSize={1.4} textAlign="center" color={Colors.gray}>
            citizen ganhos
          </TextComponent>
        </TopInfoCardContainer>
      </TopInfoContainer>

      <CardInfoItemsContainer>
        <ColumnsCardContainer>
          <CardColumnContainer>
            <TextComponent
              fontFamily="Lato-Bold"
              fontSize={1.2}
              textAlign="center">
              Item
            </TextComponent>
            <ItemInfoCardContainer>
              <MaterialIcons
                name="battery-alert"
                size={24}
                color={Colors.blueGray}
              />
              <TextComponent
                marginLeft={3}
                fontFamily="Lato-Regular"
                fontSize={1.2}
                textAlign="center"
                color={Colors.blueGray}>
                Pilha
              </TextComponent>
            </ItemInfoCardContainer>

            <ItemInfoCardContainer>
              <MaterialIcons
                name="description"
                size={24}
                color={Colors.blueGray}
              />
              <TextComponent
                marginLeft={3}
                fontFamily="Lato-Regular"
                fontSize={1.2}
                textAlign="center"
                color={Colors.blueGray}>
                Papel
              </TextComponent>
            </ItemInfoCardContainer>

            <ItemInfoCardContainer>
              <MaterialIcons
                name="computer"
                size={24}
                color={Colors.blueGray}
              />
              <TextComponent
                marginLeft={3}
                fontFamily="Lato-Regular"
                fontSize={1.2}
                textAlign="center"
                color={Colors.blueGray}>
                Eletrônicos
              </TextComponent>
            </ItemInfoCardContainer>
          </CardColumnContainer>

          <CardColumnContainer>
            <TextComponent
              fontFamily="Lato-Bold"
              fontSize={1.2}
              textAlign="center">
              kg para 1 citizen
            </TextComponent>

            <TextComponent
              textAlign="center"
              fontSize={1.2}
              color={Colors.gray}>
              0.2
            </TextComponent>

            <TextComponent
              textAlign="center"
              fontSize={1.2}
              color={Colors.gray}>
              1.6
            </TextComponent>

            <TextComponent
              textAlign="center"
              fontSize={1.2}
              color={Colors.gray}>
              0.3
            </TextComponent>
          </CardColumnContainer>

          <CardColumnContainer>
            <TextComponent
              fontFamily="Lato-Bold"
              fontSize={1.2}
              textAlign="center">
              kg reciclados
            </TextComponent>

            <TextComponent
              textAlign="center"
              fontSize={1.2}
              color={Colors.gray}>
              0.8
            </TextComponent>

            <TextComponent
              textAlign="center"
              fontSize={1.2}
              color={Colors.gray}>
              3.0
            </TextComponent>

            <TextComponent
              textAlign="center"
              fontSize={1.2}
              color={Colors.gray}>
              2.1
            </TextComponent>
          </CardColumnContainer>
        </ColumnsCardContainer>

        <ButtonComponent
          width={120}
          height={36}
          borderRadius={8}
          type="linear"
          primaryColor="rgba(106, 179, 206, 1)"
          secondaryColor="rgba(106, 179, 206, 0.6)"
          action={() => {}}
          alignItems="center"
          justifyContent="center"
          flexDirection="row">
          <TextComponent textAlign="center" fontSize={1.2}>
            Ver mais
          </TextComponent>
        </ButtonComponent>
      </CardInfoItemsContainer>

      <BottomInfoContainer>
        <TextComponent textAlign="left" fontSize={1.5} fontFamily="Lato-Bold">
          Parabéns! Você já ajudou a:
        </TextComponent>
        <LineBottomContainer>
          <CardBottomInfoContainer>
            <FontAwesome5 name="water" size={48} color={Colors.white} />
            <TextComponent
              textAlign="center"
              color={Colors.gray}
              fontSize={1.25}>
              evitar a contaminação de mais de{' '}
              <TextComponent
                textAlign="center"
                color={Colors.blue}
                fontSize={1.25}>
                1000m³
              </TextComponent>{' '}
              de água
            </TextComponent>
          </CardBottomInfoContainer>

          <CardBottomInfoContainer>
            <Entypo name="air" color={Colors.white} size={48} />
            <TextComponent
              textAlign="center"
              color={Colors.gray}
              fontSize={1.25}>
              evitar a emissão de mais de{' '}
              <TextComponent
                textAlign="center"
                color={Colors.blue}
                fontSize={1.25}>
                500kg
              </TextComponent>{' '}
              de CO2 na atmosfera
            </TextComponent>
          </CardBottomInfoContainer>
        </LineBottomContainer>
      </BottomInfoContainer>
      <ButtonMapsContainer>
        <ButtonComponent
          width={280}
          height={48}
          borderRadius={8}
          type="linear"
          primaryColor={Colors.black}
          secondaryColor="rgba(6, 7, 10, 0.25)"
          action={goToMaps}
          alignItems="center"
          justifyContent="center"
          flexDirection="row">
          <TextComponent textAlign="center" fontSize={1.2}>
            Mostrar centros de reciclagem!
          </TextComponent>
        </ButtonComponent>
      </ButtonMapsContainer>
    </BackgroundWithHeader>
  );
};

export default Recycling;
